import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListbookComponent} from "./listbook/listbook.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {path : 'listProduct', component: ListbookComponent},
  {path: 'createProduct', component: CreateComponent},
  {path: 'product/detail/:id',component: DetailComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
