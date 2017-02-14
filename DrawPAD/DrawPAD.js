/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function DrawPad() {

    var currentTool;
    var elements = new Array();

    this.initiate = function() {

        for (i = 0; i < 500; i = i + 1) {
            // Box Test
            this.addElement(new Box(i * 4, i * 4, 500 - i * 4, 500 - i * 4, 1, color(255, 255, 255, 100), color(255, 255, 255, 0)));

            // Line Test
            this.addElement(new Line(i * 10, i * 4, 500 - i, i * 5, 1, color(255, 255, 0, 255)));

            // Point Test
            this.addElement(new Point(i * 5 , i * 6, 4, color(255, 0, 255, 255)));
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
