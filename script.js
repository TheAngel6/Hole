const mouseGlow = document.getElementById('mouse-glow');
const poemText = document.querySelector('.poem-text'); 

document.addEventListener('mousemove', (event) => {
    window.requestAnimationFrame(() => {
        mouseGlow.style.left = `${event.clientX}px`;
        mouseGlow.style.top = `${event.clientY}px`;
    });

    if (poemText) {
        const rect = poemText.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        window.requestAnimationFrame(() => {
            poemText.style.setProperty('--x', `${x}px`);
            poemText.style.setProperty('--y', `${y}px`);
        });
    }
});

document.addEventListener('mouseleave', () => {
    mouseGlow.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    mouseGlow.style.opacity = '1';
});

if (!poemText) {
    console.error("Poem text element not found!");
}
