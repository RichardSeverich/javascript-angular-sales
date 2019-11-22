import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentaItemResponse } from 'src/app/modelos/VentaItemResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaItemMostrarService {

  constructor(private http:HttpClient) { }

    Url=environment.apiUrl + '/api/v1/sales/items'

    getVentaItem(){
      return this.http.get<VentaItemResponse>(this.Url)
    }
}
