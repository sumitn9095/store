import {Component, Output, EventEmitter, Input} from "@angular/core";

@Component({
    selector: "search",
    template: `
        <div>
            <div class="form-group">
                <label for=""></label>
                <input type="text" class="form-control" name="" id=""  placeholder="" #searchQ>
                <button type="button" class="btn btn-secondary" (click)="processSearch(searchQ)" >search</button>
                <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
        </div>
    `
})


export class SearchComponent {
    @Output() searchQuery = new EventEmitter<any>();
    @Input() products: any[] = [];
    public resultFromSearch = [];
    public searchText : string = "";
    constructor(){}

    processSearch(searchQ){
        this.searchText = searchQ.value;
        
        if (this.searchText.length !== 0) {
            this.resultFromSearch = this.products.filter(q => q.name.includes(this.searchText));
            this.searchQuery.emit([this.resultFromSearch, this.searchText]);
            this.resultFromSearch = [];
        } else {
            this.resultFromSearch = ['nodata'];
            this.searchQuery.emit([this.resultFromSearch, this.searchText]);
            this.resultFromSearch = [];
        }
    }
}