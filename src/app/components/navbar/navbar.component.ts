import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogedIn:boolean = false;
  constructor(public fms:FlashMessagesService, public router:Router, public clientService:ClientService) { }

  ngOnInit() {
    if(this.clientService.isLogedIn == true){
      this.isLogedIn = true
      console.log('login');
      
    } else {
      this.isLogedIn = false;
      console.log('not login');
      
    }
  }
  ngDoCheck(){
    console.log('check');
    
    if(this.clientService.isLogedIn == true){
      this.isLogedIn = true
      console.log('login');
      
    } else {
      this.isLogedIn = false;
      console.log('not login');
      
    }
  }

  logout(){
    this.clientService.logout()
    this.fms.show('success login', {cssClass:'alert-success', timeout:4000})
    this.router.navigate(['/login'])
  }

}
