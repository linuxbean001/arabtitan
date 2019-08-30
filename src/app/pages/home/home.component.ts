import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from 'src/app/models/header-banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerData:HeaderBanner;
  constructor() { }

  ngOnInit() {
    this.bannerData={
      bannerData:[
        {
          image:"assets/img/banner/banner.jpg",
          heading:"ArbTitan",
          subheading:"ArbTitan is an advanced piece of technology that is built for you to take advantage of current crypto markets.",
          buttons:[
            {text:'SUBSCRIBE FOR FREE',link:"/subscribe"},
            {text:'LEARN MORE',link:"/about"}
          ],
        }
      ],      
      subPage:false,
      stepper:true,
    }
  }

}
