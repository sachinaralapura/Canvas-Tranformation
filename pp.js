var Canvas = document.getElementById("canvas");
var canvas = Canvas;
canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 300;
var context;
var scale = 1;
canvas.addEventListener("wheel", function (event) {
    event.preventDefault();
    if (context === undefined) {
        return;
    }
    Scale(Math.min(Math.max(event.deltaY * -0.01, 0.1), 10));
});
context = canvas.getContext("2d");
context.save();
function DrawSqure(scale) {
    if (scale === void 0) { scale = 1; }
    // Set the fill color to blue
    context.fillStyle = 'blue';
    // Draw the square
    context.fillRect(50, 50, 100, 100);
}
function DrawImage() {
    context.imageSmoothingEnabled = false;
    var image = new Image();
    image.onload = function () {
        context.drawImage(image, 0, 0);
    };
    image.src = "cat.jpg";
}
function ScaleUp() {
    // context.scale(2, 2);
    Scale(1.1);
}
function Scale(x) {
    scale *= x;
    context.clearRect(0, 0, canvas.width * scale, canvas.height * scale);
    context.scale(scale, scale);
    // context.translate(-(canvas.width * scale - canvas.width), - (canvas.height * scale - canvas.height))
    DrawSqure(scale);
}
function ScaleDown() {
    // context.scale(0.5, 0.5)
    Scale(0.9);
}
function RotateCW() {
    context.rotate(10 * (Math.PI / 180));
}
function RotateCCW() {
    context.rotate(-10 * (Math.PI / 180));
}
function TranslateX() {
    context.translate(50, 0);
}
function TranslateY() {
    context.translate(0, 50);
}
function TranslateXY() {
    context.translate(50, 50);
}
function Clear() {
    context.reset();
    context.restore();
    // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
function DrawCoord(event) {
    context.globalCompositeOperation = "destination-over";
    context.save();
    context.fillStyle = 'green';
    context.lineWidth = 1.0;
    for (var i = 0; i < 1000; i += 10) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, 1000);
        context.stroke();
    }
    for (var j = 0; j < 1000; j += 10) {
        context.beginPath();
        context.moveTo(0, j);
        context.lineTo(1000, j);
        context.stroke();
    }
}
