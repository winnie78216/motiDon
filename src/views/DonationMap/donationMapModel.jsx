import { Record } from "immutable";
import update from "immutability-helper";

const DonationMapRecord = Record({
    data: [
       ],
       asdf : 'lol'
});

export default class DonationMapModel extends DonationMapRecord {

    addMeetingNote() {
        const data = ["asdfasdfasdf", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."]

        //persist(data)
        return this.set('data', update(this.data, { $push: [data] }))
    }
}