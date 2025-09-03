// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Skills Navigation
    const skillsGrid = document.querySelector('.skills-grid');
    const skillPrevBtn = document.querySelector('.skills-section .prev-btn');
    const skillNextBtn = document.querySelector('.skills-section .next-btn');
    
    if (skillsGrid && skillPrevBtn && skillNextBtn) {
        // Calculate scroll amount based on card width + gap
        const scrollAmount = 320; // Adjust this value based on your card width + gap
        
        // Handle next button click
        skillNextBtn.addEventListener('click', () => {
            skillsGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            updateSkillButtons();
        });
        
        // Handle previous button click
        skillPrevBtn.addEventListener('click', () => {
            skillsGrid.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            updateSkillButtons();
        });
        
        // Update button states
        function updateSkillButtons() {
            skillPrevBtn.style.opacity = 
                skillsGrid.scrollLeft <= 0 ? '0.5' : '1';
            skillNextBtn.style.opacity = 
                skillsGrid.scrollLeft >= (skillsGrid.scrollWidth - skillsGrid.clientWidth) 
                ? '0.5' : '1';
        }
        
        // Initial button state
        updateSkillButtons();
        
        // Update on scroll
        skillsGrid.addEventListener('scroll', updateSkillButtons);
    }

    // Projects Navigation
    const projectsSlider = document.querySelector('.projects-slider');
    const projectPrevBtn = document.querySelector('.projects-section .prev-btn');
    const projectNextBtn = document.querySelector('.projects-section .next-btn');
    
    if (projectsSlider && projectPrevBtn && projectNextBtn) {
        // Handle next button click
        projectNextBtn.addEventListener('click', () => {
            projectsSlider.scrollBy({
                left: projectsSlider.offsetWidth,
                behavior: 'smooth'
            });
            updateProjectButtons();
        });
        
        // Handle previous button click
        projectPrevBtn.addEventListener('click', () => {
            projectsSlider.scrollBy({
                left: -projectsSlider.offsetWidth,
                behavior: 'smooth'
            });
            updateProjectButtons();
        });
        
        // Update button states
        function updateProjectButtons() {
            projectPrevBtn.style.opacity = 
                projectsSlider.scrollLeft <= 0 ? '0.5' : '1';
            projectNextBtn.style.opacity = 
                projectsSlider.scrollLeft >= (projectsSlider.scrollWidth - projectsSlider.clientWidth) 
                ? '0.5' : '1';
        }
        
        // Initial button state
        updateProjectButtons();
        
        // Update on scroll
        projectsSlider.addEventListener('scroll', updateProjectButtons);
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
});

