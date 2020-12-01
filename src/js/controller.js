import * as model from './model.js';
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView";

// polyfilling everything else
import 'core-js/stable';
// polifilling async await
import 'regenerator-runtime/runtime';


const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();
        // 1) loading recipe
        await model.loadRecipe(id);
        // 2) rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
    }
}

const controlSearchResult = async function () {
    try {
        const query = searchView.getQuery();
        if(!query) return;

        await model.loadSearchResult(query);
        console.log(model.state.search.results);
    } catch (err) {
        console.log(err);
    }
};

const init = function (){
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHeandlerSearch(controlSearchResult);
}
init();
