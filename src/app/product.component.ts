import { Component, Input } from "@angular/core";

@Component({
    selector: "product",
    template: `
    <div class="card text-white bg-primary" (click)="thisprod(prodData, srno)">
        <img class="card-img-top" src="holder.js/100px180/" alt="">
        <div class="card-body">
            <h5>{{ srno }}</h5>
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text">{{ price }}</p>
        </div>
    </div>
    `
})


export class ProductComponent {
    @Input() public srno: number;
    @Input() public name: string;
    @Input() public price: number;
    @Input() public prodData: any[];
    thisprod(prodData, srno){
        console.log(prodData);
        console.log(srno+"-------");
    }
}