// Daclaring variables and assigning values to them for present moment
var currentHour = moment().format("HH");
console.log("HH", currentHour);
// Setting the current date
var today = moment();
$("#currentDay").text(today.format("ddd, MMM Do, YYYY"));

// Using jQuery to manipulate the DOM
// $("#timeblock").addClass("past");
// $("#timeblock").addClass("present");
// $("#timeblock").addClass("future");

function displayColor() {
    for (var i = 9; i < 18; i++) {
        if (Number(currentHour) === i) {
            
            $("#" + i).addClass("present");

        } else if (currentHour > i) {
            $("#" + i).addClass("past");

        } else {
            $("#" + i).addClass("future");
        }
    }

}
displayColor();

// The page will update every 10 minutes without them having to refresh
// 1 minute = 60s => 10 minutes = 600s
setTimeout(function () {
    location.reload();
}, 600 * 1000);

// Restoring events in the local storage
// We need to have a key:value pair in order to store an object in local storage
// key is set as the hour on the left side, and value is the text (event input) of textarea on the right side
var saveButtonOne = document.getElementById("saveBtn-1");
saveButtonOne.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("9").value;
    var hour = "9M";    
    localStorage.setItem(hour, eventInput);
    
});

    