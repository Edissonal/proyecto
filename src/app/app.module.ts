import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { QuienComponent } from './quien/quien.component';
import { ComuComponent } from './comu/comu.component';
import { ConsulComponent } from './consul/consul.component';
import { SistemasComponent } from './sistemas/sistemas.component';
import { InfraComponent } from './infra/infra.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ContactoService} from './servicio/contacto.service';




const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'quien',component:QuienComponent},
  {path:'comu',component:ComuComponent},
  {path:'consul',component:ConsulComponent},
  {path:'sistemas',component:SistemasComponent},
  {path:'infra',component:InfraComponent},
  {path:'contacto',component:ContactoComponent},
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    QuienComponent,
    ComuComponent,
    ConsulComponent,
    SistemasComponent,
    InfraComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
