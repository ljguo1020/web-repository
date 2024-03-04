const box = document.querySelector('.box');

let position = {
    x: 0,
    y: 0
}

let step = 100;

document.addEventListener('keyup', (key) => {

    if(key.key == 'ArrowUp') {
        //     transform: translateY(-20px);
        box.style.setProperty('transform', `translate(${position.x}px ,${position.y -= step}px)`);
    } else if (key.key == 'ArrowDown') {
        box.style.setProperty('transform', `translate(${position.x}px, ${position.y += step}px)`);
    } else if (key.key == 'ArrowRight') {
        box.style.setProperty('transform', `translate(${position.x += step}px, ${position.y}px)`);
    } else if (key.key == 'ArrowLeft') {
        box.style.setProperty('transform', `translate(${position.x -= step}px, ${position.y}px)`);
    }
})