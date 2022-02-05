import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ContactModel } from './contact.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

/**
 * Contact component
 */
export class ContactComponent implements OnInit
{
    public contactForm: FormGroup;
    public submitted: boolean;
    public success: boolean;
    public loading: boolean;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly http: HttpClient,
    )
    {
        this.submitted = false;
        this.success = false;
        this.loading = false;
    }

    ngOnInit(): void
    {
        this.contactForm = this.formBuilder.group({
            fullName    : ['', [Validators.required]],
            email       : ['', [Validators.required, Validators.email]],
            subject     : ['', [Validators.required]],
            message     : ['', [Validators.required]]
        });
    }

    get form(): { [key: string]: AbstractControl }
    {
        return this.contactForm.controls;
    }

    onSubmit(form: FormGroup)
    {
        this.submitted = true;
        this.loading = true;
        if (form.invalid) return;
        const contact = <ContactModel>form.getRawValue();
        this.sendMail(contact)
            .subscribe(response => {
                console.log(response);
                if (response)
                {
                    this.success = true;
                    this.loading = false;
                    this.contactForm.reset();
                    this.hiddeAlert();
                }
            });
    }

    /**
     * @description
     * Send mail to the server
     * @param {ContactModel} contact
     * @returns {any}
     */
    private sendMail(contact: ContactModel): Observable<any>
    {
        return this.http.post('https://api.controlpe.ga/mail', contact);
    }

    /**
     * @description
     * Hidden alert 
     */
    private hiddeAlert(): void
    {
        setTimeout(()=>{
            this.success = false;
        }, 3000);
    }
}
