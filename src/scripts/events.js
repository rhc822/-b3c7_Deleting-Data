import apiActions from "./api.js"
import render from "./dom.js"

/* 

This is an events module to register the click handler on the list element. This module exports an object with one method named registerDeleteListener. This will be invoked in main module.

*/

const recipeList = document.querySelector("#recipeList")

export default {
    registerDeleteListener () {
        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteRecipe--")) {
                // Extract recipe id from the button's id attribute
                const recipeToDelete = event.target.id.split("--")[1]
                console.log("Recipe ID:", recipeToDelete)
                // Invoke the delete method, then get all recipes and render them
                apiActions.deleteRecipe(recipeToDelete)
                    .then(apiActions.getAllRecipes)
                    .then(render)
            }
        })
    }
}