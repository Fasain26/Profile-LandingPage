//Get the button
let backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

document.addEventListener("DOMContentLoaded", function() {
    const changingText = document.querySelector('.changing-text');
    const phrases = [
        'Junior Data Analys',
        'Computer Science Student',
        'Passionate Learner',
        'Programmer'
        
    ];

    phrases.forEach((phrase, index) => {
        const span = document.createElement('span');
        span.textContent = phrase;
        span.style.animationDelay = `${index * 2}s`; // Delay each phrase
        changingText.appendChild(span);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector('.slider input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true; // Slider mulai di posisi 'moon'
    } else {
        document.body.classList.remove('dark-mode');
        toggleSwitch.checked = false;
    }
});





