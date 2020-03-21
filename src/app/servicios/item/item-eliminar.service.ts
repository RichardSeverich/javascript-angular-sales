import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ItemResponse } from "src/app/modelos/ItemResponse";

@Injectable({
  providedIn: "root"
})
export class ItemEliminarService {
  constructor(private http: HttpClient) {}

  Url = environment.apiUrl + "/api/v1/items/";

  deleteItem(id) {
    return this.http.delete<ItemResponse>(this.Url + id);
  }
}
