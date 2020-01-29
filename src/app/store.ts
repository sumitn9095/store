import { Component } from "@angular/core";

@Component({
    selector: "store",
    template: `
        <div class="row">
            <div class="col-md-4">
                <a (click)="showProductCategory = 'mobile'" >Mobiles</a>
                <a (click)="showProductCategory = 'tv'">TVs</a>
            </div>
            <div class="col-md-8">
                <div><a (click)="list_grid_toggle()">ssdsd</a></div>
                <div [ngSwitch]="showProductCategory">
                    <div *ngSwitchCase = "'mobile'">
                        <mobiles [display]="cardDisplay"></mobiles>
                    </div>
                    <div *ngSwitchCase = "'tv'">
                        <tv></tv>
                    </div>
                </div>
            </div>
        </div>


        
    `
})


export class Store {
    constructor(){}
    public cardDisplay: Boolean;

    list_grid_toggle(){
        this.cardDisplay = !this.cardDisplay;
    }
}