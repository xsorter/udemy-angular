import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from '../store/auth.actions';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .pipe(
      map((action: AuthActions.TrySignup) => {
        return action.payload
      })
      , switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(
          authData.username,
          authData.password
        ))
      })
      , switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
      })
      , mergeMap((token: string) => {
        return [
          {
            type: AuthActions.SIGNUP
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ]
      })
    )

  @Effect()
  authSignIn = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .pipe(
      map(
        (action: AuthActions.TrySignin) => {
          return action.payload
        }
      )
      , switchMap(
        (authData: {username: string, password: string}) => {
          return from(firebase.auth().signInWithEmailAndPassword(
            authData.username,
            authData.password
          ))
        }
      )
      , switchMap(
        (() => {
          return from(firebase.auth().currentUser.getIdToken())
        })
      )
      , mergeMap(
        (token: string) => {
          this.router.navigate(['/']);
          return [
            {
              type: AuthActions.SIGNIN
            },
            {
              type: AuthActions.SET_TOKEN,
              payload: token
            } 
          ]
        }
      )
    )

  @Effect({dispatch: false})  
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .pipe(
      tap(()=>{
        this.router.navigate(['/'])
      })
    )
  
  constructor(private actions$: Actions, private router: Router){}
}