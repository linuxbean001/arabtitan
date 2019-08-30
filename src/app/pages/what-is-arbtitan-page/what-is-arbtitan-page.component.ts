import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from 'src/app/models/header-banner';

@Component({
  selector: 'app-what-is-arbtitan-page',
  templateUrl: './what-is-arbtitan-page.component.html',
  styleUrls: ['./what-is-arbtitan-page.component.scss']
})
export class WhatIsArbtitanPageComponent implements OnInit {
  bannerData:HeaderBanner;
  constructor() { }

  ngOnInit() {
    this.bannerData={      
      bannerData:[
        {
          image:"assets/img/banner/banner-inner.jpg",
          heading:"What Is ArbTitan?"
        }
      ],
    }
  }

}
