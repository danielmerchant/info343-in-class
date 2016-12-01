paper.install(window);

var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

var newTool = new Tool();
var path;

tool.onMouseDown = function(event) {
    path = new Path();
    path.strokeColor = 'black';
    path.add(event.point);
}

tool.onMouseDrag = function(event) {
    path.add(event.point);
}
