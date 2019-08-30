import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

  toggleNav(mySidenav:any){    
    if(mySidenav.style.width==='0px'){
      mySidenav.style.width='250px';
    }else{
      mySidenav.style.width = "0px";
    }   
  }

}
