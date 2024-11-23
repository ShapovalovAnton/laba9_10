import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayOneComponent } from './array-one/array-one.component';
import { PhonesComponent } from './phones/phones.component';
import { ArrayTwoComponent } from './array-two/array-two.component';

export const routes: Routes = [
  { path: 'classes', component: PhonesComponent },
  { path: 'array-one', component: ArrayOneComponent },
  { path: 'array-two', component: ArrayTwoComponent },
  { path: '', redirectTo: 'classes', pathMatch: 'full' }, // Перенаправление на 'classes' по умолчанию
  { path: '**', redirectTo: 'classes' }, // Редирект для неизвестных маршрутов
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
