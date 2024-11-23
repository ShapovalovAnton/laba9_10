export class Phone{
    func: number;
    constructor(func: number){
        this.func=func;
    }
    //Обчислення вартості
    price() {
        if (this.func <= 0) {
            return "Кількість функцій повинна бути більше 0";
        }
        return (40 * Math.log(this.func)).toFixed(2);
    }
}