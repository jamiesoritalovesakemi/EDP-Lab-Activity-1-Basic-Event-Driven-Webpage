/**
 * ============================================
 * LABORATORY ACTIVITY 1: Basic Event-Driven Webpage
 * ITP10 - Event-Driven Programming
 * ============================================
 * 
 * This script demonstrates event-driven programming concepts:
 * - Event Sources: HTML elements that generate events
 * - Event Listeners: Functions that wait for events
 * - Event Handlers: Functions that respond to events
 * 
 * @author: Dela Cruz, Juan M.
 * @date: August 20, 2026
 * @course: BSIT 2-1
 * ============================================
 */

// ===== SELECT DOM ELEMENTS (Event Sources) =====
// Using document.querySelector() with exact IDs as required
const pageContainer = document.querySelector('#pageContainer');
const mainHeading = document.querySelector('#mainHeading');
const nameInput = document.querySelector('#nameInput');
const greetingButton = document.querySelector('#greetingButton');
const backgroundButton = document.querySelector('#backgroundButton');
const resetButton = document.querySelector('#resetButton');
const messageArea = document.querySelector('#messageArea');

// ===== STORE ORIGINAL VALUES FOR RESET =====
const originalHeadingText = mainHeading.textContent;
const originalBackgroundColor = document.body.style.backgroundColor || '#f0f4f8';

// ============================================
// EVENT HANDLER FUNCTIONS
// ============================================

/**
 * Handler for the Display Greeting button click event.
 * Event Source: #greetingButton
 * Event Type: click
 * Behavior: Updates heading with personalized greeting.
 */
function handleGreetingClick() {
    // Get the name from input field
    const userName = nameInput.value.trim();
    
    // Check if input is empty
    if (userName === '') {
        // Display error message in the message area
        messageArea.innerHTML = `<p style="color: #e53e3e; font-weight: 600;">⚠️ Please enter your name first!</p>`;
        // Log for debugging
        console.log('Greeting attempted with empty input');
        return;
    }
    
    // Update heading with personalized greeting
    mainHeading.textContent = `Hello, ${userName}!`;
    
    // Update message area with success message
    messageArea.innerHTML = `<p style="color: #2b6cb0; font-weight: 500;">✅ Greeting displayed for "${userName}"</p>`;
    
    // Console log for debugging and event monitoring
    console.log(`[Greeting] Displayed greeting for: ${userName}`);
}

/**
 * Handler for the Change Background button click event.
 * Event Source: #backgroundButton
 * Event Type: click
 * Behavior: Randomly changes the webpage background color.
 */
function handleBackgroundClick() {
    // Array of pleasant background colors
    const colors = [
        '#fef3c7', // light yellow
        '#dbeafe', // light blue
        '#d1fae5', // light green
        '#fce4ec', // light pink
        '#e9d5ff', // light purple
        '#fed7aa', // light orange
        '#ccfbf1', // light teal
        '#fee2e2', // light red
        '#e0f2fe', // light sky blue
        '#f3e8ff', // light lavender
    ];
    
    // Pick a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply the new background color
    document.body.style.backgroundColor = randomColor;
    
    // Update message area
    messageArea.innerHTML = `<p style="color: #38a169; font-weight: 500;">🎨 Background color changed successfully!</p>`;
    
    // Console log for debugging
    console.log(`[Background] Changed background to: ${randomColor}`);
}

/**
 * Handler for the Reset button click event.
 * Event Source: #resetButton
 * Event Type: click
 * Behavior: Restores webpage to its original state.
 */
function handleResetClick() {
    // Restore the original heading
    mainHeading.textContent = originalHeadingText;
    
    // Clear the input field
    nameInput.value = '';
    
    // Restore original background color
    document.body.style.backgroundColor = originalBackgroundColor;
    
    // Clear the message area and show placeholder
    messageArea.innerHTML = `<p class="message-placeholder">Your messages will appear here...</p>`;
    
    // Console log for debugging
    console.log('[Reset] Page reset to original state');
}

/**
 * Handler for the input event on the nameInput field.
 * Event Source: #nameInput
 * Event Type: input
 * Behavior: Displays current text being typed in real-time.
 */
function handleNameInput() {
    const currentText = nameInput.value;
    
    // Only update if there's text, otherwise show placeholder
    if (currentText.trim() === '') {
        messageArea.innerHTML = `<p class="message-placeholder">Your messages will appear here...</p>`;
        console.log('[Input] Input field is empty');
    } else {
        messageArea.innerHTML = `<p style="color: #4a5568;">📝 You are typing: <strong>${currentText}</strong></p>`;
        console.log(`[Input] User typing: "${currentText}"`);
    }
}

/**
 * Handler for mouseover events on buttons.
 * Event Source: Multiple buttons
 * Event Type: mouseover
 * Behavior: Logs a message to the browser console.
 */
function handleButtonMouseover(event) {
    // Identify which button triggered the event
    const buttonId = event.target.id;
    const buttonName = 
        buttonId === 'greetingButton' ? 'Greeting' :
        buttonId === 'backgroundButton' ? 'Change Background' :
        buttonId === 'resetButton' ? 'Reset' : 'Unknown';
    
    // Display message in browser console
    console.log(`🖱️ The mouse is over the ${buttonName} button.`);
}

// ============================================
// ATTACH EVENT LISTENERS
// ============================================

// --- Greeting Button: Click Event ---
// Event Source: greetingButton
// Event Listener: addEventListener('click', handleGreetingClick)
// Event Handler: handleGreetingClick
greetingButton.addEventListener('click', handleGreetingClick);

// --- Background Button: Click Event ---
// Event Source: backgroundButton
// Event Listener: addEventListener('click', handleBackgroundClick)
// Event Handler: handleBackgroundClick
backgroundButton.addEventListener('click', handleBackgroundClick);

// --- Reset Button: Click Event ---
// Event Source: resetButton
// Event Listener: addEventListener('click', handleResetClick)
// Event Handler: handleResetClick
resetButton.addEventListener('click', handleResetClick);

// --- Name Input: Input Event ---
// Event Source: nameInput
// Event Listener: addEventListener('input', handleNameInput)
// Event Handler: handleNameInput
nameInput.addEventListener('input', handleNameInput);

// --- All Buttons: Mouseover Event ---
// Event Source: greetingButton, backgroundButton, resetButton
// Event Listener: addEventListener('mouseover', handleButtonMouseover)
// Event Handler: handleButtonMouseover
// This demonstrates attaching the same handler to multiple event sources
greetingButton.addEventListener('mouseover', handleButtonMouseover);
backgroundButton.addEventListener('mouseover', handleButtonMouseover);
resetButton.addEventListener('mouseover', handleButtonMouseover);

// ============================================
// INITIALIZATION & DEBUGGING
// ============================================

/**
 * Log a message to confirm that the script has loaded successfully.
 * This helps verify that the external JavaScript file is correctly linked.
 */
console.log('✅ Script loaded successfully!');
console.log('📌 Event-driven webpage is ready for interaction.');
console.log('ℹ️  Try: typing, clicking buttons, or hovering over them.');

// ============================================
// ADDITIONAL FEATURE: Keyboard Support (Extra)
// ============================================

/**
 * Allow pressing the Enter key in the input field to trigger the greeting.
 * This is a bonus usability enhancement.
 */
nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('[Keyboard] Enter key pressed - triggering greeting');
        greetingButton.click();
    }
});

// ============================================
// END OF SCRIPT
// ============================================