import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path : '' , redirectTo : '/recipes', pathMatch : 'full'},
  {path : 'recipes' , component: RecipeComponent, children :[
    {path: '' , component: RecipeStartComponent},
    {path :':id', component:RecipeEditComponent},
    {path: 'new', component:RecipeDetailsComponent },
    {path: ':id/edit', component:RecipeEditComponent}
  ]},
  {path : 'shopping-list' , component : ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
