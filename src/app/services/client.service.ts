import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';
// import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ClientService {
  clients: Client[];
  client: Client;

  constructor() {
    this.clients = [
      {
        id: 1,
        firstName: 'Seif',
        lastName: 'Hegazy',
        phone: '111-222-333',
        email: 'seif@gmail.com',
        balance: 100.0
      },
      {
        id: 2,
        firstName: 'Adham',
        lastName: 'Hegazy',
        phone: '111-222-333',
        email: 'Adham@gmail.com',
        balance: 200.0
      },
      {
        id: 3,
        firstName: 'Ali',
        lastName: 'Hassan',
        phone: '111-222-333',
        email: 'Ali@gmail.com',
        balance: 300.0
      }
    ]
   }

   getClients(){
     console.log('get all');
     return this.clients;
   }

   addClient(){
     
   }

}
 