const datepicker = document.querySelector(".datepicker");
const rangeInput = datepicker.querySelector("input");
const calendarContainer = datepicker.querySelector(".calendar");
const leftCalendar = datepicker.querySelector(".left-side");
const rightCalendar = datepicker.querySelector(".right-side");

let leftDate = new Date();
let rightDate = new Date(leftDate);
rightDate.setMonth(rightDate.getMonth() + 1);

calendarContainer.hidden = false;

const renderCalendar = (calendar, year, month) => {
    const label = calendar.querySelector(".label");
    label.textContent = new Date(year, month).toLocaleString(
        navigator.language || "en-US",
        {
            year: "numeric",
            month: "long",
        }
    );

    const datesContainer = calendar.querySelector(".dates");
    datesContainer.innerHTML = "";
};

renderCalendar(leftCalendar, leftDate.getFullYear(), leftDate.getMonth());
renderCalendar(rightCalendar, rightDate.getFullYear(), rightDate.getMonth());

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