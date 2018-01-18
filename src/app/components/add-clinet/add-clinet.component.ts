import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-clinet',
  templateUrl: './add-clinet.component.html',
  styleUrls: ['./add-clinet.component.css']
})
export class AddClinetComponent implements OnInit {
  client:Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  }
  disableBalanceOnAdd: boolean = true 

  constructor(public fms: FlashMessagesService, public router:Router, public clientService: ClientService) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    
    if(!valid){
      console.log('not valid form');
      this.fms.show('Please fill in all fields', {cssClass:'alert-danger', timeout:4000})
      this.router.navigate(['add-client'])
    }
    else{
      console.log(value);
      if(this.disableBalanceOnAdd){
        value.balance =0
      }
      this.clientService.addClient(value);
      this.fms.show('New client is added', {cssClass:'alert-success', timeout:4000})
      this.router.navigate([''])
    }
    
  }

}
