import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentWarningAlert } from './warning/warning.component';
import { ComponentSuccessAlert } from './succsess/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentWarningAlert,
    ComponentSuccessAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
