
// =====join master
// =====join master
window.addEventListener('DOMContentLoaded', () => {
    const joinMaster = document.querySelector('#joinMaster'); 
    const join = document.querySelector('#join');
    const closeMenu = document.querySelector('#closeMenu');

    joinMaster.addEventListener('click', () => {
        join.classList.remove('hidden');
    })

    closeMenu.addEventListener('click', () => {
        join.classList.add('hidden')
    })
})


// =====joinBar
// =====joinBar
window.addEventListener('DOMContentLoaded', () => {
    const joinBar = document.querySelector('#joinBar'); 
    const join1 = document.querySelector('#join1');
    const closeMenu1 = document.querySelector('#closeMenu1');

    joinBar.addEventListener('click', () => {
        join1.classList.remove('hidden');
    })

    closeMenu1.addEventListener('click', () => {
        join1.classList.add('hidden')
    })
})


// =====joinNow
// =====joinNow
window.addEventListener('DOMContentLoaded', () => {
    const joinNow = document.querySelector('#joinNow'); 
    const join2 = document.querySelector('#join2');
    const closeMenu2 = document.querySelector('#closeMenu2');

    joinNow.addEventListener('click', () => {
        join2.classList.remove('hidden');
    })

    closeMenu2.addEventListener('click', () => {
        join2.classList.add('hidden')
    })
})


// =====joinThe
// =====joinThe
window.addEventListener('DOMContentLoaded', () => {
    const joinThe = document.querySelector('#joinThe'); 
    const join3 = document.querySelector('#join3');
    const closeMenu3 = document.querySelector('#closeMenu3');

    joinThe.addEventListener('click', () => {
        join3.classList.remove('hidden');
    })

    closeMenu3.addEventListener('click', () => {
        join3.classList.add('hidden')
    })
})


// =====joinSo
// =====joinSo
window.addEventListener('DOMContentLoaded', () => {
    const joinSo = document.querySelector('#joinSo'); 
    const join4 = document.querySelector('#join4');
    const closeMenu4 = document.querySelector('#closeMenu4');

    joinSo.addEventListener('click', () => {
        join4.classList.remove('hidden');
    })

    closeMenu4.addEventListener('click', () => {
        join4.classList.add('hidden')
    })
})


// =====Resister
// =====Resister
window.addEventListener('DOMContentLoaded', () => {
    const register = document.querySelector('#register'); 
    const join5 = document.querySelector('#join5');
    const closeMenu5 = document.querySelector('#closeMenu5');

    register.addEventListener('click', () => {
        join5.classList.remove('hidden');
    })

    closeMenu5.addEventListener('click', () => {
        join5.classList.add('hidden')
    })
})


// =====Popup
// =====Popup
window.addEventListener('DOMContentLoaded', () => {
    const popUp = document.querySelector('#popUp'); 
    const toolTip = document.querySelector('#toolTip');

    popUp.addEventListener('mouseenter', () => {
        toolTip.classList.remove('hidden');
    })

    popUp.addEventListener('mouseleave', () => {
        toolTip.classList.add('hidden');
    })
})




// =======Slider
// =======Slider
let slideBar = document.querySelector('#slideBar');
let slider = document.querySelector('#slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 2;
if(document.body.clientWidth<1280){
    elementsToShow = 1;
}

let sliderContainerWidth = slideBar.clientWidth;

let cardWidth = sliderContainerWidth/elementsToShow;

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth+'px';   
}

function prev(){
    if(+slider.style.marginLeft.slice(0,-2) != -cardWidth * (cards.length - elementsToShow))
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px'; //100px
}

function next(){
    if(+slider.style.marginLeft.slice(0,-2) !=0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px'; //100px
}


