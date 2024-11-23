import { randomInt } from "./randomInt";
export class ArrayOne {
    a: number[] = [];
    a2: number[] = [];

    constructor(){
        this.a2=[];
        this.a=[];
        
    }

    genArray(min:number, max:number){
        this.a=[];
        this.a2=[];
        let rnd = new randomInt();
        for(let i=0; i<7; i++){
            this.a.push(rnd.randomInteger(min, max));
            this.a2.push(this.a[i]*2);
        }
    }

    getArrays(): string {
        return (
          `Згенерований масив: [${this.a.join(", ")}]<br>` +
          `Масив, помножений на 2: [${this.a2.join(", ")}]`
        );
      }

}