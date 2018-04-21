import {ACTION} from './appStateActionCreator'
import AppState from './appStateModel'

const initialState = {
  'appState': new AppState()
};

/*
 * Redux Rule!
 *
 * It is prohibited to modify data attached with action here or return it.
 * Must create new object and return.
 */
export default function update(state = initialState, action) {
  if (ACTION === action.type) {
    return Object.assign({},
        state,
        {
		  appState: action.appState
        });
  }

  return state;
}