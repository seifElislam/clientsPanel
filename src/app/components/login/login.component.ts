import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  constructor(public fms:FlashMessagesService, public router:Router, public clientService: ClientService) { }

  ngOnInit() {
  }

  login(){
    if(this.clientService.login(this.email, this.password)){
      this.fms.show('success login', {cssClass:'alert-success', timeout:4000})
      this.router.navigate([''])
      
    } else {
      this.fms.show('invalid login', {cssClass:'alert-danger', timeout:4000})
      this.router.navigate(['/login'])
    }
    this.email = "";
    this.password = "";
  }

}
