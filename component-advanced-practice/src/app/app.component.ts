import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onFireEvent(firedevent: number){
    if(firedevent % 2 === 0){
      this.evenNumbers.push(firedevent)
    }else{
      this.oddNumbers.push(firedevent)
    }
    console.log('This is from App - number: '+firedevent)
  }
}
