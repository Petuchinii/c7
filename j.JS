var MouseEvents= "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementbyId("lienzo");
ctx=canvas.getContext("2d");
color="blue";
width_of_line=1;

canvas.addElementListener("mousedown , my_mousedown");