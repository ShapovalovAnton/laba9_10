import { ArrayOne } from './../Class/ArrayOne';
import { Component } from '@angular/core';

@Component({
  selector: 'app-array-one',
  imports: [],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent {
  ArrayOne = new ArrayOne();
  result: string = '';
  output( min: string, max: string){
    if (!min || isNaN(Number(min)) || !max || isNaN(Number(max)) || parseInt(min)>parseInt(max)) {
      this.result = 'Перевірте дані!';
      return;
    }
    this.ArrayOne.genArray(parseInt(min), parseInt(max));
    this.result = this.ArrayOne.getArrays();
  }


}
