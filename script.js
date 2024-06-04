let currentColorIndex = 0;
const TEN_SECONDS = 10000;
const colors = ['btn-danger', 'btn-warning', 'btn-success'];
function changeColor() {
    const button = document.getElementById('TrafficLightButton');
    button.classList.remove(colors[currentColorIndex]);
    if (currentColorIndex === 2) {
        currentColorIndex = -1;
    }
    ++currentColorIndex;
    button.classList.add(colors[currentColorIndex]);
}
setInterval(changeColor, TEN_SECONDS);