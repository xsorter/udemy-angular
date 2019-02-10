import * as firebase from 'firebase';
import 'firebase/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

  constructor(private router: Router) {}

  token: string;
  signUp(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => { console.log(error) }
      )
  }

  signIn(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => { 
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token) => { this.token = token }
            )
        }
      )
      .catch(
        error => { console.log(error) }
      )
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
      .then(
        (token) => { this.token = token }
      )
    return this.token;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthentificated() {
    return this.token != null;
  }
}