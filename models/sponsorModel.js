var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var sponsorContactSchema = new Schema(
        {
            name: { type: String },
            position: { type: String },
            phone: { type: Number },
            email: { type: String },
        }
);

var sponsorSchema = new Schema({
    name: { type: String },
    companyName: { type: String },
    metaDescription: { type: String },
    introduction: { type: String },
    mainEditor: { type: String },
    geoLocation: { "location": String, "lat": String, "lng": String },
    headerImage: { type: String },
    galleryImages: { type: Array },
    logoImage: { type: String },
    websiteUrl: { type: String },
    facebookUrl: { type: String },
    twitterUrl: { type: String },
    instagramUrl: { type: String },
    contacts: [sponsorContactSchema],
    paymentContact: { type: String },
    paymentPreference: { type: String },
    paypalEmail: { type: String },
    ibanAccount: { type: String },
 });

var sponsorModel = mongoose.model("Sponsor", sponsorSchema);
module.exports = sponsorModel;