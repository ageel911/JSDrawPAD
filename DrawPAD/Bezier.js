function Bezier(x, y) {

    this.Segments = [];
    this.StartLocation = new Point(x, y) || new Point(0, 0);


    this.Draw = function() {
        bezier(points[points.length - 1].x, points[points.length - 1].y, mouseX, mouseY, cpoints[points.length - 2].x, cpoints[points.length - 2].y, points[points.length - 2].x, points[points.length - 2].y);
    };
};

function BezierPoint(x, y, cx1, cy1, cx2, cy2) {
    this.loc = new Point(x, y);
    this.controlPoint1 = new Point(cx1, cy1);
    this.controlPoint2 = new Point(cx2, cy2);


};
