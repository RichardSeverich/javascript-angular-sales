import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemResponse } from 'src/app/modelos/ItemResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemMostrarService {

  constructor(private http:HttpClient) { }

  Url=environment.apiUrl + '/api/v1/items'

  getItem(){
    return this.http.get<ItemResponse>(this.Url)
  }
}
