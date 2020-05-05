let canvas, pen;
canvas = document.getElementById('myCanvas');
pen = canvas.getContext('2d');
pen.lineWidth = 1;
pen.strokeStyle = "blue";
let mousePress = false;
let last = null;

function pos(event) {
    let ex, ey;
    ex = event.clientX;
    ey = event.clientY;
    return {
        x: ex,
        y: ey
    };
}

function start(event){
    mousePress = true;
}

function draw(event) {
    if(!mousePress) return;
    let xy = pos(event);
    if(last != null){
        pen.beginPath();
        pen.moveTo(last.x, last.y);
        pen.lineTo(xy.x, xy.y);
        pen.stroke();
    }
    last = xy;
}

function finish(event) {
    mousePress = false;
    last = null;
}

canvas.onmousedown = start;
canvas.onmousemove = draw;
canvas.onmouseup = finish;

