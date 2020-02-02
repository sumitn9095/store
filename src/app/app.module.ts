import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Store } from './store';
import { AppComponent } from './app.component';
import { ProductsData } from './ProductsData';
import { MobileProducts } from './mobile.products';
import { ProductComponent } from './product.component';
import { ProductDetails } from './product.details';
import { TvProducts } from './tv.products';
import { WishlistComponent } from './wishlist.component';
import { SearchComponent } from './search.component';
import { SearchWithNgmodel } from './searchWithNgmodel';

@NgModule({
  declarations: [
    AppComponent,
    Store,
    MobileProducts,
    TvProducts,
    ProductComponent,
    ProductDetails,
    WishlistComponent,
    SearchComponent,
    SearchWithNgmodel,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsData],
  bootstrap: [AppComponent]
})
export class AppModule { }
