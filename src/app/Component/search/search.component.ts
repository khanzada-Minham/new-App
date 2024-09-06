import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText:string = "";
  @Output()
  
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  clickSearchButton(HTMLInput:any){
    this.searchText = HTMLInput.value;
    console.log('this.searchText',this.searchText);
    this.searchEvent.emit(this.searchText);
  }

}
