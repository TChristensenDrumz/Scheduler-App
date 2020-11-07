var currentDay = moment().format("dddd, MMMM Do");
var currentHour = moment().format("h-a");
var rows = $(".row");
var textareas = $("textarea");

init();

// Initializes page with current day
function init() {
    $("#currentDay").text(currentDay);
    var time;
    for(let i = 0; i < rows.length; i++){
        if(rows[i].id === currentHour){
            time = i;
        }
    }
    // Sets time blocks classes based on current time
    for(let i = 0; i < time; i++){
        rows[i].children[1].classList.add("past");
    }
    rows[time].children[1].classList.add("present");
    for(let i = time + 1; i < rows.length; i++){
        rows[i].children[1].classList.add("future");
    }
    renderSchedule();
}

// Saves schedule to local storage
$(".saveBtn").on("click", function(){
    var userData = [];
    for(let i = 0; i < rows.length; i++){
        userData.push($(textareas[i]).val());
    }
    localStorage.setItem("user-data", JSON.stringify(userData));
});

// Renders schedule to the page
function renderSchedule(){
    if(localStorage.getItem("user-data") !== null){
        var dataPull = JSON.parse(localStorage.getItem("user-data"));
        for(let i = 0; i < dataPull.length; i++){
            $(textareas[i]).val(dataPull[i]);
        } 
    }
}