const toggleButton = document.getElementById('toggle-dark-mode');

// Check for saved user preference, if any, on page load
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = "Toggle Light Mode";
    localStorage.setItem('darkMode', 'enabled'); // Save user preference in local storage
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = "Toggle Dark Mode";
    localStorage.setItem('darkMode', 'disabled'); // Save user preference in local storage
}

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode(); // Switch to dark mode
    } else {
        disableDarkMode(); // Switch to light mode
    }
});
