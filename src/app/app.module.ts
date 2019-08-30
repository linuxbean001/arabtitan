import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderStepBannerComponent } from './layout/header-step-banner/header-step-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { WhyUseUsComponent } from './components/why-use-us/why-use-us.component';
import { WhatIsArbTitanComponent } from './components/what-is-arbtitan/what-is-arbtitan.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WantToPromoteArbtitanComponent } from './components/want-to-promote-arbtitan/want-to-promote-arbtitan.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { WhyUseUsPageComponent } from './pages/why-use-us-page/why-use-us-page.component';
import { WhatIsArbtitanPageComponent } from './pages/what-is-arbtitan-page/what-is-arbtitan-page.component';
import { MarketsPageComponent } from './pages/markets-page/markets-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { UserAgreementPageComponent } from './pages/user-agreement-page/user-agreement-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AuthFooterComponent } from './layout/auth-footer/auth-footer.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SubscribeFormComponent } from './auth/subscribe-form/subscribe-form.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { FreeUserComponent } from './pages/free-user/free-user.component';
import { Tier1Component } from './pages/tier1/tier1.component';
import { Tier2Component } from './pages/tier2/tier2.component';
import { Tier3Component } from './pages/tier3/tier3.component';
import { TierHeaderComponent } from './layout/tier-header/tier-header.component';
import { TierFooterComponent } from './layout/tier-footer/tier-footer.component';
import { TierMenuComponent } from './layout/tier-menu/tier-menu.component';

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HeaderStepBannerComponent,
    HomeComponent,
    WhyUseUsComponent,
    WhatIsArbTitanComponent,
    HowItWorksComponent,
    WantToPromoteArbtitanComponent,
    FaqComponent,
    FaqPageComponent,
    HeroSliderComponent,
    WhyUseUsPageComponent,
    WhatIsArbtitanPageComponent,
    MarketsPageComponent,
    AboutUsPageComponent,
    UserAgreementPageComponent,
    PrivacyPolicyPageComponent,
    SupportPageComponent,
    ContactUsPageComponent,
    ContactFormComponent,
    LoginFormComponent,
    SignupFormComponent,
    LoginPageComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    AuthFooterComponent,
    SignupPageComponent,
    SubscribeFormComponent,
    SubscribePageComponent,
    PackagesComponent,
    FreeUserComponent,
    Tier1Component,
    Tier2Component,
    Tier3Component,
    TierHeaderComponent,
    TierFooterComponent,
    TierMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
