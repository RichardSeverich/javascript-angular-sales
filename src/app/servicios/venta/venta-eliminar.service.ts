import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VentaResponse } from 'src/app/modelos/VentaResponse';

@Injectable({
  providedIn: 'root'
})
export class VentaEliminarService {

  constructor(private http:HttpClient) { }
  
  Url=environment.apiUrl + '/api/v1/sales/'
  
  deleteVenta(id){
    return this.http.delete<VentaResponse>(this.Url + id)
  }
}
