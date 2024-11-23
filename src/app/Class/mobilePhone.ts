import {Phone} from './phone'

export class Mobile_phone extends Phone{
    model: string;
    constructor(func:number, model:string){
        super(func); 
        this.model=model;
    }
    //Обчислення вартості
    override price() {
        if (this.func <= 0) {
            return "Кількість функцій повинна бути більше 0";
        }
        return (3 * 40 * Math.log(this.func)).toFixed(2) ;
    }
}
