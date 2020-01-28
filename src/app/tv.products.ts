import { Component } from "@angular/core";
import { ProductsData } from "./ProductsData";

@Component({
    selector: "tv",
    template: `
        <div *ngFor="let product of tvProducts">
            <product [name]=product.name [price]=product.price ></product>
        </div>
    `
})


export class TvProducts {
    public tvProducts: any[];
    constructor(private tvs: ProductsData){
        this.tvProducts = this.tvs.getTv();
    }
}