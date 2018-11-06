import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  onlyOddNumbers = [1, 3, 5];
  onlyEvenNumbers = [2, 4];
  value = 11;
}
