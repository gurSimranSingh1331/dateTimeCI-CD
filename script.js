function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const currentDateTime = new Date();
    dateTimeElement.textContent = currentDateTime.toLocaleString();
}

// Update the date and time every second
setInterval(displayDateTime, 1000);

// Display initial time immediately
displayDateTime();
