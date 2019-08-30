import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from 'src/app/models/header-banner';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.scss']
})
export class SupportPageComponent implements OnInit {
  bannerData:HeaderBanner;
  constructor() { }

  ngOnInit() {
    this.bannerData={      
      bannerData:[
        {
          image:"assets/img/banner/banner-inner.jpg",
          heading:"Support"
        }
      ],
    }
  }

}
