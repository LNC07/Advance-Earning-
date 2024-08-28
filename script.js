// Show Registration Form
document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
});

// Show Login Form
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Back to Initial Buttons from Registration
document.getElementById('back-to-initial').addEventListener('click', function() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('initial-buttons').style.display = 'block';
});

// Registration Form Submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('balance', 0);
    alert('Account created successfully!');
    window.location.href = "webapp.html"; // Update with the actual path if different
});

// Login Form Submission
document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    if(localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
        showDashboard(email);
    } else {
        alert('Invalid credentials!');
    }
});

// Show Dashboard
function showDashboard(email) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('user-email').innerText = email;
    document.getElementById('balance').innerText = localStorage.getItem('balance');
}

// Withdrawal Button Click
document.getElementById('withdraw-btn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('withdrawal-page').style.display = 'block';
});

// Back to Dashboard from Withdrawal
document.getElementById('back-to-dashboard-from-withdrawal').addEventListener('click', function() {
    document.getElementById('withdrawal-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Withdrawal Form Submission
document.getElementById('withdrawal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const method = document.getElementById('payment-method').value;
    const accountInfo = document.getElementById('account-info').value;
    alert(`Withdrawal request submitted for ${method} to account: ${accountInfo}`);
    document.getElementById('withdrawal-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Task Button Click
document.getElementById('task-btn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('task-page').style.display = 'block';
});

// Back to Dashboard from Task Page
document.getElementById('back-to-dashboard-from-task').addEventListener('click', function() {
    document.getElementById('task-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Video Earning Button Click
document.getElementById('video-earning-btn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('video-earning-page').style.display = 'block';
});

// Back to Dashboard from Video Earning Page
document.getElementById('back-to-dashboard-from-video-earning').addEventListener('click', function() {
    document.getElementById('video-earning-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Daily Task Button Click
document.getElementById('daily-task-btn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('daily-task-page').style.display = 'block';
});

// Back to Dashboard from Daily Task Page
document.getElementById('back-to-dashboard-from-daily-task').addEventListener('click', function() {
    document.getElementById('daily-task-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});
