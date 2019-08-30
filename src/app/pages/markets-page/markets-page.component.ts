import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from 'src/app/models/header-banner';

@Component({
  selector: 'app-markets-page',
  templateUrl: './markets-page.component.html',
  styleUrls: ['./markets-page.component.scss']
})
export class MarketsPageComponent implements OnInit {
  bannerData:HeaderBanner;
  constructor() { }

  ngOnInit() {
    this.bannerData={      
      bannerData:[
        {
          image:"assets/img/banner/banner-inner.jpg",
          heading:"Markets"
        }
      ],
    }
  }

}
