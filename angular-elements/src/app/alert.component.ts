import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div>This is {{message}}</div>',
  styles: [`
    div {
      background: blue;
      color: white;
    }
  `]
})
export class AlertComponent {
  @Input() message: string
}