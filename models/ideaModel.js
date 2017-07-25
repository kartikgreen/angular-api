var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var ingredientsSchema = new Schema(
    {
        ingredient: { type: String },
        amount: { type: Number },
        unit: { type: Number },
    }
);

var recipeSchema = new Schema(
    { servings: { type: Number },
       cookingtime: { type: Number },
       ingredients: [ingredientsSchema]
    }
);

var ideaSchema = new Schema({
    name: { type: String },
    metaDescription: { type: String },
    introduction: { type: String },
    mainEditor: { type: String },
    unDevelopmentGoals: { type: String },
    mainCategory: { type: String },
    hashTags: { type: Array },
    headerImage: { type: String },
    galleryImages: { type: Array },
    videoUrl: { type: String },
    websiteUrl: { type: String },
    facebookUrl: { type: String },
    partnerName: { type: String },
    recipe: recipeSchema
 });

var ideaModel = mongoose.model("Ideas", ideaSchema);
module.exports = ideaModel;