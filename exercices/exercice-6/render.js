export function fillArticle (articleID, userData){
    let ID = document.getElementById(articleID);
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode(userData);
    
    h2.appendChild(h2Text);
    ID.appendChild(h2);
}