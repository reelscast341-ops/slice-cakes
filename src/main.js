// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-[#1a0f0a]/90', 'backdrop-blur-md', 'shadow-lg');
    navbar.classList.remove('bg-transparent', 'py-6');
    navbar.classList.add('py-4');
  } else {
    navbar.classList.remove('bg-[#1a0f0a]/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
    navbar.classList.add('bg-transparent', 'py-6');
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
}

// Order Modal Logic
const orderModal = document.getElementById('order-modal');
const orderForm = document.getElementById('order-form');
const orderSuccess = document.getElementById('order-success');
const orderCakeName = document.getElementById('order-cake-name');
const orderPrice = document.getElementById('order-price');
const confirmBtn = document.getElementById('confirm-btn');

window.openOrderModal = function(cake, price) {
  if (orderModal) {
    orderCakeName.textContent = cake;
    orderPrice.textContent = price;
    confirmBtn.textContent = `Confirm Order - Rs. ${price}`;
    orderModal.classList.remove('hidden');
    orderModal.classList.add('flex');
    orderForm.classList.remove('hidden');
    orderSuccess.classList.add('hidden');
  }
}

window.closeOrderModal = function() {
  if (orderModal) {
    orderModal.classList.add('hidden');
    orderModal.classList.remove('flex');
  }
}

if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    orderForm.classList.add('hidden');
    orderSuccess.classList.remove('hidden');
    setTimeout(() => {
      window.closeOrderModal();
    }, 3000);
  });
}

// Highlight active nav link based on current path
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('nav a, #mobile-menu a');
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '/' && href === '/index.html')) {
    link.classList.remove('text-gray-300');
    link.classList.add('text-amber-400');
  }
});
