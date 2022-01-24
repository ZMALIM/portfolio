import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientComponent } from './client/client.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { ScrollspyDirective } from './scrollspy.directive';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        ClientComponent,
        TeamComponent,
        FaqComponent,
        PricingComponent,
        ContactComponent,
        FooterComponent,
        SwitcherComponent,
        ScrollspyDirective
    ],
    imports: [
        CommonModule,
        CarouselModule,
        NgxTypedJsModule,
        ScrollToModule.forRoot()
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        ClientComponent,
        TeamComponent,
        FaqComponent,
        PricingComponent,
        ContactComponent,
        FooterComponent,
        SwitcherComponent,
        ScrollspyDirective
    ]
})
export class SharedModule { }
