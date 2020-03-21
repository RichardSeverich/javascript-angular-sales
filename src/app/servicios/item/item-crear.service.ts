import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
// Models
import { Item } from "src/app/modelos/Item";
import { ItemResponse } from "src/app/modelos/ItemResponse";

@Injectable({
  providedIn: "root"
})
export class ItemCrearService {
  constructor(private http: HttpClient) {}

  Url = environment.apiUrl + "/api/v1/items";

  createItem(item: Item) {
    return this.http.post<ItemResponse>(this.Url, item);
  }
}
