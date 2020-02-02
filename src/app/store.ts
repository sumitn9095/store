import { Component } from "@angular/core";
import { getCurrencySymbol } from '@angular/common';

@Component({
    selector: "store",
    template: `
        <div class="container">
        <div class="row">
            <div class="col-md-4">
                <button type="button" class="btn btn-block" [ngClass]="{ 'btn-primary' : showProductCategory == 'mobile', 'btn-outline-primary' : showProductCategory != 'mobile' }" (click)="showProductCategory = 'mobile'"  >
                    Mobiles
                </button>
                <button type="button" class="btn btn-block" [ngClass]="{ 'btn-primary' : showProductCategory == 'tv', 'btn-outline-primary' : showProductCategory != 'tv' }" (click)="showProductCategory = 'tv'"  >
                    TV
                </button>
            </div>
            <div class="col-md-8">
            <wishlist [wishlistData]="this.wishlistData"></wishlist>
                <div><a class="btn btn-outline-secondary" (click)="list_grid_toggle()">{{ this.cardDisplay ? 'List' : 'card' }}</a></div>
                <div [ngSwitch]="showProductCategory"  [ngClass]="{'displayAsList': this.cardDisplay, 'displayAsCard': !this.cardDisplay}">
                    <div *ngSwitchCase = "'mobile'">
                        <mobiles [display]="cardDisplay" (selectedProductDetails)="getSelectedProductDetails($event)"  (wishlist)="getwishlist($event)"></mobiles>
                    </div>
                    <div *ngSwitchCase = "'tv'">
                        <tv [display]="cardDisplay" (selectedProductDetails)="getSelectedProductDetails($event)"  (wishlist)="getwishlist($event)"></tv>
                    </div>
                </div>
            </div>
        </div>    

        <product-details [productdetails]="this.productdetails" ></product-details>
        </div>
    `,
    styles : [`
        .displayAsCard .card {width: 150px;}
        .displayAsList .card {width: 100%;}
    `]
    
})


export class Store {
    public cardDisplay: Boolean;
    public productdetails: any[] = [];
    public wishlistData: any[] = [];

    constructor(){}
    
    list_grid_toggle(){
        this.cardDisplay = !this.cardDisplay;
    }

    getSelectedProductDetails(data) {
        this.productdetails = data;
    }

    getwishlist(data){
        this.wishlistData = data;
    }
}