// Daclaring variables and assigning values to them for present moment
var currentHour = moment().format("HH");
console.log("HH", currentHour);
// Setting the current date
var today = moment();
$("#currentDay").text(today.format("ddd, MMM Do, YYYY"));

var saveButtonOne = document.getElementById("saveBtn-1");



// Using jQuery to manipulate the DOM
// $("#timeblock").addClass("past");
// $("#timeblock").addClass("present");
// $("#timeblock").addClass("future");

function displayColor() {
    for (var i = 9; i < 18; i++) {
        if (Number(currentHour) === i) {
            // string concatenation
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
setTimeout(function () {
    location.reload();
}, 600 * 1000);

// Restoring events in the local storage
saveButtonOne.addEventListener("click", function (event) {
    event.preventDefault();

    var eventInput = document.getElementById("9");
    console.log(eventInput);
    var text = eventInput.textContent;
    console.log(text);

    localStorage.setItem("eventInput", text);
    
});



