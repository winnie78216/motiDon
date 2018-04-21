import { Record } from "immutable";
import update from "immutability-helper";

const CampaignsRecord = Record({
    data: [
        {
            orginization: 'NCR',
            title: 'Title 1',
            description: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
            imageUrl: 'http://www.un.org/sites/www.un.org/files/styles/large/public/2016/05/25/volunteer-life-guard-helps-young-girl-out-sea.jpg',
            date: "April 2, 2016",
            currentDonation: 300,
            targetDonation: 1000, 
        },
        {
            orginization: 'Visual Meta',
            title: 'Title 2',
            description: 'This is a description of the stuff',
            imageUrl: 'https://www.telegraph.co.uk/content/dam/news/2016/05/09/96181512_Syrian_refugee_children_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg?imwidth=450',
            date: "April 14, 2018",
            currentDonation: 500,
            targetDonation: 1200, 
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