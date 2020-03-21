import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Services
import { VentaMostrarService } from "src/app/servicios/venta/venta-mostrar.service";
import { VentaEliminarService } from "src/app/servicios/venta/venta-eliminar.service";
// Models
import { Venta } from "src/app/modelos/Venta";
import { VentaResponse } from "src/app/modelos/VentaResponse";

@Component({
  selector: "app-venta-mostrar",
  templateUrl: "./venta-mostrar.component.html",
  styleUrls: ["./venta-mostrar.component.css"]
})
export class VentaMostrarComponent implements OnInit {
  arrayVentas: Venta[];
  ventaResponse: VentaResponse;
  errorMessage = "Error, please contact your administrator";

  constructor(
    private router: Router,
    private serviceVentaMostrar: VentaMostrarService,
    private serviceVentaEliminar: VentaEliminarService
  ) {}

  ngOnInit() {
    this.ventaMostrar();
  }

  ventaMostrar() {
    this.serviceVentaMostrar.getItem().subscribe(response => {
      this.ventaResponse = response;
      this.arrayVentas = this.ventaResponse.data;
    });
  }

  navigateVentaItemMostrar(venta: Venta): void {
    this.sendData(venta);
    this.router.navigate(["venta-item-mostrar"]);
  }

  navigateVentaItemCrear(venta: Venta): void {
    this.sendData(venta);
    this.router.navigate(["venta-item-crear"]);
  }

  sendData(venta: Venta): void {
    localStorage.setItem("ventaId", "" + venta.id);
    localStorage.setItem("ventaIdSeller", "" + venta.idSeller);
    localStorage.setItem("ventaIdClient", "" + venta.idClient);
    localStorage.setItem("ventaDate", "" + venta.date);
    this.router.navigate(["venta-item-mostrar"]);
  }

  ventaEliminar(ventaId) {
    this.serviceVentaEliminar.deleteVenta(ventaId).subscribe(
      response => {
        this.ventaResponse = response;
        alert(this.ventaResponse.textMessage);
        this.pageRefresh();
      },
      error => {
        console.log(error);
        this.ventaResponse = error.error;
        if (this.ventaResponse.textMessage != undefined) {
          console.log(this.ventaResponse.textMessage);
          alert(this.ventaResponse.textMessage);
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
