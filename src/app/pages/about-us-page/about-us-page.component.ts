import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from 'src/app/models/header-banner';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {
  bannerData:HeaderBanner;
  constructor() { }

  ngOnInit() {
    this.bannerData={      
      bannerData:[
        {
          image:"assets/img/banner/banner-inner.jpg",
          heading:"About"
        }
      ],
    }
  }

}
