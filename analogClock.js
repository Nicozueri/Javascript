/*
Autor: Nico Jäger
Datum: 19.11.2025
*/



// This function updates the clock hands
function updateClock() {

    // Get the current time from the system
    const time = new Date();

    // Extract seconds, minutes, and hours
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours   = time.getHours();

    // Convert seconds to degrees (6° per second)
    const secondsDeg = seconds * 6;

    // Convert minutes to degrees (6° per minute)
    // Add the seconds fraction for smoother movement
    const minutesDeg = minutes * 6 + seconds * 0.1;

    // Convert hours to degrees (30° per hour)
    // Add half a degree per minute for smooth movement
    const hoursDeg   = (hours % 12) * 30 + minutes * 0.5;

    // Apply the rotation to the second hand
    document.querySelector(".second-hand").style.transform =
        `translateX(-50%) rotate(${secondsDeg}deg)`;

    // Apply the rotation to the minute hand
    document.querySelector(".min-hand").style.transform =
        `translateX(-50%) rotate(${minutesDeg}deg)`;

    // Apply the rotation to the hour hand
    document.querySelector(".hour-hand").style.transform =
        `translateX(-50%) rotate(${hoursDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Run the function once at the start
updateClock();
