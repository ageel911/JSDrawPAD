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

function Line(x1, y1, x2, y2, weight, color) {


    this.p1 = new Point(x1, y1);
    this.p2 = new Point(x2, y2);
    this.weight = weight || 1;
    this.color = color || color(255);

    this.draw = function()
    {
      stroke(color);
      strokeWeight(weight);
      line(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
    }


};
