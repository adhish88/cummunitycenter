document.getElementById('contrastToggle').addEventListener('click', function () {
    document.body.classList.toggle('high-contrast');
});

let defaultFontSize = 16;
document.getElementById('increaseText').addEventListener('click', function () {
    defaultFontSize += 2;
    document.body.style.fontSize = defaultFontSize + 'px';
});

document.getElementById('decreaseText').addEventListener('click', function () {
    defaultFontSize -= 2;
    if (defaultFontSize < 10) defaultFontSize = 10; // Prevent text from getting too small
    document.body.style.fontSize = defaultFontSize + 'px';
});

document.getElementById('resetText').addEventListener('click', function () {
    defaultFontSize = 16;
    document.body.style.fontSize = defaultFontSize + 'px';
});
