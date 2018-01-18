import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// AngularFire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFirestore } from 'angularfire2/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';
//componets imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClinetComponent } from './components/add-clinet/add-clinet.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
// services imports
import { ClientService } from './services/client.service'
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component:AddClinetComponent,  canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent,  canActivate:[AuthGuard]}
]

export const fireBaseConfig = {
  apiKey: "AIzaSyAsKidkH-ngEJoXOJq-gCfONyhzbjSRWjQ",
  authDomain: "clientpanel-959af.firebaseapp.com",
  databaseURL: "https://clientpanel-959af.firebaseio.com",
  storageBucket: "clientpanel-959af.appspot.com",
  messagingSenderId: "210529837221"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClinetComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    SettingsComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(fireBaseConfig),
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
