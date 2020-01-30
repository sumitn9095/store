import { Component, Input } from "@angular/core";
import { ProductsData } from "./ProductsData";

@Component({
    selector: "mobiles",
    template: `
    <search (searchQuery)="processSearch($event)"></search>
        <wishlist [wishlistData]="this.wishlist"></wishlist>
        <div *ngFor="let product of products; let i = index;">
            <product [name]="product.name" [price]="product.price" [srno]="i+1" [prodData]="product" [allproducts]="products"  [display]="display" (Event)="sqw($event)" (wishlist)="getwishlist($event)" ></product>
        </div>

        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" *ngIf="productdetails">sssss {{ productdetails.name }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body" *ngIf="productdetails">
                        <p>{{ productdetails.price }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class MobileProducts {
    @Input() public display: Boolean;
    @Input() public products : any[];

    public resultFromSearch = [];

    public wishlistCount : number;

    public wishlist : any[] = [];

    public productdetails : any[];
    constructor(private mobile: ProductsData){
        this.products = this.mobile.getMobiles();
    }


    processSearch(data){
        if(data != undefined || data != "") {
            this.resultFromSearch = this.products.filter(q => q.name.includes(data));
        }
        if((data == undefined || data == "") || (this.resultFromSearch == undefined || this.resultFromSearch == null)) {
            this.products = this.mobile.getMobiles();
        } else {
            this.products = this.resultFromSearch;
        }
        
        console.log(this.resultFromSearch);
        
    }

    sqw(data) {
        this.productdetails = data;
        //console.log(data);
    }

    getwishlist(data){
        this.wishlist = data;
        this.wishlistCount = this.wishlist.length;
    }
}