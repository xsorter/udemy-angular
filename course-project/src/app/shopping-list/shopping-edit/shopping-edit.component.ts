import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopppingService.startedEditing
      .subscribe(
        (index) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shopppingService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onAddItem(form) {
    console.log(form);
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shopppingService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shopppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
