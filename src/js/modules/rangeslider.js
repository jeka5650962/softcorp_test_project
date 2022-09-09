export function rangeSlider() {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("rangeValue");

    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    };

    slider.addEventListener("mousemove", function () {
        let x = slider.value;
        slider.style.background = 'linear-gradient(90deg, rgb(62, 156, 220) ' + x + '%, rgb(189, 189, 192) ' + x + '%)';
    });
}