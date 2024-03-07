const processElement = document.querySelector('.process');

window.addEventListener('scroll', () => {
    const height = document.body.scrollHeight;
    const innerHeight = window.innerHeight;
    const position = window.scrollY;
    let process = position / (height - innerHeight);
    if (process < 0) {
        process = 0;
    } else if (process > 1) {
        process = 1;
    }
    const innerWidth = window.innerWidth;
    processElement.style.width = `${innerWidth * process}px`;
});

processElement.addEventListener('click', (e) => {
    let process = e.clientX / window.innerWidth;
    if (process < 0) {
        process = 0;
    } else if (process > 1) {
        process = 1;
    }
    const height = document.body.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollY = process * (height - innerHeight);
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth'
    });
});