import { Component } from '@angular/core';
import {Phone} from '../Class/phone'
import {Mobile_phone} from '../Class/mobilePhone'

@Component({
  selector: 'app-phones',
  imports: [],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.css'
})
export class PhonesComponent {
  phones_show: string = '';
  mobile_phones_show: string = '';
  calculatePhone(phone_func: string) {
    if (!phone_func || isNaN(Number(phone_func)) || parseInt(phone_func) <= 0) {
      this.phones_show = 'Помилка: Введіть коректну кількість функцій!';
      return;
    }
    try {
      let phone = new Phone(parseInt(phone_func));
      this.phones_show = 'Вартість = ' + phone.price();
    } catch (error) {
      this.phones_show = 'Помилка у вхідних даних!';
    }
  }
  
  calculateMobilePhone(phone_func: string, model_name: string) {
    if (!phone_func || isNaN(Number(phone_func)) || parseInt(phone_func) <= 0) {
      this.mobile_phones_show = 'Помилка: Введіть коректну кількість функцій!';
      return;
    }
    if (!model_name || model_name.trim() === '') {
      this.mobile_phones_show = 'Помилка: Назва моделі не може бути порожньою!';
      return;
    }
    try {
      let mobile_phone = new Mobile_phone(parseInt(phone_func), model_name);
      this.mobile_phones_show =
        'Вартість = ' + mobile_phone.price() + ' Модель: ' + mobile_phone.model;
    } catch (error) {
      this.mobile_phones_show = 'Помилка у вхідних даних!';
    }
  }


}
