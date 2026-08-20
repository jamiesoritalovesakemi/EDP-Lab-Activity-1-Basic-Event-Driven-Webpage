// =========================================
// BASIC EVENT-DRIVEN WEBPAGE
// Laboratory Activity #1
// =========================================

// Select required HTML elements using querySelector().
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// Store the original appearance for the Reset event.
const originalHeading = "Welcome to My Event-Driven Webpage!";
const originalBackgroundColor = "#eaf4ff";

// -----------------------------------------
// Event Handler: Greeting Button Click
// Event Source: greetingButton
// Event Listener: click
// -----------------------------------------
function handleGreetingClick() {
    const name = nameInput.value.trim();

    if (name === "") {
        mainHeading.textContent = originalHeading;
        messageArea.textContent = "Please enter your name first.";
        console.log("Greeting button clicked with empty input.");
        return;
    }

    mainHeading.textContent = `Hello, ${name}!`;
    messageArea.textContent = `Welcome, ${name}! Your personalized greeting has been displayed.`;

    console.log(`Greeting displayed for ${name}.`);
}

// -----------------------------------------
// Event Handler: Background Button Click
// Event Source: backgroundButton
// Event Listener: click
// -----------------------------------------
function handleBackgroundClick() {
    document.body.style.backgroundColor = "#dff7e8";

    messageArea.textContent = "The webpage background color was changed.";

    console.log("Background color changed.");
}

// -----------------------------------------
// Event Handler: Reset Button Click
// Event Source: resetButton
// Event Listener: click
// -----------------------------------------
function handleResetClick() {
    mainHeading.textContent = originalHeading;
    nameInput.value = "";
    document.body.style.backgroundColor = originalBackgroundColor;
    messageArea.textContent = "";

    console.log("Webpage has been reset to its original appearance.");
}

// -----------------------------------------
// Event Handler: Input
// Event Source: nameInput
// Event Listener: input
// -----------------------------------------
function handleInput() {
    const currentText = nameInput.value;

    if (currentText.trim() === "") {
        messageArea.textContent = "";
    } else {
        messageArea.textContent = `You are typing: ${currentText}`;
    }

    console.log(`Current input: ${currentText}`);
}

// -----------------------------------------
// Event Handler: Mouseover
// Event Source: buttons
// Event Listener: mouseover
// -----------------------------------------
function handleMouseover(event) {
    console.log(`The mouse is over the ${event.currentTarget.textContent.trim().toLowerCase()}.`);
}

// -----------------------------------------
// Attach Event Listeners
// -----------------------------------------

// Greeting button event listener.
greetingButton.addEventListener("click", handleGreetingClick);

// Background button event listener.
backgroundButton.addEventListener("click", handleBackgroundClick);

// Reset button event listener.
resetButton.addEventListener("click", handleResetClick);

// Input event listener.
nameInput.addEventListener("input", handleInput);

// Mouseover event listeners.
greetingButton.addEventListener("mouseover", handleMouseover);
backgroundButton.addEventListener("mouseover", handleMouseover);
resetButton.addEventListener("mouseover", handleMouseover);

// Initial debugging message.
console.log("Basic Event-Driven Webpage JavaScript loaded successfully.");