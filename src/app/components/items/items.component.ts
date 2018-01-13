import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items_property : Item[];
  editState : boolean = false;
  itemToEdit : Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items_observables => {
      //Accessible via templates
      this.items_property = items_observables;
    });
  }

  deleteItem(event,item:Item) {
    this.clearState();
    this.itemService.delete_item(item);
  }

  editItem(event,item:Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item:Item){
    this.itemService.update_item(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
