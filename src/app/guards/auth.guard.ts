import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import 'rxj/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { ClientService } from '../services/client.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public router:Router, public clientService:ClientService){

    }

    CanActivate(): Observable<boolean>|boolean{
        return this.canActivate()
    }

    canActivate(){
        if(this.clientService.isLogedIn == true){
            return true
        } else {
            this.router.navigate(['/login'])
            return false
        }
    }
}