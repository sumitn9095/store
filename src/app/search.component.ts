import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "search",
    template: `
        <div>
            <div class="form-group">
                <label for=""></label>
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" #searchQ>
                <a class="btn btn-secondary" (click)="getSearchQuery(searchQ)">search</a>
                <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
        </div>
    `
})


export class SearchComponent {
    @Output() searchQuery = new EventEmitter<string>();


    constructor(){}

    getSearchQuery(searchQ){
        let searchText = searchQ.value;
        this.searchQuery.emit(searchText);
    }
}