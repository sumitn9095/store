import { Component, Input } from "@angular/core";

@Component({
    selector: "wishlist",
    template: `
        <div>
            wishlist : {{ this.wishlistData.length }} 
            <a data-toggle="modal" data-target="#wishlistmodal" *ngIf="this.wishlistData.length > 0" >Show Wishlist</a>
        </div>

        <div class="modal fade" id="wishlistmodal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">My Wishlist</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body" *ngIf="this.wishlistData">
                        <div *ngFor="let wish of this.wishlistData" >
                            Name :
                            {{ wish.name }}

                            Price:
                            {{ wish.price }}
                        </div>
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


export class WishlistComponent {
    @Input() public wishlistData: any[] = [];
    constructor(){}
}