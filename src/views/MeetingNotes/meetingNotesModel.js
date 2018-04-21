import { Record } from "immutable";
import update from "immutability-helper";

const MeetingNotes = Record({
    data: [],
    inputForm: {
        title: '',
        caseNumber: '',
        location: '',
        members: '',
        date: new Date().toISOString().substr(0, 19).replace('T', ' ').split(" ")[0],
        summary: '',
    },
    status: 'NEUTRAL'
});

export default class MeetingNotesModel extends MeetingNotes {



}