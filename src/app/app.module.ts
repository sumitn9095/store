import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Store } from './store';
import { AppComponent } from './app.component';
import { ProductsData } from './ProductsData';
import { MobileProducts } from './mobile.products';
import { ProductComponent } from './product.component';
import { TvProducts } from './tv.products';

@NgModule({
  declarations: [
    AppComponent,
    Store,
    MobileProducts,
    TvProducts,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsData],
  bootstrap: [AppComponent]
})
export class AppModule { }
