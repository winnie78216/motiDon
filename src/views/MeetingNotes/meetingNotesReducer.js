import {ACTION} from './meetingNotesActionCreator';
import MeetingNotesModel from "./meetingNotesModel";

const initialState = {
  'meetingNotes': new MeetingNotesModel()
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
			  meetingNotes: action.meetingNotes
			});
  }

  return state;
}