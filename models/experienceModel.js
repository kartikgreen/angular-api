var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;
var dayDescriptionSchema = new Schema(    
        {
            day: { type: Number, required: true },
            description: { type: String, required: true },
        }
);
var experienceSchema = new Schema({
    name: { type: String, required: true },
    metaDescription: { type: String, required: true },
    headerImage: { type: String, required: true },
    galleryImages: { type: Array, required: true },
    unDevelopmentGoals: { type: String, required: true },
    mainEditor: { type: String, required: true },
    introduction: { type: String, required: true },
    mainCategory: { type: String, required: true },
    daysAndDescriptions: [dayDescriptionSchema],
    totalNights: { type: Number, required: true },
    minimumPeople: { type: Number, required: true },
    maximumPeople: { type: Number, required: true },
    minimumAge: { type: Number, required: true },
    includes: { type: Array, required: true },
    excludes: { type: Array, required: true },
    hashtags: { type: Array, required: true },
    pricePerPerson: {
        price: { type: Number, required: true },
        type: { type: String, required: true },
    },
    minimumBookingPeriod: { type: Number, required: true },
    bookingUrl: { type: String, required: true },
    facebookUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    logoImage: { type: String, required: true }, 
    geoLocation: { "location": String, "lat": String, "lng": String },  
    partnerName: { type: String, required: true },
 });
var experienceModel = mongoose.model("Experience", experienceSchema);
module.exports = experienceModel;