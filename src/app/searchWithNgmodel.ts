import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
   name: "searchquery" 
})


export class SearchWithNgmodel implements PipeTransform {
    transform(val:any[], arg:any){
        return val.filter(p => p.name.includes(arg));
    }
}