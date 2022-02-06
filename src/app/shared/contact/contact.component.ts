import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

import { ContactModel } from './contact.model';
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

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly http: HttpClient,
    )
    {
        this.submitted = false;
        this.success = false;
    }

    ngOnInit(): void
    {
        this.contactForm = this.formBuilder.group({
            fullName    : [null, [Validators.required]],
            email       : [null, [Validators.required, Validators.email]],
            subject     : [null, [Validators.required]],
            message     : [null, [Validators.required]]
        });
    }

    /**
     * @description
     * form submit
     */
    get form(): { [key: string]: AbstractControl }
    {
        return this.contactForm.controls;
    }

    /**
     * @description
     * On submit contact form
     * @param {FormGroup} form
     * @returns {any}
     */
    public onSubmit(form: FormGroup): void
    {
        if (form.invalid)
        {
            this.contactForm.markAllAsTouched();
            return;
        }

        this.submitted = true;
        this.sendMail(<ContactModel>form.getRawValue());
    }

    /**
     * @description
     * Send mail to the server
     * @param {ContactModel} contact
     * @returns {any}
     */
    private sendMail(contact: ContactModel): void
    {
        this.http
            .post('https://api.controlpe.ga/mail', contact)
            .pipe(finalize(() => {
                this.submitted = false;
                this.success = true;
                this.contactForm.reset();
                this.hiddeAlert();
            }))
            .subscribe();
    }

    /**
     * @description
     * Hidden alert
     */
    private hiddeAlert(): void
    {
        setTimeout(()=>{
            this.success = false;
        }, 4000);
    }
}
