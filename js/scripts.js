$(document).ready(function() {
    //Progress Bar
    let container = document.getElementById("circle");

    let circle = new ProgressBar.Circle(container, {
        color: '#333',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#FFF' },
        to: { color: '#333' },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 68);

            circle.setText(value);
        }
    });

    circle.animate(1.0);

});