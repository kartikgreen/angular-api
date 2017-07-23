var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var filmEventSponsorSchema = new Schema(
    {
        sponsorName: { type: String, required: true },
        sponsorType: { type: String, enum: ['Product', 'Financial'], required: true },
        productName: { type: String },
        amount: {
            price: { type: Number },
            type: { type: String },
        }
    }
);

var filmEventSchema = new Schema({
    metaDescription: { type: String, required: true },
    introduction: { type: String, required: true },
    mainEditor: { type: String, required: true },
    headerImage: { type: String, required: true },
    galleryImages: { type: Array, required: true },
    hashtags: { type: Array, required: true },
    facebookUrl: { type: String, required: true },
    filmTitleName: { type: String, required: true },
    partnerName: { type: Array, required: true },
    venueName: { type: String, required: true },
    mainCategory: { type: String, required: true },
    unDevelopmentGoals: { type: Array, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    startTime: {
        hours: { type: String, required: true },
        minutes: { type: String, required: true },
    },
    endTime: {
        hours: { type: String, required: true },
        minutes: { type: String, required: true },
    },
    timeZone: { type: String, required: true },
    ticketService: { type: String, required: true },
    ticketUrl: { type: String, required: true },
    ticketPrice: {
        price: { type: Number, required: true },
        type: { type: String, required: true },
    },
    sponsors: [filmEventSponsorSchema]
});

var filmEventModel = mongoose.model("filmEvent", filmEventSchema);
module.exports = filmEventModel;