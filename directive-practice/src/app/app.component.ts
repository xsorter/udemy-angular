import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-practice';
  showDetails = false;
  timestampArray = [];

  onButtonClick(){
    this.showDetails = !this.showDetails;
    let timestamp = Math.floor(Date.now()/1000);
    this.timestampArray.push(timestamp);
  }
}
