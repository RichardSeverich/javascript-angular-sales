import { Component, OnInit } from '@angular/core';
// Import Services
import { ItemMostrarService } from 'src/app/servicios/item/item-mostrar.service';
// Import Models
import { Item } from 'src/app/modelos/Item';
import { ItemResponse } from 'src/app/modelos/ItemResponse';



@Component({
  selector: 'app-item-mostrar',
  templateUrl: './item-mostrar.component.html',
  styleUrls: ['./item-mostrar.component.css']
})
export class ItemMostrarComponent implements OnInit {

  arrayItems:Item[];
  itemResponse:ItemResponse;

  constructor(private service:ItemMostrarService) { }

  ngOnInit() {
    this.service.getItem().subscribe( response => {
      this.itemResponse = response;
      this.arrayItems = this.itemResponse.data;
    })
  }

}
