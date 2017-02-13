function Line(x1, y1, x2, y2, weight, color) {


    this.p1 = new Point(x1, y1);
    this.p2 = new Point(x2, y2);
    this.weight = weight || 1;
    this.color = color || new color(255);

    this.draw = function()
    {
      stroke(color);
      strokeWeight(weight);
      line(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
    }


};
