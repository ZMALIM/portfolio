import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { PagesRoutingModule } from './pages-routing.module'

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        MainComponent,
        LoginComponent,
        PasswordForgetComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        ScrollToModule.forRoot(),
        NgxTypedJsModule,
        CarouselModule
    ]
})
export class PagesModule { }
