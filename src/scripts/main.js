import apiActions from "./api.js"
import events from "./events.js"
import render from "./dom.js"

/* 

Now it's time to import all the modules needed to get the data, display the data, and attach the event listener to the DOM element.

*/

// Invoke the method that attaches the event listener
events.registerDeleteListener()

// Get all recipes from API and render them in the DOM
apiActions.getAllRecipes().then(render)