import { Component, OnInit, Input } from '@angular/core';
import {HeaderBanner} from '../../models/header-banner';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

  @Input() bannerData:HeaderBanner;

  constructor() { }

  ngOnInit() {    
    if(this.bannerData.stepper===undefined){
      this.bannerData.stepper=false;
    }
    if(this.bannerData.subPage===undefined){
      this.bannerData.subPage=true;
    }
    console.log("bannerData",this.bannerData);
  }

}
