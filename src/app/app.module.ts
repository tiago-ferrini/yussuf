import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardItemDefaultComponent } from './components/list/default/card-item-default/card-item-default.component';
import { CardsListDefaultComponent } from './components/list/default/cards-list-default/cards-list-default.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ListItemDefaultComponent } from './components/list-item/list-item-default/list-item-default.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsListDefaultComponent,
    CardItemDefaultComponent,
    ListItemDefaultComponent,
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
