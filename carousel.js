//object
const deck = document.querySelector('#carousel-deck');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nxtBtn = document.querySelector('#nxtBtn');

//position start
let pos = 677;
const size = document.querySelectorAll('.slides')[0].clientWidth;

//button listeners

nxtBtn.addEventListener('click',()=> {
    pos = pos + size;
});

prevBtn.addEventListener('click',()=> {
    pos = pos - size;
    console.log(pos);
});

//carousel automatic sliding

let carouselAnimate = setInterval(left, 40);

function left() {
    if (pos > 3576) {
        pos = pos - 3576;
    } else if (pos <= 0) {
        pos = pos + 3576;
    } else {
        pos++;
        deck.style.transform = 'translateX(' + (-pos / 16) + 'rem)';
    }
}

// carousel stop & go

deck.addEventListener('mouseenter',()=> {
    clearInterval(carouselAnimate);
});

deck.addEventListener('mouseleave',()=> {
    setInterval(left, 50);
});


//img animations

const imgs = document.getElementsByClassName('picture-box').length;

for (let i = 0; i < imgs; i++) {
    document.getElementsByClassName('picture-box')[i].addEventListener('mouseleave', function() {
        let canvas = this;
        canvas.classList.add('moused');
        setTimeout(function(){
            canvas.classList.remove('moused');
        }, 2000);
    });
}

