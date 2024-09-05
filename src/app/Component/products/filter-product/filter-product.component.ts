import { Component, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.css'
})
export class FilterProductComponent {

  @Input()
  all: number = 0;

  @Input()
  InStock: number = 0;

  @Input()
  OutOfStock: number = 0;

  selectRedioButton: string = 'all'

  @Output()

  selectFilterRedioButton: EventEmitter<string> = new EventEmitter<string>;

  onChangeFilterButton(){
    console.log(this.selectRedioButton);
    
    this.selectFilterRedioButton.emit(this.selectRedioButton)
  }

}
