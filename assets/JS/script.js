// Daclaring variables and assigning values to them for present moment
var currentHour = moment().format("HH");
console.log("HH", currentHour);
// Setting the current date
var today = moment();
$("#currentDay").text(today.format("ddd, MMM Do, YYYY"));

// The page will update every 10 minutes without them having to refresh
// 1 minute = 60s => 10 minutes = 600s
setTimeout(function () {
    location.reload();
}, 600 * 1000);


// Using jQuery to manipulate the DOM
// $("#timeblock").addClass("past");
// $("#timeblock").addClass("present");
// $("#timeblock").addClass("future");

function displayColor() {
    for (var i = 9; i < 18; i++) {
        // it will not work if using (currentHour) only because it is a string, we need a number
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
var saveButtonTwo = document.getElementById("saveBtn-2");
saveButtonTwo.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("10").value;
    var hour = "10M";    
    localStorage.setItem(hour, eventInput);
    
});

var saveButtonThree = document.getElementById("saveBtn-3");
saveButtonThree.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("11").value;
    var hour = "11M";    
    localStorage.setItem(hour, eventInput);
    
});

var saveButtonFour = document.getElementById("saveBtn-4");
saveButtonFour.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("12").value;
    var hour = "12PM";    
    localStorage.setItem(hour, eventInput);
    
});

var saveButtonFive = document.getElementById("saveBtn-5");
saveButtonFive.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("13").value;
    var hour = "1PM";    
    localStorage.setItem(hour, eventInput);
    
});

var saveButtonSix = document.getElementById("saveBtn-6");
saveButtonSix.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("14").value;
    var hour = "2PM";    
    localStorage.setItem(hour, eventInput);
    
});

var saveButtonSeven = document.getElementById("saveBtn-7");
saveButtonSeven.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("15").value;
    var hour = "3PM";    
    localStorage.setItem(hour, eventInput);
    
});

var saveButtonEight = document.getElementById("saveBtn-8");
saveButtonEight.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("16").value;
    var hour = "4PM";    
    localStorage.setItem(hour, eventInput);
    
});
var saveButtonNine = document.getElementById("saveBtn-9");
saveButtonNine.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("17").value;
    var hour = "5PM";    
    localStorage.setItem(hour, eventInput);
    
});


    