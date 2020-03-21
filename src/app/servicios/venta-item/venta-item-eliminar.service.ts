import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { VentaItemResponse } from "src/app/modelos/VentaItemResponse";

@Injectable({
  providedIn: "root"
})
export class VentaItemEliminarService {
  constructor(private http: HttpClient) {}

  Url = environment.apiUrl + "/api/v1/sales/items/";

  deleteVentaItem(id) {
    return this.http.delete<VentaItemResponse>(this.Url + id);
  }
}
