const datepicker = document.querySelector('.datepicker');
const rangeInput = datepicker.querySelector('input');
const calendarContainer = datepicker.querySelector('.calendar');

// show datepicker
rangeInput.addEventListener("focus", () => {
    calendarContainer.hidden = false;
});

// hide datepicker when clicked outside
document.addEventListener("click", (event) => {
    if(!datepicker.contains(event.target)) {
        calendarContainer.hidden = true;
    }
});