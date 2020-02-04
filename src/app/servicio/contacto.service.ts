import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { promise } from "protractor";
import { resolve } from "path";
import { reject } from "q";


//import 'rxjs/Rx';

@Injectable({
  providedIn: "root"
})
export class ContactoService {
  PresUrl = "http://www.tecsoni.com.co/envio/index.php/productos";

  constructor(private http: Http) {}

  postContacto(contacto: any) {
    const newpres = JSON.stringify(contacto);
    const headers = new Headers({
      "Content-Type": "application/json"
    });

     
    return this.http.post(this.PresUrl, newpres, { headers })
       
      
  }
}
