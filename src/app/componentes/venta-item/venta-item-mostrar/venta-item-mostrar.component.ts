import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaItemResponse } from 'src/app/modelos/VentaItemResponse';
import { VentaItemMostrarService } from 'src/app/servicios/venta-item/venta-item-mostrar.service';
import { ItemMostrarService } from 'src/app/servicios/item/item-mostrar.service';
// Import Models
import { VentaItem } from 'src/app/modelos/VentaItem';
import { Item } from 'src/app/modelos/Item';
import { ItemResponse } from 'src/app/modelos/ItemResponse';
import { VentaItemDetalle } from 'src/app/modelos/VentaItemDetalle';


@Component({
  selector: 'app-venta-item-mostrar',
  templateUrl: './venta-item-mostrar.component.html',
  styleUrls: ['./venta-item-mostrar.component.css']
})
export class VentaItemMostrarComponent implements OnInit {

  // Declare Models
  ventaItem:VentaItem;
  item: Item;
  // Models Responses
  ventaItemResponse:VentaItemResponse;
  itemResponse:ItemResponse;
  // Arrays
  arrayVentasItems:VentaItem[];
  arrayItems: Item[];
  arrayVentaItemDetalle:VentaItemDetalle[];

  // Declare Atributes Recived
  ventaId:String;
  ventaIdSeller:String;
  ventaIdClient:String;
  ventaDate:String;
  
  constructor(private router:Router, 
    private service:VentaItemMostrarService, 
    private serviceItem:ItemMostrarService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.ventaId = localStorage.getItem("ventaId");
    this.ventaIdSeller = localStorage.getItem("ventaIdSeller");
    this.ventaIdClient = localStorage.getItem("ventaIdClient");
    this.ventaDate = localStorage.getItem("ventaDate");
    this.getVentaItem(this.ventaId);
  }

  getVentaItem(ventaId){
    this.service.getVentaItem().subscribe( response => {
      console.log(response);
      this.ventaItemResponse = response;
      let arrayAux = <any>response.data;
      // Get VentasItems Filtrado.
      arrayAux = arrayAux.filter(obj => obj.idSale == ventaId);
      this.arrayVentasItems = arrayAux.filter(obj => obj.idSale == ventaId);
      // Build Details Sales
      let index = 0;
      var arrayAuxDetalles = [];
      arrayAux.forEach(element => {
        this.buildDetalleVentas(element, arrayAuxDetalles, index);
        index++;
      });
      this.arrayVentaItemDetalle = arrayAuxDetalles;
    })
  }

  buildDetalleVentas(element, arrayAuxDetalles, index){
    this.serviceItem.getItemById(element.id).subscribe( 
      response => {
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
      }
    )

  }
}
