var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var venueContactSchema = new Schema(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        phone: { type: Number, required: true },
        email: { type: String, required: true },
        facebookUrl: { type: String, required: true },
    }
);
var venueSchema = new Schema({
    name: { type: String, required: true },
    companyName: { type: String, required: true },
    metaDescription: { type: String, required: true },
    introduction: { type: String, required: true },
    mainEditor: { type: String, required: true },
    headerImage: { type: String, required: true },
    galleryImages: { type: Array, required: true },
    geoLocation: { "location": String, "lat": String, "lng": String },
    logoImage: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    facebookUrl: { type: String, required: true },
    twitterUrl: { type: String, required: true },
    instagramUrl: { type: String, required: true },
    mainCategory: { type: Array, required: true },
    amenities: { type: Array, required: true },
    ticketServiceUrl: { type: String, required: true },
    ticketServiceFee: {
        price: { type: Number, required: true },
        type: { type: String, required: true },
    },
    ticketServiceRequired: { type: Boolean },
    filmSettings: {
        type: {
            filmContactName: { type: String, required: true },
            filmSeatingAmount: { type: Number, required: true },
            filmMedium: { type: Array, required: true },
            filmRentalFee: {
                price: { type: Number, required: true },
                type: { type: String, required: true },
            },
        }
    },
    contacts: [venueContactSchema],
    paymentContact: { type: String, required: true },
    paymentPreference: { type: String, required: true },
    paypalEmail: { type: String },
    ibanAccount: { type: String },
 });
var venueModel = mongoose.model("Venue", venueSchema);
module.exports = venueModel;