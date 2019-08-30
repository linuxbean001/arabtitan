import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from 'src/app/models/header-banner';

@Component({
  selector: 'app-why-use-us-page',
  templateUrl: './why-use-us-page.component.html',
  styleUrls: ['./why-use-us-page.component.scss']
})
export class WhyUseUsPageComponent implements OnInit {
  bannerData:HeaderBanner;
  constructor() { }

  ngOnInit() {
    this.bannerData={      
      bannerData:[
        {
          image:"assets/img/banner/banner-inner.jpg",
          heading:"Why Use Us?"
        }
      ],
    }
  }

}
