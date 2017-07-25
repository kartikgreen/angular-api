var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var filmEventSponsorSchema = new Schema(
    {
        sponsorName: { type: String },
        sponsorType: { type: String, enum: ['Product', 'Financial'] },
        productName: { type: String },
        amount: {
            price: { type: Number },
            type: { type: String },
        }
    }
);

var filmEventSchema = new Schema({
    metaDescription: { type: String },
    introduction: { type: String },
    mainEditor: { type: String },
    headerImage: { type: String },
    galleryImages: { type: Array },
    unDevelopmentGoals: { type: Array },
    mainCategory: { type: String },
    hashTags: { type: Array },
    facebookUrl: { type: String },
    filmTitleName: { type: String },
    partnerName: { type: Array },
    venueName: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    startTime: {
        hours: { type: String },
        minutes: { type: String },
    },
    endTime: {
        hours: { type: String },
        minutes: { type: String },
    },
    timeZone: { type: String },
    ticketService: { type: String },
    ticketUrl: { type: String },
    ticketPrice: {
        price: { type: Number },
        type: { type: String },
    },
    sponsors: [filmEventSponsorSchema]
});

var filmEventModel = mongoose.model("filmEvent", filmEventSchema);
module.exports = filmEventModel;