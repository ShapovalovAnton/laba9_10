import { PhonesComponent } from './phones/phones.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    PhonesComponent,
    ArrayOneComponent,
    ArrayTwoComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'laba9_10';
}
