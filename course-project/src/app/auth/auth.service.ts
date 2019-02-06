import * as firebase from 'firebase';
import 'firebase/auth';

export class AuthService{
  signUp(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => { console.log(error) }
      )
  }
}