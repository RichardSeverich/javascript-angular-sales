import { Component, OnInit } from "@angular/core";
// Services
import { ItemMostrarService } from "src/app/servicios/item/item-mostrar.service";
import { ItemEliminarService } from "src/app/servicios/item/item-eliminar.service";
// Models
import { Item } from "src/app/modelos/Item";
import { ItemResponse } from "src/app/modelos/ItemResponse";

@Component({
  selector: "app-item-mostrar",
  templateUrl: "./item-mostrar.component.html",
  styleUrls: ["./item-mostrar.component.css"]
})
export class ItemMostrarComponent implements OnInit {
  arrayItems: Item[];
  itemResponse: ItemResponse;

  errorMessage = "Error, please contact your administrator";

  constructor(
    private serviceMostrarItem: ItemMostrarService,
    private serviceEliminarItem: ItemEliminarService
  ) {}

  ngOnInit() {
    this.itemMostrar();
  }

  itemMostrar() {
    this.serviceMostrarItem.getItem().subscribe(response => {
      this.itemResponse = response;
      this.arrayItems = this.itemResponse.data;
    });
  }

  itemEliminar(itemId) {
    this.serviceEliminarItem.deleteItem(itemId).subscribe(
      response => {
        this.itemResponse = response;
        alert(this.itemResponse.textMessage);
        this.pageRefresh();
      },
      error => {
        console.log(error);
        this.itemResponse = error.error;
        if (this.itemResponse.textMessage != undefined) {
          console.log(this.itemResponse.textMessage);
          alert(this.itemResponse.textMessage);
        } else {
          alert(this.errorMessage);
        }
      }
    );
  }

  pageRefresh() {
    location.reload();
  }
}
