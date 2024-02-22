document.addEventListener("DOMContentLoaded", function() {
    // Check if localStorage is supported
    if (typeof(Storage) !== "undefined") {
      // Check if this is the user's first visit
      if (!localStorage.getItem("lastVisit")) {
        // First visit
        localStorage.setItem("lastVisit", new Date().getTime());
        document.getElementById("visits").textContent = "Welcome! Let us know if you have any questions.";
      } else {
        var lastVisitTime = parseInt(localStorage.getItem("lastVisit"));
        var currentTime = new Date().getTime();
        var timeDifference = currentTime - lastVisitTime;
        var oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  
        if (timeDifference < oneDay) {
          // Less than a day since last visit
          document.getElementById("visits").textContent = "Back so soon! Awesome!";
        } else {
          // Calculate the number of days since the last visit
          var daysDifference = Math.floor(timeDifference / oneDay);
          var daysText = (daysDifference === 1) ? "day" : "days";
          document.getElementById("visits").textContent = "You last visited " + daysDifference + " " + daysText + " ago.";
        }
  
        // Update the last visit time
        localStorage.setItem("lastVisit", currentTime);
      }
    } 
});