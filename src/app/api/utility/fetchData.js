export async function getUser() {
    // Send registration data to the server
    const response = await fetch('/api/registration', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    // Handle the response, display success or error messages, and redirect
};