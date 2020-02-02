import { Component, Output , EventEmitter } from '@angular/core';
import { ProductsData } from './ProductsData';

@Component({
    selector: "search-query",
    template: `
    <div>
        <div class="form-group">
            <label for=""></label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" [(ngModel)]="searchText"]>
            <small id="helpId" class="form-text text-muted">Help text</small>
        </div>
    </div>
    `
})


export class SearchQueryComponent {
    public  searchText: string;

    @Output() searchTextEmit = new EventEmitter();

    processSearch() {
        this.searchTextEmit.emit();
    }

}