const menuT = document.querySelector('.menu-toggle');
const NavL = document.querySelector('.nav-links');
menuT.addEventListener('click',() =>{
    menuT.classList.toggle('active');
    NavL.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link =>{
    link.addEventListener('click', () =>{
        menuT.classList.remove('active');
        NavL.classList.remove('open');
    })
});



// skill-section


const skillCards = document.querySelectorAll('.skill-card');

    // Function to reveal skill cards
    const revealSkillCards = () => {
        skillCards.forEach((card, index) => {
            card.classList.add('reveal');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    };

    // Function to reset skill cards (remove animation classes)
    const resetSkillCards = () => {
        skillCards.forEach(card => {
            card.classList.remove('reveal');
            card.style.transitionDelay = '0s';
        });
    };

    // Intersection Observer to reveal on scroll
    const observer = new IntersectionObserver((entries) => {
        if (entry.target.id === 'skills') {
            if (entry.isIntersecting) {
                revealSkillCards();
            } else {
                resetSkillCards();
            }
        } else if (entry.target.id === 'contact') {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('reveal');
                entry.target.classList.add('hidden');
            }
        }
    
    }, {
        threshold: 0.2
    });

    observer.observe(document.querySelector('#skills'));
    observer.observe(document.querySelector('#contact'));


    // Smooth scroll and reveal on navbar click
    document.querySelectorAll('a[href="#skills"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#skills');
            resetSkillCards(); // reset first
            target.scrollIntoView({ behavior: 'smooth' });

            // Wait for scroll to finish, then reveal
            setTimeout(() => {
                revealSkillCards();
            }, 500);
        });
    });


    document.querySelectorAll('a[href="#contact"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#contact');
            target.classList.remove('reveal'); // reset first
            target.classList.add('hidden');
            target.scrollIntoView({ behavior: 'smooth' });
    
            // Reveal after scroll
            setTimeout(() => {
                target.classList.add('reveal');
                target.classList.remove('hidden');
            }, 500);
        });
    });
    


    