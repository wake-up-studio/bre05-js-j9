export function setupAlert (buttonID, message){
    let ID = document.getElementById(buttonID);
    
    ID.addEventListener("click", (event)=>{
        window.alert(message);
    });
}