import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { WhyUseUsPageComponent } from './pages/why-use-us-page/why-use-us-page.component';
import { WhatIsArbtitanPageComponent } from './pages/what-is-arbtitan-page/what-is-arbtitan-page.component';
import { MarketsPageComponent } from './pages/markets-page/markets-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { UserAgreementPageComponent } from './pages/user-agreement-page/user-agreement-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { FreeUserComponent } from './pages/free-user/free-user.component';
import { Tier1Component } from './pages/tier1/tier1.component';
import { Tier2Component } from './pages/tier2/tier2.component';
import { Tier3Component } from './pages/tier3/tier3.component';
import { TierMenuComponent } from './layout/tier-menu/tier-menu.component';

const MainRoutes: Routes=[
  {
    path:'',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:"faq",
    component:FaqPageComponent
  },
  {
    path:'whyuseus',
    component:WhyUseUsPageComponent
  },
  {
    path:"whatisarbtitan",
    component: WhatIsArbtitanPageComponent
  },
  {
    path:"about",
    component:AboutUsPageComponent
  },
  {
    path:"agreement",
    component:UserAgreementPageComponent
  },
  {
    path:"privacy",
    component:PrivacyPolicyPageComponent
  },
  {
    path:"support",
    component:SupportPageComponent
  },
  {
    path:"contact",
    component:ContactUsPageComponent
  },
  {
    path:"markets",
    component:MarketsPageComponent
  },
  {
    path:"packages",
    component:PackagesComponent
  },
  {
    path:"free-user",
    component:FreeUserComponent
  } 
];


const AuthRoutes: Routes=[
  {
    path:"login",
    component:LoginPageComponent
  },
  {
    path:'signup',
    component:SignupPageComponent
  },
  {
    path:'subscribe',
    component:SubscribePageComponent
  }
];

const tierRoutes: Routes=[
  {
    path:"tier1",
    component:Tier1Component
  },
  {
    path:"tier2",
    component:Tier2Component
  },
  {
    path:"tier3",
    component:Tier3Component
  }
];

const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children: MainRoutes
  },
  {
    path:'',
    component: AuthLayoutComponent,
    children: AuthRoutes
  }, 
  {
    path:'',
    component: TierMenuComponent,
    children: tierRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
