// Daclaring variables and assigning values to them for present moment
var currentHour = moment().format("HH");
console.log("HH", currentHour);
// Setting the current date
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  
// The page will update colors, date; and reload without them having to refresh
setInterval(displayTime, 300 * 1000);


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
    var hour = "9AM";    
    localStorage.setItem(hour, eventInput);
    
});
var saveButtonTwo = document.getElementById("saveBtn-2");
saveButtonTwo.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("10").value;
    var hour = "10AM";    
    localStorage.setItem(hour, eventInput);
    
});

var saveButtonThree = document.getElementById("saveBtn-3");
saveButtonThree.addEventListener("click", function (event) {
    event.preventDefault();
    var eventInput = document.getElementById("11").value;
    var hour = "11AM";    
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

// Using jQuery to set .getItem, so that when the user refreshes the page, the saved events persist
 
$("#9").text(localStorage.getItem("9AM"));
$("#10").text(localStorage.getItem("10AM"));
$("#11").text(localStorage.getItem("11AM"));
$("#12").text(localStorage.getItem("12PM"));
$("#13").text(localStorage.getItem("1PM"));
$("#14").text(localStorage.getItem("2PM"));
$("#15").text(localStorage.getItem("3PM"));
$("#16").text(localStorage.getItem("4PM"));
$("#17").text(localStorage.getItem("5PM"));



setInterval(function(){
        
        var date = moment().format("MMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(date);

    }, 1000)
     