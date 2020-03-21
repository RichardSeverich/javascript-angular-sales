import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Services
import { ItemMostrarService } from "src/app/servicios/item/item-mostrar.service";
import { VentaItemMostrarService } from "src/app/servicios/venta-item/venta-item-mostrar.service";
import { VentaItemEliminarService } from "src/app/servicios/venta-item/venta-item-eliminar.service";
// Models
import { Item } from "src/app/modelos/Item";
import { VentaItem } from "src/app/modelos/VentaItem";
import { VentaItemDetalle } from "src/app/modelos/VentaItemDetalle";
import { ItemResponse } from "src/app/modelos/ItemResponse";
import { VentaItemResponse } from "src/app/modelos/VentaItemResponse";

@Component({
  selector: "app-venta-item-mostrar",
  templateUrl: "./venta-item-mostrar.component.html",
  styleUrls: ["./venta-item-mostrar.component.css"]
})
export class VentaItemMostrarComponent implements OnInit {
  // Declare Models
  ventaItem: VentaItem;
  item: Item;
  // Models Responses
  ventaItemResponse: VentaItemResponse;
  itemResponse: ItemResponse;
  // Arrays
  arrayVentasItems: VentaItem[];
  arrayItems: Item[];
  arrayVentaItemDetalle: VentaItemDetalle[];
  // Declare Atributes Recived
  ventaId: String;
  ventaIdSeller: String;
  ventaIdClient: String;
  ventaDate: String;
  ventaTotal: number;
  // Message Errors
  errorMessage = "Error, please contact your administrator";

  constructor(
    private router: Router,
    private serviceVentaItemMostrar: VentaItemMostrarService,
    private serviceVentaItemEliminar: VentaItemEliminarService,
    private serviceItemMostrar: ItemMostrarService
  ) {}

  ngOnInit() {
    this.ventaTotal = 0;
    this.loadData();
  }

  loadData() {
    this.ventaId = localStorage.getItem("ventaId");
    this.ventaIdSeller = localStorage.getItem("ventaIdSeller");
    this.ventaIdClient = localStorage.getItem("ventaIdClient");
    this.ventaDate = localStorage.getItem("ventaDate");
    this.getVentaItem(this.ventaId);
  }

  getVentaItem(ventaId) {
    this.serviceVentaItemMostrar.getVentaItem().subscribe(response => {
      console.log(response);
      this.ventaItemResponse = response;
      let arrayAuxVentaItem = <any>response.data;
      // Get VentasItems Filtrado.
      arrayAuxVentaItem = arrayAuxVentaItem.filter(
        obj => obj.idSale == ventaId
      );
      this.arrayVentasItems = arrayAuxVentaItem.filter(
        obj => obj.idSale == ventaId
      );
      // Build Details Sales
      let index = 0;
      var arrayAuxDetalles = [];
      arrayAuxVentaItem.forEach(element => {
        this.buildDetalleVentas(element, arrayAuxDetalles, index);
        index++;
      });
      this.arrayVentaItemDetalle = arrayAuxDetalles;
    });
  }

  buildDetalleVentas(element, arrayAuxDetalles, index) {
    this.serviceItemMostrar.getItemById(element.idItem).subscribe(response => {
      this.itemResponse = response;
      this.arrayItems = this.itemResponse.data;
      this.item = this.arrayItems[0];
      let ventaItemDetalle = new VentaItemDetalle();
      ventaItemDetalle.id = element.id;
      ventaItemDetalle.idSale = element.idSale;
      ventaItemDetalle.idItem = element.idItem;
      ventaItemDetalle.nameItem = this.item.name;
      ventaItemDetalle.priceItem = this.item.price;
      ventaItemDetalle.quantity = element.quantity;
      arrayAuxDetalles[index] = ventaItemDetalle;
      // Convert Number Price and Quantity
      let priceItem = +ventaItemDetalle.priceItem;
      let quantityItem = +ventaItemDetalle.quantity;
      this.ventaTotal = this.ventaTotal + priceItem * quantityItem;
    });
  }

  ventaItemEliminar(ventaItemId) {
    this.serviceVentaItemEliminar.deleteVentaItem(ventaItemId).subscribe(
      response => {
        this.ventaItemResponse = response;
        alert(this.ventaItemResponse.textMessage);
        this.pageRefresh();
      },
      error => {
        console.log(error);
        this.ventaItemResponse = error.error;
        if (this.ventaItemResponse.textMessage != undefined) {
          console.log(this.ventaItemResponse.textMessage);
          alert(this.ventaItemResponse.textMessage);
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
