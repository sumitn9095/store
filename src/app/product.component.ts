import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "product",
    template: `
    <div class="card text-white bg-primary " [ngClass]="{
        list: display,
        card: !display
    }"  >
        <a (click)="productLiked(prodData, allproducts, srno)"><i class="fa fa-heart" aria-hidden="true"></i></a>
        <img class="card-img-top" src="holder.js/100px180/" alt="">
        <div class="card-body">
            <h5>{{ srno }}</h5>
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text">{{ price }}</p>
            <a (click)="thisprod(prodData, srno)" data-toggle="modal" data-target="#modelId">Product details</a>
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



    @Output() Event = new EventEmitter();

    public productdetails = [];

    public wishlistData: any[] = [];
    @Output() wishlist = new EventEmitter<any[]>();

    constructor(){}

    thisprod(prodData, srno){
        //console.log(this.prodData);
        // console.log(srno+"-------");

        this.productdetails = this.prodData;

        this.Event.emit(this.productdetails);

       // var ww = this.productdetails;

        



        //console.log(pdata);
        //console.log(this.productdetails);
    }

    productLiked(prodData, allproducts, srno){
        prodData.liked = !prodData.liked;
        this.wishlistData = allproducts.filter(p => p.liked === true);
        this.wishlist.emit(this.wishlistData);
        console.log(this.wishlist);
    }

}