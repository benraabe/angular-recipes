import { NgModule } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      ShoppingListAddComponent,
      ShoppingListComponent
    ],
    imports: [
      FormsModule,
      CommonModule
    ],
    providers: []
  })
export class ShoppingListModule {}