import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    
    if(!valid){
      console.log('not valid form');      
    }
    else{
      console.log(value);
      if(this.disableBalanceOnAdd==true){

      }
      
    }
    
  }

}
