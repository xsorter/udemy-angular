import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* const myNumbers = Observable.interval(1000);
    myNumbers.subscribe(
      (number) => {
      }
    ) */
    const myObservable = Observable.create(
      (observer: Observer<any>) => {
        setTimeout(() => {
          observer.next('first package')
        } ,2000);
        setTimeout(() => {
          observer.next('second package')
        } ,4000);
        setTimeout(() => {
          observer.error('error fired!')
        } ,5000);
      }
    );

    myObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    )
  }

}
