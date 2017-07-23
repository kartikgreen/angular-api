var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var filmTitleSchema = new Schema({
    name: { type: String, required: true },
    metaDescription: { type: String, required: true },
    introduction: { type: String, required: true },
    mainEditor: { type: String, required: true },
    headerImage: { type: String, required: true },
    galleryImages: { type: Array, required: true },
    logoImage: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    facebookUrl: { type: String, required: true },
    trailerUrl: { type: String, required: true },
    minimumAge: { type: Number, required: true },
    twitterUrl: { type: String, required: true },
    instagramUrl: { type: String, required: true },
    screenerUrl: { type: String, required: true },
    screenerPrivate: { type: Boolean },
    screenerUsername: { type: String },
    screenerPassword: { type: String },
    filmMedium: { type: Array, required: true },
    filmLength: { type: Number, required: true },
    hashtags: { type: Array, required: true },
    partnerName: { type: Array, required: true },
    licenseStartDate: { type: String, required: true },
    licenseEndDate: { type: String, required: true },
    paymentAmount: {
        price: { type: Number, required: true },
        type: { type: String, required: true },
    },
    screeningAmount: { type: Number, required: true },
    paymentRepetition: { type: String, enum: ['Per Screening', 'Single Payment'], required: true },
    paymentPartnerName: { type: String, required: true }
});

var filmTitleModel = mongoose.model("filmTitle", filmTitleSchema);
module.exports = filmTitleModel;