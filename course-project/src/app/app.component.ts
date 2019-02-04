import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  constructor(){}

  onNavigate(feature: string){
    this.loadedFeature = feature;
    console.log('loaded from app component = ', this.loadedFeature)
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBNm6dBuu_QM5HFUavtrfmypz12NDh0QOY",
      authDomain: "ng-recipe-book-f3d23.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-f3d23.firebaseio.com",
      projectId: "ng-recipe-book-f3d23",
      storageBucket: "ng-recipe-book-f3d23.appspot.com",
      messagingSenderId: "197643176491"
    })
  }
}
