var mongoose = require('../shared/dbConfig.js');
var Schema = mongoose.Schema;

var ingredientsSchema = new Schema(
    {
        ingredient: { type: String, required: true },
        amount: { type: Number, required: true },
        unit: { type: Number, required: true },
    }
);

var recipeSchema = new Schema(
    { servings: { type: Number, required: true },
       cookingtime: { type: Number, required: true },
       ingredients: [ingredientsSchema]
    }
);

var ideaSchema = new Schema({
    name: { type: String, required: true },
    metaDescription: { type: String, required: true },
    introduction: { type: String, required: true },
    mainEditor: { type: String, required: true },
    headerImage: { type: String, required: true },
    galleryImages: { type: Array, required: true },
    videoUrl: { type: String, required: true },
    unDevelopmentGoals: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    facebookUrl: { type: String, required: true },
    partnerName: { type: String, required: true },
    mainCategory: { type: String, required: true },
    hashtags: { type: Array, required: true },
    recipe: recipeSchema
 });

var ideaModel = mongoose.model("Ideas", ideaSchema);
module.exports = ideaModel;