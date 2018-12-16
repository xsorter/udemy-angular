import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(
        map(
          (data: number) => {
            return data * 2
          }
        )
      );
    
    this.numbersSubscription = myNumbers.subscribe(
      (number) => {
        console.log(number)
      }
    )
    const myObservable = Observable.create(
      (observer: Observer<any>) => {
        setTimeout(() => {
          observer.next('first package')
        } ,2000);
        setTimeout(() => {
          observer.next('second package')
        } ,4000);
        setTimeout(() => {
          observer.complete()
        } ,5000);
      }
    );

    this.customSubscription = myObservable.subscribe(
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

  ngOnDestroy() {
    this.customSubscription.unsubscribe();
    this.numbersSubscription.unsubscribe();
  }
}
