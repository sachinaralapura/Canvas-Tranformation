var Canvas = document.getElementById("canvas");
var canvas = Canvas;
var Context = canvas.getContext("2d");
Context.save();
function DrawSqure() {
    // Set the fill color to blue
    Context.fillStyle = 'blue';
    // Draw the square
    Context.fillRect(0, 0, 100, 100);
}
function DrawImage() {
    Context.imageSmoothingEnabled = false;
    var image = new Image();
    image.src = "cat.jpg";
    Context.drawImage(image, 0, 0);
}
function ScaleUp() {
    Context.scale(2, 2);
}
function ScaleDown() {
    Context.scale(0.5, 0.5);
}
function RotateCW() {
    Context.rotate(10 * (Math.PI / 180));
}
function RotateCCW() {
    Context.rotate(-10 * (Math.PI / 180));
}
function TranslateX() {
    Context.translate(50, 0);
}
function TranslateY() {
    Context.translate(0, 50);
}
function TranslateXY() {
    Context.translate(50, 50);
}
function Clear() {
    Context.reset();
    Context.restore();
    // Context.clearRect(0, 0, Context.canvas.width, Context.canvas.height);
}
function DrawCoord(event) {
    Context.globalCompositeOperation = "destination-over";
    Context.save();
    Context.fillStyle = 'green';
    Context.lineWidth = 1.0;
    for (var i = 0; i < 1000; i += 10) {
        Context.beginPath();
        Context.moveTo(i, 0);
        Context.lineTo(i, 1000);
        Context.stroke();
    }
    for (var j = 0; j < 1000; j += 10) {
        Context.beginPath();
        Context.moveTo(0, j);
        Context.lineTo(1000, j);
        Context.stroke();
    }
}
