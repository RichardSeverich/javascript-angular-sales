import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Import Services
import { VentaMostrarService } from 'src/app/servicios/venta/venta-mostrar.service';
// Import Models
import { Venta } from 'src/app/modelos/Venta';
import { VentaResponse } from 'src/app/modelos/VentaResponse';


@Component({
  selector: 'app-venta-mostrar',
  templateUrl: './venta-mostrar.component.html',
  styleUrls: ['./venta-mostrar.component.css']
})
export class VentaMostrarComponent implements OnInit {

  arrayVentas:Venta[];
  ventaResponse:VentaResponse;

  constructor(private router:Router, private service:VentaMostrarService) { }

  ngOnInit() {
    this.service.getItem().subscribe( response => {
      this.ventaResponse = response;
      this.arrayVentas = this.ventaResponse.data;
    })
  }

  navigateVentaItemMostrar(venta:Venta): void{
    this.sendData(venta);
    this.router.navigate(["venta-item-mostrar"]);
  }

  navigateVentaItemCrear(venta:Venta): void{
    this.sendData(venta);
    this.router.navigate(["venta-item-crear"]);
  }

  sendData(venta:Venta):void{
    localStorage.setItem("ventaId", ""+venta.id);
    localStorage.setItem("ventaIdSeller", ""+venta.idSeller);
    localStorage.setItem("ventaIdClient", ""+venta.idClient);
    localStorage.setItem("ventaDate", ""+venta.date);
    this.router.navigate(["venta-item-mostrar"]);
  }
}
