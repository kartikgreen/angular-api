var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;
var dayDescriptionSchema = new Schema(
        {
            day: { type: Number },
            description: { type: String },
        }
);
var experienceSchema = new Schema({
    name: { type: String },
    metaDescription: { type: String },
    introduction: { type: String },
    mainEditor: { type: String },
    geoLocation: { "location": String, "lat": String, "lng": String },
    headerImage: { type: String },
    galleryImages: { type: Array },
    unDevelopmentGoals: { type: String },
    mainCategory: { type: String },
    hashTags: { type: Array },
    daysAndDescriptions: [dayDescriptionSchema],
    totalNights: { type: Number },
    minimumPeople: { type: Number },
    maximumPeople: { type: Number },
    minimumAge: { type: Number },
    includes: { type: Array },
    excludes: { type: Array },
    pricePerPerson: {
        price: { type: Number },
        type: { type: String },
    },
    minimumBookingPeriod: { type: Number },
    bookingUrl: { type: String },
    facebookUrl: { type: String },
    videoUrl: { type: String },
    logoImage: { type: String },
    partnerName: { type: String },
 });
var experienceModel = mongoose.model("Experience", experienceSchema);
module.exports = experienceModel;