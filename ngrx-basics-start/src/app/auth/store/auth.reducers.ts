import * as AuthActions from '../store/auth.actions'

export interface State {
  token: string;
  authentificated: boolean;
}

const initialState: State = {
  token: null,
  authentificated: false
}

export function authReducer(state = initialState, action: AuthActions.AuthActions){
  switch (action.type){
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authentificated: true
      }
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      }  
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authentificated: false
      }
    default:
      return state
  }
}