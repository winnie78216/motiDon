import { getMeetingNotesModel } from "../../store/getCurrentModelService";
import store from '../../store/store';

export const ACTION = Symbol('ACTION');

function createAction(meetingNotes) {
    return {
        type: ACTION,
        meetingNotes: meetingNotes
    }
}

function update(moduleModel) {
    return createAction(moduleModel);
}

export function addMeetingNote() {
    return update(getMeetingNotesModel().addMeetingNote())
}