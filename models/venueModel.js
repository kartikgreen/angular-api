var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var venueContactSchema = new Schema(
    {
        name: { type: String },
        position: { type: String },
        phone: { type: Number },
        email: { type: String },
        facebookUrl: { type: String },
    }
);
var venueSchema = new Schema({
    name: { type: String },
    companyName: { type: String },
    metaDescription: { type: String },
    introduction: { type: String },
    mainEditor: { type: String },
    geoLocation: { location: string, lat: string, lng: string },
    mainCategory: { type: Array },
    headerImage: { type: String },
    galleryImages: { type: Array },
    logoImage: { type: String },
    websiteUrl: { type: String },
    videoUrl: { type: String },
    facebookUrl: { type: String },
    twitterUrl: { type: String },
    instagramUrl: { type: String },
    amenities: { type: Array },
    ticketServiceUrl: { type: String },
    ticketServiceFee: {
        price: { type: Number },
        type: { type: String },
    },
    ticketServiceRequired: { type: Boolean },
    filmSettings: {
        type: {
            filmContactName: { type: String },
            filmSeatingAmount: { type: Number },
            filmMedium: { type: Array },
            filmRentalFee: {
                price: { type: Number },
                type: { type: String },
            },
        }
    },
    contacts: [venueContactSchema],
    paymentContact: { type: String },
    paymentPreference: { type: String },
    paypalEmail: { type: String },
    ibanAccount: { type: String },
 });
var venueModel = mongoose.model("Venue", venueSchema);
module.exports = venueModel;