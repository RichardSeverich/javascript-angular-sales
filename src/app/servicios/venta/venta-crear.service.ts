import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VentaResponse } from 'src/app/modelos/VentaResponse';
import { Venta } from 'src/app/modelos/Venta';


@Injectable({
  providedIn: 'root'
})
export class VentaCrearService {

  constructor(private http:HttpClient) { }

  Url=environment.apiUrl + '/api/v1/sales'

  createVenta(venta:Venta){
      return this.http.post<VentaResponse>(this.Url, venta)
  }
}
