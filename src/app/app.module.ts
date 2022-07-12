import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsListDefaultComponent } from './components/cards-list-default/cards-list-default.component';
import { CardItemDefaultComponent } from './components/card-item-default/card-item-default.component';

@NgModule({
  declarations: [AppComponent, CardsListDefaultComponent, CardItemDefaultComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
