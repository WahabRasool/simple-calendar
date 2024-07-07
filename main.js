let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function generateCalendar(year, month) {
    const calendarTitle = document.getElementById('calendarTitle');
    const calendarTable = document.getElementById('calendarTable');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDate = new Date();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    let date = 1;

    // Set calendar title
    calendarTitle.textContent = `${monthNames[month]} ${year}`;

    // Clear previous table
    calendarTable.innerHTML = '';

    // Create table header for day names
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    dayNames.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    calendarTable.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const td = document.createElement('td');
            if (i === 0 && j < firstDay) {
                td.textContent = '';
            } else if (date > lastDate) {
                td.textContent = '';
            } else {
                td.textContent = date;
                if (year === currentDate.getFullYear() && month === currentDate.getMonth() && date === currentDate.getDate()) {
                    td.classList.add('today');
                }
                date++;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    calendarTable.appendChild(tbody);
}

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});

// Generate the calendar for the current month and year on page load
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentYear, currentMonth);
});