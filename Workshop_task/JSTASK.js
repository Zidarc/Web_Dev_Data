// Dynamic Date Display
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = currentDate;
}

// Interactive Navigation Menu
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Comment Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    if (!name || !email || !message) {
        errorMessage.textContent = 'Please fill out all fields.';
    } else {
        // Send the form data to your server or perform any other actions here.
        errorMessage.textContent = 'Form submitted successfully!';
        contactForm.reset();
    }
});

// Theme Switcher
const themeSwitcher = document.createElement('div');
themeSwitcher.classList.add('theme-switcher');
themeSwitcher.innerHTML = `
    <label for="theme-toggle">Dark Mode</label>
    <input type="checkbox" id="theme-toggle">
`;
document.body.appendChild(themeSwitcher);

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Initialize functions
displayCurrentDate();
