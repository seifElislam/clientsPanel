import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:number;
  client:Client;
  hasBalance:boolean = false;
  showBalanceUpdateInput:boolean = false;

  constructor(
    public clientService:ClientService,
    public router:Router,
    public route: ActivatedRoute,
    public fms: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getClientInfo(this.id)
    
  }

  getClientInfo(id){
   this.client = this.clientService.getClientDetalis(id)
   console.log(this.client);
   if(this.client.balance > 0){
    this.hasBalance = true;
   }
   
  }

}
