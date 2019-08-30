import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-what-is-arbtitan',
  templateUrl: './what-is-arbtitan.component.html',
  styleUrls: ['./what-is-arbtitan.component.scss']
})
export class WhatIsArbTitanComponent implements OnInit {
  @Input() isSubPage:boolean=true;
  constructor() { }

  ngOnInit() {   
    
  }

}
