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
        if (currentHour === i) {
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

var eventInput = document.querySelector(".col-9");
eventInput.textContent = text;
document.querySelector("#saveBtn").addEventListener("click", function(event) {
    event.preventDefault();

});

localStorage.setItem("eventInput", text.value);