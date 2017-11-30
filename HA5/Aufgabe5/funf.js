
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

Object.defineProperty(Vector.prototype,"length",{
    get:function(){
         return Math.sqrt(this.x*this.x+this.y*this.y)
    }
})
//Vector.prototype.length=function(){
//  return Math.sqrt(this.x*this.x+this.y*this.this.y)
//}



console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5


//_--------------------------------------------------------
function logFive(para){
    for(var i = 0;i<5;i++){
        if(para.naechster()){
        console.log(para.wert())
        }
    }
}

function ArraySeq(arr){
    this.arr= arr;
    this.p=0
}

ArraySeq.prototype.wert = function(){
    return this.arr[this.p];
}

ArraySeq.prototype.naechster = function(){
    if(this.p<=this.arr.length-1){
    this.p++;
    return true;
    }else{
        return false;
    }
}


function RangeSeq(start, end){
    this.p = start;
    this.end = end;
}

RangeSeq.prototype.naechster = function(){
        if(this.p<=this.end){
    this.p++
    return true
        
    }else{
        return false
    }
}

RangeSeq.prototype.wert = function(){
    return this.p
}


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
