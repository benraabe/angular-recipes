import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      RecipeComponent,
      RecipeDetailComponent,
      RecipeEditComponent,
      RecipeStartComponent,
      RecipeListComponent,
      RecipeItemComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    providers: []
  })
export class RecipeModule {}