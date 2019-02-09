import * as firebase from 'firebase';
import 'firebase/auth';

export class AuthService{
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
}