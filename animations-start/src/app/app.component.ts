import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background' : 'red',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        'background' : 'green',
        'transform': 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background' : 'red',
        'transform': 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background' : 'green',
        'transform': 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background' : 'blue',
        'transform': 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', animate(300))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate(){
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onShrunk(){
      this.wildState = "shrunken";
    }

    onAdd(item) {
      this.list.push(item);
    }
}
