// Target date for the countdown
var dday = new Date('2027-07-04T00:00:00'); // Specific target date and time

// Function to calculate and display the time left
function runClock() {
    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the distance between now and the target date
    var timeLeft = dday - now;
    
    // Calculate days, hours, minutes, and seconds from the distance
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Convert distance from milliseconds to days
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Remaining seconds

    // Update the HTML elements with the calculated time
    document.getElementById("day").textContent = days;
    document.getElementById("hour").textContent = hours;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;
    
    // Check if the countdown has ended
    if (timeLeft < 0) {
        clearInterval(intervalId); // Stop the countdown
        document.getElementById("day").textContent = 0;
        document.getElementById("hour").textContent = 0;
        document.getElementById("minute").textContent = 0;
        document.getElementById("second").textContent = 0;
        document.getElementById("dday").textContent = "DDAY!"; // Notify that the countdown has ended
    }
}

// Call runClock every second to update the countdown
var intervalId = setInterval(runClock, 1000);