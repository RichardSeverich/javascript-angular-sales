import { Component, OnInit } from '@angular/core';
// Import Services
import { ItemMostrarService } from 'src/app/servicios/item/item-mostrar.service';
import { VentaItemCrearService } from 'src/app/servicios/venta-item/venta-item-crear.service';
// Import Models
import { Item } from 'src/app/modelos/Item';
import { VentaItem } from 'src/app/modelos/VentaItem';
import { ItemResponse } from 'src/app/modelos/ItemResponse';
import { VentaItemResponse } from 'src/app/modelos/VentaItemResponse';

@Component({
  selector: 'app-venta-item-crear',
  templateUrl: './venta-item-crear.component.html',
  styleUrls: ['./venta-item-crear.component.css']
})
export class VentaItemCrearComponent implements OnInit {

  // Venta Items
  ventaItemResponse:VentaItemResponse;
  // Items
  arrayItems:Item[];
  itemResponse:ItemResponse;

  // Declare Atributes Recived
  ventaId:String;
  ventaIdSeller:String;
  ventaIdClient:String;
  ventaDate:String;
  ventaTotal:number;

  // Validations Messages
  errorValidation="Error, validation error";
  errorMessage="Error, please contact your administrator";
  
  constructor(private serviceItemMostrar:ItemMostrarService, private serviceVentaItem:VentaItemCrearService) { }

  ngOnInit() {
    this.getItems();
    this.loadData();
  }

  loadData(){
    this.ventaId = localStorage.getItem("ventaId");
    this.ventaIdSeller = localStorage.getItem("ventaIdSeller");
    this.ventaIdClient = localStorage.getItem("ventaIdClient");
    this.ventaDate = localStorage.getItem("ventaDate");
  }

  getItems() {
    this.serviceItemMostrar.getItem().subscribe( response => {
      this.itemResponse = response;
      this.arrayItems = this.itemResponse.data;
    })
  }

  ventaItemCrear(itemId, quantity) {
    let ventaItem = new VentaItem();
    ventaItem.idItem = itemId;
    ventaItem.idSale = this.ventaId;
    ventaItem.quantity = quantity;
    this.serviceVentaItem.postVentaItem(ventaItem).subscribe( 
      response => {
        this.ventaItemResponse = response;
        alert(this.ventaItemResponse.textMessage)
      },
      error => {
        console.log(error);
        this.ventaItemResponse = error.error;
        if (this.ventaItemResponse.textMessage != undefined){
          console.log(this.ventaItemResponse.textMessage);
          alert(this.ventaItemResponse.textMessage)
        } else if (error.error.errors != undefined){
          let validationMessage = this.errorValidation + "\n";
          for (let x=0;x<error.error.errors.length;x++){
            validationMessage = validationMessage + error.error.errors[x].field + " ";
            validationMessage = validationMessage + error.error.errors[x].defaultMessage + "\n";
          }
          alert(validationMessage)
        } else {
          alert(this.errorMessage)
        }
      }
    )
  }
}
