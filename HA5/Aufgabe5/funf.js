
function Vector(x, y) {
  this.x = x;
  this.y = y;
}


Vector.prototype.plus = function(vec) {
  return new Vector(this.x + vec.x, this.y + vec.y);
};

Vector.prototype.minus = function(vec){
    return new Vector(this.x - vec.x, this.y - vec.y)
}

Vector.prototype.length=function(){
  return Math.sqrt(this.x*this.x+this.y*this.this.y)
}



console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
//console.log(new Vector(3, 4).length);
// → 5


//-----------------------------------------------------------------------------
function StretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth= function(){
    return
}
StretchCell.prototype.minHeight= function(){
    return
}
StretchCell.prototype.draw= function(widht, height){
    return
}


var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

//--------------------------------------------------------


//logFive(new ArraySeq([1, 2]));
// → 1
// → 2
//logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
