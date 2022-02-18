// Hover animation 

var buttonEl = document.querySelectorAll('.hovered');

function animateButton(el, scale, duration, elasticity) {
    anime.remove(el);

    anime({
    targets: el,
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    
});
}

function enterButton(el) {
    animateButton(el, 1.065, 1000, 400) 
};
function leaveButton(el) {
    animateButton(el, 1.0, 600, 300) 
};

for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener('mouseenter', function(e) {
        enterButton(e.target);
    }, false);

    buttonEl[i].addEventListener('mouseleave', function(e) {
        leaveButton(e.target)
    }, false);
}

//End hover animation

//Open external links 

function neumorphic() {
    window.open('https://codepen.io/jerryv45/full/NWvygPw');
}

function banana() {
    window.open('https://codepen.io/jerryv45/full/BadxbdL');
}

function galaxy() {
    window.open('https://annysflowersla.com');
}

function github() {
    window.open('https://github.com/jerryv45');
}

function codepen() {
    window.open('https://codepen.io/jerryv45');
}

function linkedin() {
    window.open('https://www.linkedin.com/in/jerry-velasquez-7276871b9/');
}

//End external links

