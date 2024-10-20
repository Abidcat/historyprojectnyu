// Smooth scrolling for navigation buttons
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Ripple effect for all buttons (navigation and back buttons)
const buttons = document.querySelectorAll('.nav-btn, .back-btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Get the x and y coordinates where the user clicked relative to the button
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        // Create the ripple effect element
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        // Append the ripple to the button
        this.appendChild(ripple);

        // Remove the ripple effect after 600ms to keep it clean
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
