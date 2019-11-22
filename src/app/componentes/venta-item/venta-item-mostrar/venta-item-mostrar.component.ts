import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaItemResponse } from 'src/app/modelos/VentaItemResponse';
import { VentaItem } from 'src/app/modelos/VentaItem';
import { VentaItemMostrarService } from 'src/app/servicios/venta-item/venta-item-mostrar.service';

@Component({
  selector: 'app-venta-item-mostrar',
  templateUrl: './venta-item-mostrar.component.html',
  styleUrls: ['./venta-item-mostrar.component.css']
})
export class VentaItemMostrarComponent implements OnInit {

  ventaItem:VentaItem;
  ventaItemResponse:VentaItemResponse;
  arrayVentasItems:VentaItem[];
  ventaId:String;
  ventaIdSeller:String;
  ventaIdClient:String;
  ventaDate:String;
  
  constructor(private router:Router, private service:VentaItemMostrarService) { }

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
      this.arrayVentasItems = arrayAux.filter(obj => obj.idSale == ventaId);
    })
  }
}
