import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing } from './app.routing';
import { RecipeService } from './recipe/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeModule } from './recipe/recipe.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    ShoppingListModule,
    RecipeModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
