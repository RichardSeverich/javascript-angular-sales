import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// Models
import { VentaItem } from 'src/app/modelos/VentaItem';
import { VentaItemResponse } from 'src/app/modelos/VentaItemResponse';

@Injectable({
  providedIn: 'root'
})
export class VentaItemCrearService {

  constructor(private http:HttpClient) { }

  Url=environment.apiUrl + '/api/v1/sales/items'

  postVentaItem(ventaItem:VentaItem){
    return this.http.post<VentaItemResponse>(this.Url, ventaItem)
  }

}
