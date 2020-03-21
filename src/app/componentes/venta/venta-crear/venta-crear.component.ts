import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Services
import { VentaCrearService } from "src/app/servicios/venta/venta-crear.service";
// Models
import { Venta } from "src/app/modelos/Venta";
import { VentaResponse } from "src/app/modelos/VentaResponse";

@Component({
  selector: "app-venta-crear",
  templateUrl: "./venta-crear.component.html",
  styleUrls: ["./venta-crear.component.css"]
})
export class VentaCrearComponent implements OnInit {
  venta: Venta;
  ventaResponse: VentaResponse;
  errorValidation = "Error, validation error";
  errorMessage = "Error, please contact your administrator";

  constructor(private router: Router, private service: VentaCrearService) {}

  ngOnInit() {}

  ventaCrear(idSeller, idClient, date) {
    this.venta = new Venta();
    this.venta.idSeller = idSeller;
    this.venta.idClient = idClient;
    this.venta.date = date;
    this.service.createVenta(this.venta).subscribe(
      data => {
        console.log(data);
        alert("Se creo con exito");
        this.router.navigate(["venta-mostrar"]);
      },
      error => {
        console.log(error);
        this.ventaResponse = error.error;
        if (this.ventaResponse.textMessage != undefined) {
          console.log(this.ventaResponse.textMessage);
          alert(this.ventaResponse.textMessage);
        } else if (error.error.errors != undefined) {
          let validationMessage = this.errorValidation + "\n";
          for (let x = 0; x < error.error.errors.length; x++) {
            validationMessage =
              validationMessage + error.error.errors[x].field + " ";
            validationMessage =
              validationMessage + error.error.errors[x].defaultMessage + "\n";
          }
          alert(validationMessage);
        } else {
          alert(this.errorMessage);
        }
      }
    );
  }

  ventaCancelar() {
    this.router.navigate(["venta-mostrar"]);
  }
}
