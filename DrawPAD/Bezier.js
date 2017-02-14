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
