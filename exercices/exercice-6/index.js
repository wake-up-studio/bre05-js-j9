import {user} from "./data.js";
import {fillArticle} from "./render.js";

window.addEventListener("DOMContentLoaded", () => {
    console.log(user);
    
    fillArticle("user-profile", user.firstName + " " + user.lastName);
});