 // ========== Mobile Navigation Toggle ==========
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// ========== Sticky Header on Scroll ==========
window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');

  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  // Show/hide Back to Top button
  backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
};

// ========== Form Submission with Basic Validation ==========
document.querySelector('.contact form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputs = this.querySelectorAll('input');
  const textarea = this.querySelector('textarea');

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const phone = inputs[2].value.trim();
  const subject = inputs[3].value.trim();
  const message = textarea.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields: Name, Email, and Message');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  console.log('Form submitted:', { name, email, phone, subject, message });
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, null, targetId);
    }
  });
});

// ========== Testimonial Auto-Rotation ==========
const testimonials = document.querySelectorAll('.testimonials .testimonial-box');
let current = 0;

function rotateTestimonials() {
  testimonials.forEach((box, i) => {
    box.style.display = i === current ? 'block' : 'none';
  });
  current = (current + 1) % testimonials.length;
}

if (testimonials.length > 1) {
  rotateTestimonials();
  setInterval(rotateTestimonials, 5000);
}

// ========== Back to Top Button ==========
const backToTopBtn = document.createElement('div');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="sr-only">Back to Top</span>';
document.body.appendChild(backToTopBtn);

backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ========== Inject Back to Top CSS ==========
const styleTag = document.createElement('style');
styleTag.textContent = `
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: var(--highlight-color);
    color: #fff;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .back-to-top:hover {
    background: var(--primary-color);
    transform: scale(1.1);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
document.head.appendChild(styleTag);

// ========== Lazy Load Image Polyfill for Older Browsers ==========
if ('loading' in HTMLImageElement.prototype === false) {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    const src = img.getAttribute('data-src');
    if (src) {
      img.src = src;
    }
  });
}

// ========== Preloader Spinner Fadeout ==========
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = 0;
    preloader.style.visibility = 'hidden';
    preloader.style.transition = 'opacity 0.3s ease';
    setTimeout(() => preloader.remove(), 500);
  }
});

// ========== Admin Login Logic ==========
document.getElementById('adminLoginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value.trim();
    const message = document.getElementById('login-message');
  
    // Temporary hardcoded credentials (change or link to backend later)
    const adminUser = 'admin';
    const adminPass = 'bhiteq123';
  
    if (username === adminUser && password === adminPass) {
      message.style.color = 'green';
      message.textContent = 'Login successful! Redirecting...';
  
      // Redirect or show admin section (just an example)
      setTimeout(() => {
        window.location.href = 'admin-dashboard.html'; // Replace with actual admin page
      }, 1500);
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid username or password';
    }
  });
  
  function logout() {
    alert("You have been logged out.");
    window.location.href = "index.html";
  }
  
  // ========== Admin Login Verification ==========
document.querySelector('#adminLoginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value.trim();
    const errorDisplay = document.getElementById('loginError');
  
    // Hardcoded credentials (you can replace this with a backend connection later)
    const adminUser = "admin";
    const adminPass = "bhiteq123";
  
    if (username === adminUser && password === adminPass) {
      localStorage.setItem("isAdmin", "true"); // Optionally store login status
      window.location.href = "admin-dashboard.html";
    } else {
      errorDisplay.textContent = "Invalid username or password.";
    }
  });
  