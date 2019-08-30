import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from 'src/app/models/header-banner';

@Component({
  selector: 'app-user-agreement-page',
  templateUrl: './user-agreement-page.component.html',
  styleUrls: ['./user-agreement-page.component.scss']
})
export class UserAgreementPageComponent implements OnInit {
  bannerData:HeaderBanner;
  constructor() { }

  ngOnInit() {
    this.bannerData={      
      bannerData:[
        {
          image:"assets/img/banner/banner-inner.jpg",
          heading:"User Agreement"
        }
      ],
    }
  }

}
