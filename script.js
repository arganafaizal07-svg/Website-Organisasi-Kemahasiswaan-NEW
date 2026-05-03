// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Dropdown Menu Click Handler
const dropdownBtns = document.querySelectorAll('.dropbtn');
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        if (dropdownMenu) {
            dropdownMenu.classList.toggle('active');
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Set active link based on current page
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveLink);

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Gallery lightbox
function openGallery(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    let content = '';
    if (imageSrc.endsWith('.mp4') || imageSrc.endsWith('.webm')) {
        content = `
            <div class="modal-content">
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
                <video width="100%" controls>
                    <source src="${imageSrc}" type="video/mp4">
                </video>
            </div>
        `;
    } else {
        content = `
            <div class="modal-content">
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
                <img src="${imageSrc}" style="width: 100%; border-radius: 10px;">
            </div>
        `;
    }
    
    modal.innerHTML = content;
    document.body.appendChild(modal);
    
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    };
}

// Form validation
function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const npm = document.getElementById('npm').value.trim();
    const prodi = document.getElementById('prodi').value.trim();
    const divisi = document.getElementById('divisi').value.trim();

    if (!nama) {
        alert('Nama tidak boleh kosong');
        return false;
    }

    if (!email.includes('@')) {
        alert('Email tidak valid');
        return false;
    }

    if (!npm) {
        alert('NPM tidak boleh kosong');
        return false;
    }

    if (!prodi) {
        alert('Program Studi tidak boleh dipilih');
        return false;
    }

    if (!divisi) {
        alert('Divisi tidak boleh dipilih');
        return false;
    }

    alert('Pendaftaran berhasil! Terima kasih telah mendaftar di POM FTII UHAMKA. Tim kami akan segera menghubungi Anda untuk proses selanjutnya.');
    return true;
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
