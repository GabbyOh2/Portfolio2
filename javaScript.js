document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('status').textContent = 'Thank you for your message!';
    } else {
        document.getElementById('status').textContent = 'Please fill in all fields.';
    }
});
