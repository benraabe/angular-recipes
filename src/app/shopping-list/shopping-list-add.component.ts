import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.selectedIngredient.currentValue == null) {
      this.selectedIngredient = { name: null, amount: null };
      this.isAdd = true;
    } else {
      this.isAdd = false;
      // this.selectedIngredient
    }
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (!this.isAdd) {
      // Bearbeiten
      this.sls.editIngredient(this.selectedIngredient, newIngredient);
    } else {
      this.sls.addIngredient(newIngredient);
    }
    this.onClear(form);
  }

  onClear(form: NgForm) {
    this.cleared.emit();
    form.resetForm();
  }

  onDelete(form: NgForm) {
    this.sls.deleteIngredient(this.selectedIngredient);
    this.onClear(form);
  }
}
