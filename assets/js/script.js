
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  var saveButtons = document.querySelectorAll(".saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", function() {
      var text = this.parentElement.querySelector(".description").value;
      var time = this.parentElement.getAttribute("id");
      localStorage.setItem(time, text);
    });
  }

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Load saved events from local storage on page refresh
  var descriptionElements = document.querySelectorAll(".time-block .description");
  for (var i = 0; i < descriptionElements.length; i++) {
    var blockHour = descriptionElements[i].parentElement.getAttribute("id");
    descriptionElements[i].value = localStorage.getItem(blockHour);
  }
  //
  // TODO: Add code to display the current date in the header of the page.

  var displayTime = document.querySelector("#currentDay");
  var currentTime = dayjs().format("dddd, MMMM D, YYYY");
  displayTime.textContent = currentTime;

});

 
