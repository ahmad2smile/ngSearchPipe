import { Component } from '@angular/core';

@Component({
	selector: 'page-index',
	templateUrl: 'index.html',
})
export class IndexPage{
	constructor(){
	}
    
	private searchParam: string = "";
	
	searchCars(e: KeyboardEvent){
        this.searchParam = (<HTMLInputElement>e.target).value;
    }
}
