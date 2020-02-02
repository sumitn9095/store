import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "product",
    template: `
        <div class="card text-white bg-primary ">
            <a (click)="productLiked(prodData, allproducts, srno)">
                <i class="fa" [ngClass]="{'fa-heart' : this.prodData.liked,'fa-heart-o' : !this.prodData.liked
                }" aria-hidden="true">
                </i>
            </a>
            <img class="card-img-top" src="holder.js/100px180/" alt="">
            <div class="card-body">
                <h5>{{ srno }}</h5>
                <h4 class="card-title">{{ name }}</h4>
                <p class="card-text">{{ price }}</p>
                <a (click)="getCurrentProductDetails(prodData, srno)" data-toggle="modal" data-target="#modelId">
                    Product details
                </a>
            </div>
        </div>
    `
})

export class ProductComponent {
    @Input() public display: Boolean;
    @Input() public srno: number;
    @Input() public name: string;
    @Input() public price: number;
    @Input() public prodData;
    @Input() public allproducts : any[] = [];



    @Output() selectedProductDetails = new EventEmitter();

    public productdetails = [];

    public wishlistData: any[] = [];
    @Output() wishlist = new EventEmitter<any[]>();

    constructor(){}

    getCurrentProductDetails(prodData, srno){
        //console.log(this.prodData);
        // console.log(srno+"-------");

        this.productdetails = this.prodData;

        this.selectedProductDetails.emit(this.productdetails);

       // var ww = this.productdetails;
        //console.log(pdata);
        //console.log(this.productdetails);
    }

    productLiked(prodData, allproducts, srno){
        prodData.liked = !prodData.liked;
        this.wishlistData = allproducts.filter(p => p.liked === true);
        this.wishlist.emit(this.wishlistData);
        //console.log(this.wishlist);
    }
}