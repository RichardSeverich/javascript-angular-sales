import { Component, OnInit } from '@angular/core';
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

  constructor(private service:VentaMostrarService) { }

  ngOnInit() {
    this.service.getItem().subscribe( response => {
      this.ventaResponse = response;
      this.arrayVentas = this.ventaResponse.data;
    })
  }
}
