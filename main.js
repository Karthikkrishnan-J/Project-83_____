var Canvas = document.getElementById("myCanvas");
var ctx = Canvas.getContext("2d");
var MouseEvent = "";
var color = "";
var width = "";
Canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("Color").value;
    width = document.getElementById("Width").value;
    MouseEvent = "mousedown";
}
Canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    MouseEvent = "mouseup";
}
Canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    MouseEvent = "mouseleave";
}
Canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    current_position_of_mouse_x = e.clientX - Canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - Canvas.offsetTop;
    if (MouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();


    }

    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y;
}
Canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e) {
    last_position_of_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - Canvas.offsetTop;
    color = document.getElementById("Color").value;
    width = document.getElementById("Width").value;

}
Canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e) {
    current_position_of_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - Canvas.offsetTop;
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y)
    ctx.stroke()

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;

}

