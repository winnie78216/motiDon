import {ACTION} from './campaignsActionCreator';
import CampaignsModel from "./campaignsModel";

const initialState = {
  'campaigns': new CampaignsModel()
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
                campaigns: action.campaigns
			});
  }

  return state;
}