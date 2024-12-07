"use strict";
let raees1 = document.getElementById("toggle");
let khuzaima1 = document.getElementById('line3sd2');
raees1.addEventListener('click', () => {
    if (khuzaima1.style.display === 'none') {
        khuzaima1.style.display = 'block';
    }
    else {
        khuzaima1.style.display = 'none';
    }
});
