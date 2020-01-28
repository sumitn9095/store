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
                <div [ngSwitch]="showProductCategory">
                    <div *ngSwitchCase = "'mobile'">
                        <mobiles></mobiles>
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

}