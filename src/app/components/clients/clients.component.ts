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
  constructor(
    public clientService: ClientService
  ) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
    console.log(this.clients)
  };

}
