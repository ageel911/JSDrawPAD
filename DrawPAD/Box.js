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

function Box(x, y, width, height, strokeweight, strokecolor, fillcolor) {


    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.strokeweight = strokeweight || 1;
    this.strokecolor = strokecolor || color(255);
    this.fillcolor = fillcolor || color(0,0,0,0);


    this.draw = function()
    {
      stroke(this.strokecolor );
      strokeWeight(this.strokeweight);
      fill(this.fillcolor);
      rect(this.x,this.y,this.width,this.height);
    }


};
