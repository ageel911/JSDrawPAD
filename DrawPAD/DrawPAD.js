function DrawPad() {

    var currentTool;
    var elements = new Array();

    this.initiate = function() {

        for (i = 0; i < 500; i=i+.1) {
            this.addElement(new Line(i*20,cos(i)*300+100, i*20*(1+cos(i)), cos(i+.1)*500+100*+cos(i), 1, 255));

        }
    }

    this.draw = function() {
        //var test = new Point(3,4);
        for (i = 0; i < elements.length; i++) {
            elements[i].draw();
        }
    };

    this.update = function() {

    };

    this.addElement = function(x) {
        elements.push(x);
    }

}
