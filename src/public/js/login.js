const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert("Failed to login - please verify your username and password.");
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#signup-first').value.trim();
    const lastName = document.querySelector('#signup-last').value.trim();
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (firstName && lastName && username && password) {
        const response = await fetch('/api/auth/', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }a
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
