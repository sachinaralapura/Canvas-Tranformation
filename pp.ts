var Canvas: HTMLElement | null = document.getElementById("canvas") as HTMLCanvasElement
var canvas: HTMLCanvasElement = Canvas as HTMLCanvasElement;
canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 300;
var context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D



function DrawSqure(scale: number = 1): void {
    context.fillStyle = 'blue';
    context.fillRect(50, 50, 100, 100);
}

function DrawImage() {
    context.imageSmoothingEnabled = false;
    var image: HTMLImageElement = new Image();
    image.onload = function () {
        context.drawImage(image, 0, 0)
    }
    image.src = "cat.jpg"

}

function ScaleUp() {
    context.scale(2, 2);
}


function ScaleDown() {
    context.scale(0.5, 0.5)
}

function RotateCW() {
    context.rotate(10 * (Math.PI / 180))
}
function RotateCCW() {
    context.rotate(-10 * (Math.PI / 180))
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

function DrawCoord(event: MouseEvent) {

    context.globalCompositeOperation = "destination-over";
    context.save();
    context.fillStyle = 'green';
    context.lineWidth = 1.0;

    for (let i = 0; i < 1000; i += 10) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, 1000);
        context.stroke();
    }
    for (let j = 0; j < 1000; j += 10) {
        context.beginPath();
        context.moveTo(0, j);
        context.lineTo(1000, j);
        context.stroke();
    }
}

