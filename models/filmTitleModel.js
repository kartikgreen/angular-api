var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var filmTitleSchema = new Schema({
    name: { type: String },
    metaDescription: { type: String },
    introduction: { type: String },
    mainEditor: { type: String },
    hashTags: { type: Array },
    headerImage: { type: String },
    galleryImages: { type: Array },
    logoImage: { type: String },
    websiteUrl: { type: String },
    facebookUrl: { type: String },
    trailerUrl: { type: String },
    minimumAge: { type: Number },
    twitterUrl: { type: String },
    instagramUrl: { type: String },
    screenerUrl: { type: String },
    screenerPrivate: { type: Boolean },
    screenerUsername: { type: String },
    screenerPassword: { type: String },
    filmMedium: { type: Array },
    filmLength: { type: Number },
    partnerName: { type: Array },
    licenseStartDate: { type: String },
    licenseEndDate: { type: String },
    paymentAmount: {
        price: { type: Number },
        type: { type: String },
    },
    screeningAmount: { type: Number },
    paymentRepetition: { type: String, enum: ['Per Screening', 'Single Payment'] },
    paymentPartnerName: { type: String }
});

var filmTitleModel = mongoose.model("filmTitle", filmTitleSchema);
module.exports = filmTitleModel;