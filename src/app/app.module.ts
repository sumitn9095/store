import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Store } from './store';
import { AppComponent } from './app.component';
import { ProductsData } from './ProductsData';
import { MobileProducts } from './mobile.products';
import { ProductComponent } from './product.component';
import { TvProducts } from './tv.products';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Store,
    MobileProducts,
    TvProducts,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ProductsData],
  bootstrap: [AppComponent]
})
export class AppModule { }
