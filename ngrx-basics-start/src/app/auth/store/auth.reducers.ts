


export interface State {
  token: string;
  authentificated: boolean;
}

const initialState: State = {
  token: null,
  authentificated: false
}



export function authReducer(state = initialState, action){
  return state;
}