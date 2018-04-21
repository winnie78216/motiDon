import { Record } from "immutable";
import update from "immutability-helper";

const CampaignsRecord = Record({
    data: [
        {
            orginization: 'NCR',
            description: 'This is a description of the stuff',
            currentDonation: 0,
            targetDonation: 100, 
        },
        {
            orginization: 'Visual Meta',
            description: 'This is a description of the stuff',
            currentDonation: 0,
            targetDonation: 100, 
        }
       ],
       asdf : 'lol'
});

export default class CampaignsModel extends CampaignsRecord {

    addMeetingNote() {
        const data = ["asdfasdfasdf", "Afmæli bæjarins", "886843", "Siglufjörður", "HH | EE", "Á þessum fundi fór fram ...."]

        //persist(data)
        return this.set('data', update(this.data, { $push: [data] }))
    }
}