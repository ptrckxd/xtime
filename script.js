document.addEventListener("DOMContentLoaded", function () {
    const message = document.getElementById("message");
    
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    if (currentDay === 5) { // 5 represents Friday
        message.textContent = "It's Friday! Let's celebrate!";
        document.body.style.backgroundColor = "#4CAF50"; // Green background color for celebration
    } else {
        message.textContent = "It's not Friday yet. Hang in there!";
    }
});
