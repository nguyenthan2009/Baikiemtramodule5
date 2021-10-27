import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListbookComponent } from './listbook/listbook.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListbookComponent,
    CreateComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
