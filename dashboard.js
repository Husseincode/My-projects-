window.onload = function (){
    const RED = document.querySelector(".red");
    const YELLOW = document.querySelector(".yellow");
    const GREEN = document.querySelector(".green");
    setTimeout(() => {
        RED.style.filter = `contrast(100%)`;
        setTimeout(() => {
        RED.style.filter = `contrast(50%)`;
        }, 1000);
    }, 3000);
    setTimeout(() => {
        YELLOW.style.filter = `contrast(100%)`;
        setTimeout(() => {
        YELLOW.style.filter = `contrast(50%)`;
        }, 1000);
    }, 4000);
    setTimeout(() => {
        GREEN.style.filter = `contrast(100%)`;
        setTimeout(() => {
        GREEN.style.filter = `contrast(50%)`;
        }, 1000);
    }, 5000);
}

//expand
const exp = document.querySelector(".expand");
exp.addEventListener("click", ()=>{
    var sec = document.querySelector("section");
    sec.classList.toggle("expsec");
    exp.classList.toggle("hifi");
    //change caret drawer position
    exp.classList.toggle("rightangle")
    //search
    var sear = document.querySelector(".search");
    sear.classList.toggle("searchVisibility");
    //reduce form width
    const fded = document.querySelector("form");
    fded.classList.toggle("fordid");
    //theme toggler
    var alll = document.getElementById("all");
    alll.classList.toggle("allReduce")
})
//darkmode
function darkTheme(){
    const BODYTHEME = document.body;
    BODYTHEME.style.backgroundColor = "rgba(32, 33, 36, 0.923)";
    BODYTHEME.style.color = "white";
    var dback = document.getElementById("darkback");
    var alll = document.getElementById("all");
    var lback = document.getElementById("lightback");
    lback.style.backgroundColor = "rgba(32, 33, 36, 0.923)"
    alll.style.backgroundColor = `rgba(100%, 100%, 100%, 10%)`
    dback.style.backgroundColor = `rgba(100%, 100%, 100%, 10%)`
}
const DARKMODE = document.getElementById("darkmode");
DARKMODE.addEventListener("click", darkTheme);
//lightmode
function lightTheme(){
    const BODYTHEME = document.body;
    BODYTHEME.style.backgroundColor = "white";
    BODYTHEME.style.color = "black";
    var dback = document.getElementById("darkback");
    var alll = document.getElementById("all");
    var lback = document.getElementById("lightback");
    lback.style.backgroundColor = "white"
    alll.style.backgroundColor = `lightgrey`
    dback.style.backgroundColor = `lightgrey`
}
const LIGHTMODE = document.getElementById("lightmode");
LIGHTMODE.addEventListener("click", lightTheme);

//searchButton
var srch = document.querySelector(".search");
srch.addEventListener("focus", ()=>{
    srch.style.outline = "none";
})
var formSearch = document.querySelector(".fa-search");
formSearch.addEventListener("click", (event)=>{
    var itemSearch = srch.value;
    if(itemSearch == ''){
        event.preventDefault();
        alert("Your Search is empty")
    }
    else{
        const user_question = window.prompt("Server is currently down, it might be due to some server issue. Try checking your network connectivity. would you like us to notify you if you come online?");
        if(user_question == "yes" || user_question == "ok" || user_question == "Yes" || user_question || "Ok"){
            //check if user is online
            var isOnline = window.navigator.onLine;
            if(isOnline == true){
                alert("You are now online, welcome back...give us time to process your result");
                open("www.google.com");
            }
            else{
                //cancel the execution
                event.preventDefault()
                alert(`You are currently offline...`)
            }
        }
    }
})