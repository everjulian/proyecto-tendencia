import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PetsComponent } from './pets/pets.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ErrorInputDirective } from './directives/error-input.directive';


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsComponent,
    CreateUserComponent,
    ErrorInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:[],
  bootstrap:[AppComponent]

})
export class AppModule { }
