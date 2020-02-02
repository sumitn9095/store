import { Component, Input, EventEmitter, Output } from "@angular/core";
import { ProductsData } from "./ProductsData";

@Component({
    selector: "tv",
    template: `
        <div>
            <search [products]="products" (searchQuery)="processSearch($event)"></search>
            <!-- <input type="text" class="form-control" name="" id=""  placeholder="" [(ngModel)]="searchText"]> -->
            <p class="searchNote" *ngIf="searchNote">{{searchNote}}</p>
        </div>
        
        <div *ngIf="searchResult; else productsFromSource">
            <div *ngFor="let product of products; let i = index;">
                <product [name]="product.name" [price]="product.price" [srno]="i+1" [prodData]="product" [allproducts]="products"  [display]="display" (selectedProductDetails)="getSelectedProductDetails($event)" (wishlist)="getwishlist($event)" ></product>
            </div>
        </div>
        <ng-template #productsFromSource>
            <div *ngFor="let product of products; let i = index;">
                <product [name]="product.name" [price]="product.price" [srno]="i+1" [prodData]="product" [allproducts]="products"  [display]="display" (selectedProductDetails)="getSelectedProductDetails($event)" (wishlist)="getwishlist($event)" ></product>
            </div>
        </ng-template>
    `
})

export class TvProducts {
    @Input() public display: Boolean;

    @Input() public products : any[];
    @Output() public selectedProductDetails = new EventEmitter();

    public searchText: string;
    public searchResult : Boolean = false;
    public searchNote : string;

    @Output() wishlist = new EventEmitter<any[]>();

    constructor(private tv: ProductsData){
        this.products = this.tv.getTv();
    }



    processSearch(data){
        if(data[0][0] == "nodata" || data[0].length == 0) {
            this.searchResult = false;
            this.products = this.tv.getTv();
            ////if(data[0][0] == "nodata") {
                this.searchNote = "No products found with '"+data[1]+"'";
            //}
        } else {
            this.searchResult = true;
            this.products = data[0];
            
                this.searchNote = data[0].length+" products found";
            
        }
        console.log(data);
    }


    

    getSelectedProductDetails(data) {
        this.selectedProductDetails.emit(data);
    }

    getwishlist(data){
        this.wishlist.emit(data);
    }
}