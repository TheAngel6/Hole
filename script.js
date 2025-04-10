const mouseGlow = document.getElementById('mouse-glow');
const quoteText = document.querySelector('.quote-text'); 

document.addEventListener('mousemove', (event) => {
    window.requestAnimationFrame(() => {
        mouseGlow.style.left = `${event.clientX}px`;
        mouseGlow.style.top = `${event.clientY}px`;
    });

    if (quoteText) {
        const rect = quoteText.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        window.requestAnimationFrame(() => {
            quoteText.style.setProperty('--x', `${x}px`);
            quoteText.style.setProperty('--y', `${y}px`);
        });
    }
});

document.addEventListener('mouseleave', () => {
    mouseGlow.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    mouseGlow.style.opacity = '1';
});

if (!quoteText) {
    console.error("Quote text element not found!");
}