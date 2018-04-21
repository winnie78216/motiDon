import { Record } from "immutable";
import update from "immutability-helper";

const CampaignsRecord = Record({
    data: [
        {
            orginization: 'NCCR Gaza',
            title: "Wheelchairs for Gaza's children with disabilities",
            description: "Syrians are facing the worst humanitarian crisis in the recent times. They have no protection at all and vicious crimes of Syrian Regime against them is a daily routine out there. The world had already gave up to mourn or at least to feel sorrow for Syrians. Death tolls are only statistical numbers and in fact 50-60 deaths for a day don't surprise people any more. ",
            imageUrl: 'https://i.imgur.com/n0zaDYD.png',
            date: "April 2, 2016",
            currentDonation: 3000,
            targetDonation: 25000, 
        },
        {
            orginization: 'IHCRO RELIEF',
            title: 'Orphan Sponsorship',
            description: 'At this critical time, our services are desperately needed (see below), which is why we are launching this effort to help fund our operations that would enable us to assist as many Palestinians in need as possible.',
            imageUrl: 'https://i.imgur.com/LiG2Rdi.png',
            date: "April 14, 2018",
            currentDonation: 5000,
            targetDonation: 30000, 
        },
        {
            orginization: 'IRAQ RE:CODED',
            title: 'The Center for Global Affairs (CGA) at New York University’s School of Professional Studies',
            description: "Syrian refugees are learning to code and getting jobs as remote developers even when displaced! Our team is in Iraq recruiting our first cohort of rockstar fellows and trainers. They’re ready to start creating and building software but to do so, they need YOUR HELP. Here's your easy chance to make a big difference by either GIVING a quick tax deductible donation (click here) or SHARING this campaign on Facebook and Twitter. This program is going to change lives by allowing our fellows to earn a living wage but also prevent them from being exploited, pressured into early marriage, susceptible to extremism, and in danger of becoming a lost generation. SO... get involved on social media! Over the next couple of weeks we'll be sharing stories from the field and introducing you to some incredibly inspiring people with stories that will change the way you view this crisis. ",
            imageUrl: 'https://i.imgur.com/Ou7MPFB.png',
            date: "April 14, 2018",
            currentDonation: 12000,
            targetDonation: 30000, 
        },
        {
            orginization: 'Build Palestine',
            title: 'LARP in Palestine: challenge reality with fiction',
            description: "Over the past 6 years, a group of volunteers have been coming together to build a Larp community in Palestine with support from Nordic Larpers. “Birth of Larp in the Arab World” is a book summarizing our projects both in Arabic and English.            Using Larp, We played many stories : Finland was occupied (check out Halat Hisar). Hundred of kids were pretending to be animals, and fighting oppressive lions with magical water balloons. A wedding between a Palestinian girl and a Norwegian man (see here). A man was killed by his sister because he had a relationship with another girl. Children with superhero’s powers are attending a boarding school. A tribe that lived in Jericho 3,000 years ago and used dancing battles as a mean to solve conflicts. And many other stories.",
            imageUrl: 'https://i.imgur.com/obBpi27.png',
            date: "April 14, 2018",
            currentDonation: 2000,
            targetDonation: 29000, 
        },
        {
            orginization: 'Isabel Rullán',
            title: 'Maria: Puerto Rico Real-Time Recovery Fund',
            description: "We are committed to activating a global community to power up Puerto Rico after Hurricane Maria’s devastating impact. María: Puerto Rico Real-Time Recovery Fund was organized in partnership with the Foundation for Puerto Rico, a 501(c)(3) corporation providing fiscal sponsorship of the fund. All donations to this fund are 100% tax deductible. Hurricane María is Puerto Rico’s worst natural disaster in over a century, “the fifth strongest hurricane to hit the United States” (NASA). Puerto Rico’s infrastructure was devastated and recovery will take months. 100% of the power grid was taken offline 80% of the population was left without water service. Communications services were reduced to a handful of pockets. The fund is raising $10 million to finance immediate impact and long-term solutions for the most vulnerable communities in Puerto Rico.",
            imageUrl: 'https://i.imgur.com/nphazMg.png',
            date: "April 14, 2018",
            currentDonation: 400000,
            targetDonation: 10000000, 
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