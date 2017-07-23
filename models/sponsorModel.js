var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var sponsorContactSchema = new Schema(
        {
            name: { type: String, required: true },
            position: { type: String, required: true },
            phone: { type: Number, required: true },
            email: { type: String, required: true },
        }
);

var sponsorSchema = new Schema({
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
    facebookUrl: { type: String, required: true },
    twitterUrl: { type: String, required: true },
    instagramUrl: { type: String, required: true },
    contacts: [sponsorContactSchema],
    paymentContact: { type: String, required: true },
    paymentPreference: { type: String, required: true },
    paypalEmail: { type: String },
    ibanAccount: { type: String },
 });

var sponsorModel = mongoose.model("Sponsor", sponsorSchema);
module.exports = sponsorModel;