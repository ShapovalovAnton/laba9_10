import { ArrayTwo } from './../Class/ArrayTwo';
import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array-two',
  imports: [FormsModule, CommonModule],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent {
  @ViewChildren('inputRef') inputs!: QueryList<ElementRef>;
  a: number[][];
  
  result: string = '';
  constructor() {
    this.a = Array.from({ length: 3 }, () => Array(5).fill(0));
  }
  findMultiples(): void {
    try {
      const inputValues = this.inputs.map(input => {
        const value = input.nativeElement.value;
        if (!value) throw new Error('Усі поля повинні бути заповнені!');

        const parsedValue = parseFloat(value);

        if (isNaN(parsedValue)) throw new Error('Усі значення повинні бути числами!');

        if (!Number.isInteger(parsedValue)) throw new Error('Усі числа повинні бути цілими!');

        return parsedValue;
      });

      // Перетворення значень в двовимірний масив
      const rows = this.a.length;
      const cols = this.a[0].length;
      this.a = Array.from({ length: rows }, (_, i) =>
        inputValues.slice(i * cols, (i + 1) * cols)
      );

      const arrayTwo = new ArrayTwo(this.a);
      this.result = arrayTwo.findMultiplesOfFive();
    } catch (error: any) {
      this.result = error.message;
    }
  }
  
}
