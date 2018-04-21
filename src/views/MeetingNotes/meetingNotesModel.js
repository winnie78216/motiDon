import { Record } from "immutable";
import update from "immutability-helper";

const MeetingNotes = Record({
    data: [
        ["2018-03-16", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."],
        ["2018-03-15", "Árshátíð", "553374", "Siglufjörður", "HH | EE | BE", "Á þessum fundi fór fram ...."],
        ["2018-03-16", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."],
        ["2018-03-15", "Árshátíð", "553374", "Siglufjörður", "HH | EE | BE", "Á þessum fundi fór fram ...."],
        ["2018-03-16", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."],
        ["2018-03-15", "Árshátíð", "553374", "Siglufjörður", "HH | EE | BE", "Á þessum fundi fór fram ...."],
        ["2018-03-16", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."],
        ["2018-03-15", "Árshátíð", "553374", "Siglufjörður", "HH | EE | BE", "Á þessum fundi fór fram ...."],
        ["2018-03-16", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."],
        ["2018-03-15", "Árshátíð", "553374", "Siglufjörður", "HH | EE | BE", "Á þessum fundi fór fram ...."],
      ],
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

    addMeetingNote() {
        const data = ["asdfasdfasdf", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."]

        //persist(data)
        return this.set('data', update(this.data, { $push: [data] }))
    }

}