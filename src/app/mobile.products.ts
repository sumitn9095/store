import { Component, Input } from "@angular/core";
import { ProductsData } from "./ProductsData";

@Component({
    selector: "mobiles",
    template: `
        <div *ngFor="let product of products; let i = index;">
            <product [name]="product.name" [price]="product.price" [srno]="i+1" [prodData]="product" [display]="display"></product>
        </div>
    `
})

export class MobileProducts {
    @Input() public display: Boolean;
    @Input() public products : any[];
    constructor(private mobile: ProductsData){
        this.products = this.mobile.getMobiles();
    }
}