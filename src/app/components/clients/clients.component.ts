import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  total:number;
  constructor(
    public clientService: ClientService
  ) { 
    
  }

  ngOnInit() {
    this.clients = this.clientService.getClients();
    this.getTotal();
    console.log(this.clients)
  };

  getTotal(){
    let total = 0.0
    for(let i=0;i<this.clients.length; i++){
        total += this.clients[i].balance
    }
    this.total = total
    console.log(total);
    
    return this.total
  }

}
