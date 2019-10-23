import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentaResponse } from 'src/app/modelos/VentaResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaMostrarService {

    constructor(private http:HttpClient) { }
  
    Url=environment.apiUrl + '/api/v1/sales'
  
    getItem(){
      return this.http.get<VentaResponse>(this.Url)
    }
}
