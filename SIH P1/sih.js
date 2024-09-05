function playVideo() {
    var videoFrame = document.getElementById('youtube-video');
    var currentSrc = videoFrame.src;
    if (!currentSrc.includes("?autoplay=1")) {
        videoFrame.src += "?autoplay=1"; // Append autoplay parameter to URL
    }
}


// Function to open login modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Function to open signup modal
function openSignupModal() {
    document.getElementById("signupModal").style.display = "block";
    document.getElementById("loginModal").style.display = "none";
}

// Function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Function to handle signup
function handleSignup(event) {
    event.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const benchCode = document.getElementById('bench-code').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Name validation
    if (!username) {
        alert('Please enter a valid name.');
        return;
    }

    // Bench code validation
    if (!isValidBenchCode(benchCode)) {
        alert('Bench Code should only contain alphabets and numbers.');
        return;
    }

    // Password validation
    if (!isStrongPassword(password)) {
        alert('Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number.');
        return;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Show success message
    alert('Sign up successful!');

    // Optionally close the modal and reset the form
    closeModal('signupModal');
    document.querySelector('#signupModal form').reset();
}

// Function to check if the password is strong
function isStrongPassword(password) {
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return strongPasswordPattern.test(password);
}

// Function to check if the bench code is valid
function isValidBenchCode(benchCode) {
    const benchCodePattern = /^[A-Za-z0-9]+$/;
    return benchCodePattern.test(benchCode);
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    var loginModal = document.getElementById("loginModal");
    var signupModal = document.getElementById("signupModal");
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}

function showImage(type) {
    var imageContainer = document.getElementById("image-display");
    if (type === 'officer') {
        imageContainer.innerHTML = `
            <div class="circular-image">
                <img src="pm_image.jpg" alt="Prime Minister">
                <p>Hon'ble Prime Minister of India</p>
            </div>`;
    } else if (type === 'executive') {
        imageContainer.innerHTML = `
            <div class="circular-image">
                <img src="agency_executive.jpg" alt="Agency Executive">
                <p>Agency Executive</p>
            </div>`;
    }
}

document.getElementById('electedButton').addEventListener('click', function() {
    document.getElementById('primeMinisterItem').style.display = 'flex';
    document.getElementById('agencyExecutiveItem').style.display = 'none';
});

document.getElementById('executiveButton').addEventListener('click', function() {
    document.getElementById('primeMinisterItem').style.display = 'none';
    document.getElementById('agencyExecutiveItem').style.display = 'flex';
});
  