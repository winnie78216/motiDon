import store from './store';

export function getMeetingNotesModel() {
    return store.getState().meetingNotesReducer.meetingNotes;
}

export function getAppStateModel() {
    return store.getState().appStateReducer.appState;
}