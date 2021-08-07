const canva = document.getElementById('canva');
const context = canva.getContext('2d');
let isDrawing = false;
let x = 0;
let y = 80;
canva.addEventListener('mousedown', e => {
    x = e.offsetX;
    // y = e.offsetY;
    isDrawing = true;
    console.log(x);
});
canva.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, y);
        x = e.offsetX;
        // y = e.offsetY;
    }
});
canva.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, y);
        x = e.offsetX;
        // y = e.offsetY;
        isDrawing = false;
        console.log(x)
    }
});

function drawLine(cont, x1, y1, x2, y2) {
    cont.beginPath();
    cont.strokeStyle = 'black';
    cont.lineWidth = 1;
    cont.moveTo(x1, y1);
    cont.lineTo(x2, y2);
    cont.stroke();
    cont.closePath();
}

const bol = document.getElementById('bol');


bol.onmousedown = function(event) {
    let shiftX = event.clientX - bol.getBoundingClientRect().left;


    bol.style.position = 'absolute';
    bol.style.zIndex = 1000;
    document.body.append(bol);
    moveAt(event.pageX);

    function moveAt(pageX) {
        bol.style.left = pageX - shiftX + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
        if (bol.getBoundingClientRect().left > 600) {
            moveAt(600);
        } else if (bol.getBoundingClientRect().left < 60) {
            moveAt(60);
        }
    }
    // move the text to the  mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers

    window.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        window.onmouseup = null;
        console.log(bol.getBoundingClientRect().left)
    };
};