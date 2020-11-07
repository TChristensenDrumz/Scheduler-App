var currentDay = moment().format("dddd, MMMM Do");
var currentHour = moment().format("h-a");
var rows = $(".row");
console.log(currentDay);
console.log(currentHour);

init();

function init() {
    $("#currentDay").text(currentDay);
    var time;
    for(let i = 0; i < rows.length; i++){
        if(rows[i].id === currentHour){
            time = i;
            console.log(time);
        }
    }
    for(let i = 0; i < time; i++){
        rows[i].children[1].classList.add("past");
    }
    rows[time].children[1].classList.add("present");
    for(let i = time + 1; i < rows.length; i++){
        rows[i].children[1].classList.add("future");
    }
}