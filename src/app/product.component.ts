import { Component, Input } from "@angular/core";

@Component({
    selector: "product",
    template: `
    <div class="card text-white bg-primary " [ngClass]="{
        list: display,
        card: !display
    }" (click)="thisprod(prodData, srno)">
        <img class="card-img-top" src="holder.js/100px180/" alt="">
        <div class="card-body">
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">Launch</button>
            <h5>{{ srno }}</h5>
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text">{{ price }}</p>
        </div>
    </div>
    list grid - {{ display }}


        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" *ngIf="this.prodData">{{ this.prodData.name }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body" *ngIf="this.prodData">
                        <p>{{ this.prodData.price }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
   
    `
})

export class ProductComponent {
    @Input() public display: Boolean;
    @Input() public srno: number;
    @Input() public name: string;
    @Input() public price: number;
    @Input() public prodData: any[];

    public productdetails: any[];

    thisprod(prodData, srno){
        console.log(this.prodData);
        // console.log(srno+"-------");

        this.productdetails = this.prodData;

        console.log(this.productdetails);
        //console.log(this.productdetails);
    }
}