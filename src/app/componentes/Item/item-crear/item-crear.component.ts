import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCrearService } from 'src/app/servicios/item/item-crear.service';
import { Item } from 'src/app/modelos/Item';
import { ItemResponse } from 'src/app/modelos/ItemResponse';

@Component({
  selector: 'app-item-crear',
  templateUrl: './item-crear.component.html',
  styleUrls: ['./item-crear.component.css']
})
export class ItemCrearComponent implements OnInit {

  item:Item;
  itemResponse:ItemResponse;
  errorValidation="Error, validation error";
  errorMessage="Error, please contact your administrator";

  constructor(private router:Router, private service:ItemCrearService) { }

  ngOnInit() {
  }

  itemCrear(name, price, stock){
    this.item = new Item();
    this.item.name = name;
    this.item.price = price;
    this.item.stock = stock;

    this.service.createItem(this.item).subscribe(
      data=> {
        console.log(data);
        alert("Se creo con exito");
        this.router.navigate(["item-mostrar"])
      },
      error => {
        console.log(error);
        this.itemResponse = error.error;
        if (this.itemResponse.textMessage != undefined){
          console.log(this.itemResponse.textMessage);
          alert(this.itemResponse.textMessage)
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

  itemCancelar(){
    this.router.navigate(["item-mostrar"])
  }

}
