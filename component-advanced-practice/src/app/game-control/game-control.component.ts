import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<number>();
  interval;
  initNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  

  gameStart(){
    this.interval = setInterval(()=>{
      this.intervalEvent.emit(this.initNumber + 1);
      this.initNumber++;
      console.log(this.initNumber);
    }, 1000)
    console.log('started')
  }

  gameStop(){
    clearInterval(this.interval)
    console.log('stopped')
  }
}
