import { Component, OnInit } from '@angular/core';
// Import Services
import { ItemMostrarService } from 'src/app/servicios/item/item-mostrar.service';
// Import Models
import { Item } from 'src/app/modelos/Item';
import { ItemResponse } from 'src/app/modelos/ItemResponse';

@Component({
  selector: 'app-venta-item-crear',
  templateUrl: './venta-item-crear.component.html',
  styleUrls: ['./venta-item-crear.component.css']
})
export class VentaItemCrearComponent implements OnInit {

  arrayItems:Item[];
  itemResponse:ItemResponse;

  // Declare Atributes Recived
  ventaId:String;
  ventaIdSeller:String;
  ventaIdClient:String;
  ventaDate:String;
  ventaTotal:number;
  
  constructor(private service:ItemMostrarService) { }

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
    this.service.getItem().subscribe( response => {
      this.itemResponse = response;
      this.arrayItems = this.itemResponse.data;
    })
  }

}
