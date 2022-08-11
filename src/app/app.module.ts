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
import { MatDividerModule } from '@angular/material/divider';

import { ListItemDefaultComponent } from './components/list-item/list-item-default/list-item-default.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CardsListSmallComponent } from './components/list/small/cards-list-small/cards-list-small.component';
import { CardItemSmallComponent } from './components/list/small/card-item-small/card-item-small.component';
import { CardItemColumnarComponent } from './components/list/columnar/card-item-columnar/card-item-columnar.component';
import { CardsListColumnarComponent } from './components/list/columnar/cards-list-columnar/cards-list-columnar.component';
import { WrapperInboxComponent } from './components/list/inbox/wrapper-inbox/wrapper-inbox.component';
import { ItemsListInboxComponent } from './components/list/inbox/items-list-inbox/items-list-inbox.component';
import { ItemDetailInboxComponent } from './components/list/inbox/item-detail-inbox/item-detail-inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsListDefaultComponent,
    CardItemDefaultComponent,
    ListItemDefaultComponent,
    AuthComponent,
    LoginComponent,
    CardsListSmallComponent,
    CardItemSmallComponent,
    CardItemColumnarComponent,
    CardsListColumnarComponent,
    WrapperInboxComponent,
    ItemsListInboxComponent,
    ItemDetailInboxComponent,
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
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
