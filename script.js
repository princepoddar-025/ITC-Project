/** 
* Semester 1 B.Tech CS Group Project #47: Online Course Landing Page 
* Group ID: Group 19 
* Members: Prince Poddar, Manish Kumar, Priya Davare 
* Technology: Vanilla JavaScript (ES6+) 
*/
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // Initialize All Interactive Features 
    initAccordion();
    initFormValidation();
    initSmoothScrolling();
});
/* 
========================================================================== 
  1. CURRICULUM ACCORDION INTERACTIVITY 
========================================================================== 
*/
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header'); 
    accordionHeaders.forEach(header => { 
        header.addEventListener('click', function () { 
            const currentItem = this.parentElement; 
            const currentContent = this.nextElementSibling; 
            const isOpen = currentItem.classList.contains('active'); 
            // Option: Close all other open accordion items (Single Expansion) 
            document.querySelectorAll('.accordion-item').forEach(item => { 
                if (item !== currentItem) { 
                    item.classList.remove('active'); 
                    const content = item.querySelector('.accordion-content'); 
                    const btn = item.querySelector('.accordion-header'); 
                    if (content) content.style.maxHeight = null; 
                    if (btn) btn.setAttribute('aria-expanded', 'false'); 
                } 
            }); 
            // Toggle active state for clicked item 
            if (!isOpen) { 
                currentItem.classList.add('active'); 
                this.setAttribute('aria-expanded', 'true'); 
                currentContent.style.maxHeight = currentContent
                .scrollHeight + "px"; 
            } else { 
                currentItem.classList.remove('active'); 
                this.setAttribute('aria-expanded', 'false'); 
                currentContent.style.maxHeight = null; 
            } 
        }); 
    }); 
} 
/* 
========================================================================== 
   2. CLIENT-SIDE FORM VALIDATION LOGIC 
========================================================================== 
*/ 
function initFormValidation() { 
    const form = document.getElementById('enrollmentForm'); 
    const modal = document.getElementById('successModal'); 
    const closeModalBtn = document.getElementById('closeModalBtn'); 
    
    if (!form) return; 
    // Real-time input listener to clear error highlight when typing 
    const inputs = form.querySelectorAll('.form-control'); 
    inputs.forEach(input => { 
        input.addEventListener('input', () => { 
            clearFieldError(input); 
        }); 
    }); 

    // Form Submission Event Listener 
    form.addEventListener('submit', function (event) { 
        event.preventDefault(); // Prevent standard HTTP page refresh 
        
        let isValid = true; 
        // 1. Full Name Validation (Required, min 3 chars) 
        const fullName = document.getElementById('fullName'); 
        if (fullName.value.trim() === '') { 
            showFieldError(fullName, 'Full Name is required.'); 
            isValid = false;
        } else if (fullName.value.trim().length < 3) { 
            showFieldError(fullName, 'Name must be at least 3 characters.'); 
            isValid = false; 
        } else { 
            showFieldSuccess(fullName); 
        } 
        // 2. Email Address Validation (Required & Pattern matching) 
        const email = document.getElementById('email'); 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/; 
        if (email.value.trim() === '') { 
            showFieldError(email, 'Email address is required.'); 
            isValid = false;
         } else if (!emailRegex.test(email.value.trim())) { 
            showFieldError(email, 'Please enter a valid email address (e.g., name@domain.com).'); 
        isValid = false; 
    } else { 
        showFieldSuccess(email); 
    } 
    // 3. Phone Number Validation (Required &amp; 10 Digits Numeric) 
    const phone = document.getElementById('phone'); 
    const phoneRegex = /^[0-9]{10}\\$/; 
    if (phone.value.trim() === '') { 
        showFieldError(phone, 'Phone number is required.'); 
        isValid = false; 
    } else if (!phoneRegex.test(phone.value.trim())) { 
        showFieldError(phone, 'Please enter a valid 10-digit phone number.'); 
        isValid = false; 
    } else { 
        showFieldSuccess(phone); 
    } 
    // 4. Skill Level Dropdown Validation 
    const skillLevel = document.getElementById('skillLevel'); 
    if (skillLevel.value === '') { 
        showFieldError(skillLevel, 'Please select your current coding skill level.'); 
        isValid = false; 
    } else { 
        showFieldSuccess(skillLevel); 
    } 
    // 5. Preferred Batch Select Validation 
    const batchPlan = document.getElementById('batchPlan'); 
    if (batchPlan.value === '') { 
        showFieldError(batchPlan, 'Please select a preferred batch schedule.'); 
        isValid = false; 
    } else { 
        showFieldSuccess(batchPlan); 
    } 
    
    // If all fields pass validation 
    if (isValid) { 
        // Update Modal Welcome Text dynamically 
        const modalText = document.getElementById('modalText'); 
        if (modalText) { modalText.textContent = `Thank you, 
${fullName.value.trim()}! Your registration for the 
${batchPlan.options[batchPlan.selectedIndex].text} has been confirmed. 
Welcome to TechSkill Academy!`; 
            } 
            // Display Success Modal 
            openModal(modal); 
             
            // Reset Form Fields and clear validation classes 
            form.reset(); 
            inputs.forEach(input => { 
                input.classList.remove('is-valid', 'is-invalid'); 
            }); 
        } 
    }); 
    // Modal Close Listeners 
    if (closeModalBtn && modal) { 
        closeModalBtn.addEventListener('click', () => closeModal(modal)); 
        
        // Close on clicking overlay background 
        modal.addEventListener('click', (e) => { 
            if (e.target === modal) closeModal(modal);
        });
        // Close on Escape Key 
        document.addEventListener('keydown', (e) => { 
            if (e.key === 'Escape' && modal.classList.contains('active')) { 
                closeModal(modal); 
            } 
        }); 
    } 
} /* Helper Functions for Form UI State */ 
function showFieldError(element, message) { 
    element.classList.add('is-invalid'); 
    element.classList.remove('is-valid'); 
    const errorSpan = document.getElementById(element.id + 'Error'); 
    if (errorSpan) { 
        errorSpan.textContent = message; 
    } 
} 
function showFieldSuccess(element) { 
    element.classList.remove('is-invalid'); 
    element.classList.add('is-valid'); 
    const errorSpan = document.getElementById(element.id + 'Error'); 
    if (errorSpan) { 
        errorSpan.textContent = ''; 
    } 
} 
function clearFieldError(element) { 
    element.classList.remove('is-invalid'); 
    const errorSpan = document.getElementById(element.id + 'Error'); 
    if (errorSpan) { 
        errorSpan.textContent = ''; 
    } 
} 
/* Modal Controller Helpers */ 
function openModal(modal) { 
    if (modal) { 
        modal.classList.add('active'); 
        modal.setAttribute('aria-hidden', 'false'); 
    } 
} 
function closeModal(modal) { 
    if (modal) { 
        modal.classList.remove('active'); 
        modal.setAttribute('aria-hidden', 'true'); 
    } 
} 
/* 
========================================================================== 
  3. SMOOTH SCROLL NAVIGATION
========================================================================== 
*/ 
function initSmoothScrolling() { 
    const navLinks = document.querySelectorAll('a[href^="#"]'); 
    
    navLinks.forEach(link => { 
        link.addEventListener('click', function (e) { 
            const targetId = this.getAttribute('href'); 
            if (targetId === '#') return; 
            
            const targetElement = document.querySelector(targetId); 
            if (targetElement) { 
                e.preventDefault(); 
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                }); 
            } 
        }); 
    }); 
}