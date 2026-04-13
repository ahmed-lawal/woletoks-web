document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.menu-overlay');

    const toggleMenu = () => {
        mobileBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if(navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    if(mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }
    if(overlay) {
        overlay.addEventListener('click', toggleMenu);
    }
    
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- Dynamic WhatsApp Order Buttons ---
    const waButtons = document.querySelectorAll('.wa-order-btn');
    const waPhoneNumber = '2348086992128';

    waButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-product');
            const productPrice = e.target.getAttribute('data-price');
            
            // Format message
            const message = `Hello Woletoks Ventures! I'm interested in ordering the ${productName} priced at ${productPrice}. Is it currently available?`;
            
            // Redirect to wa.me
            const waUrl = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        });
    });

    // --- Sticky Navbar Background on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    });
});
