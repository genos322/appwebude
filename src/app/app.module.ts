import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonAddComponent } from './counter/button-add/button-add.component';
import { ButtonDisComponent } from './counter/button-dis/button-dis.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonAddComponent,
    ButtonDisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
