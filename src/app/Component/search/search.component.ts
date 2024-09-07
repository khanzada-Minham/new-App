import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText:string = "";
  @Output()
  
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('value')searchInputEl : ElementRef

  clickSearchButton(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchEvent.emit(this.searchText);
  }

}
