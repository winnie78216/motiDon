import {ACTION} from './orginizationActionCreator';
import OrginizationModel from "./orginizationModel";

const initialState = {
  'orginization': new OrginizationModel()
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
                orginization: action.orginization
			});
  }

  return state;
}