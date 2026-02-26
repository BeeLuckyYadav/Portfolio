// Landing Page se Main Content par jaane ka transition
document.getElementById('enter-btn').addEventListener('click', function() {
    const landingView = document.getElementById('landing-view');
    const mainView = document.getElementById('main-view');

    // Landing page ko fade out karna
    landingView.style.opacity = '0';
    landingView.style.visibility = 'hidden';

    // Thoda wait karke main content ko show karna
    setTimeout(() => {
        landingView.style.display = 'none'; 
        mainView.style.display = 'block';   
        
        setTimeout(() => {
            mainView.style.opacity = '1';
            window.scrollTo(0, 0); 
        }, 50);
        
    }, 800); 
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

