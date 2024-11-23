export class ArrayTwo{
    a: number[][] = [];
    constructor(matrix: number[][]) {
        this.a = matrix;
    }
    
    findMultiplesOfFive(): string {
        let result = 'Елементи, кратні 5, і їх індекси:\n';
        for (let i = 0; i < this.a.length; i++) {
          for (let j = 0; j < this.a[i].length; j++) {
            if (this.a[i][j] % 5 === 0) {
              result += `A[${i + 1}][${j + 1}]: ${this.a[i][j]},\n`;
            }
          }
        }
        return result.trim();
    }
}