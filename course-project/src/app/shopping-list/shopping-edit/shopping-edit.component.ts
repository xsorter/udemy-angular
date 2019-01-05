import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shopppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopppingService.startedEditing
      .subscribe(
        (index) => {
          this.editMode = true;
          this.editedItemIndex = index;
        }
      )
  }

  ngOnDestroy() {

  }

  onAddItem(form) {
    console.log(form);
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    this.shopppingService.addIngredient(newIngredient);
  }
}
