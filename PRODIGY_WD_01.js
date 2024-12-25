// JavaScript for scroll effect and interactivity
window.onscroll = function() {
    changeNavbarStyle();
};

function changeNavbarStyle() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// Add hover effect to navigation items
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.color = '#e74c3c';
    });
    item.addEventListener('mouseleave', function() {
        item.style.color = 'white';
    });
});

// Smooth scrolling for internal links (same page)
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70, // offset to account for fixed navbar
            behavior: 'smooth'
        });
    });
});
