let total = 0;

function cart() {

    total++;

    document.getElementById('all').innerText = total;
}
function restart() {
    total = 0

    document.getElementById('all').innerText = total;
}


const container = document.getElementById('myScroll');

    container.addEventListener('mouseenter', () => {
        container.focus();
    });

    container.addEventListener('mouseleave', () => {
    container.blur();
});
