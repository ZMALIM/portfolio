import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ServicesComponent } from './services/services.component';
import { ClientComponent } from './client/client.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { ScrollspyDirective } from './scrollspy.directive';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        SkillsComponent,
        ExperiencesComponent,
        ServicesComponent,
        ClientComponent,
        TeamComponent,
        FaqComponent,
        PricingComponent,
        ContactComponent,
        FooterComponent,
        SwitcherComponent,
        ThemeSwitcherComponent,
        ScrollspyDirective
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        NgxTypedJsModule,
        ScrollToModule.forRoot()
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        SkillsComponent,
        ExperiencesComponent,
        ServicesComponent,
        ClientComponent,
        TeamComponent,
        FaqComponent,
        PricingComponent,
        ContactComponent,
        FooterComponent,
        SwitcherComponent,
        ThemeSwitcherComponent,
        ScrollspyDirective
    ]
})
export class SharedModule { }
