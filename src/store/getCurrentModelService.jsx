import store from './store';

export function getMeetingNotesModel() {
    return store.getState().meetingNotesReducer.meetingNotes;
}