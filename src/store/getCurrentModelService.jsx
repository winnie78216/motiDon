import store from './store';

export function getMeetingNotesModel() {
    return store.getState().meetingNotesReducer.meetingNotes;
}

export function getCampaignsModel() {
    return store.getState().campaignsReducer.campaigns;
}

export function getDonationMapModel() {
    return store.getState().donationMapReducer.donationMap;
}

export function getOrginizationModel() {
    return store.getState().orginizationReducer.orginization;
}

export function getAppStateModel() {
    return store.getState().appStateReducer.appState;
}