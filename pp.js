var Canvas = document.getElementById("canvas");
var canvas = Canvas;
var Context = canvas.getContext("2d");
Context.save();
function DrawSqure() {
    // Set the fill color to blue
    Context.fillStyle = 'blue';
    // Draw the square
    Context.fillRect(50, 50, 100, 100);
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
    Context.restore();
    Context.clearRect(0, 0, Context.canvas.width, Context.canvas.height);
}
