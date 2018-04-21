import {ACTION} from './donationMapActionCreator';
import DonationMapModel from "./donationMapModel";

const initialState = {
  'donationMap': new DonationMapModel()
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
                donationMap: action.donationMap
			});
  }

  return state;
}