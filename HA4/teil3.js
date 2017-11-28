function min(zahl1,zahl2){
    if(zahl1<zahl2){  
        return zahl1
    }else{  
        return zahl2
    }
}


function isEven(zahl){
if(zahl<0) zahl=zahl*-1
 
if(zahl==0) return true
else if(zahl == 1) return false
else if(zahl>1) return isEven(zahl-2)
}




function buchstaben(wort){
var zaehler = 0
for( var i = 0 ; i< wort.length ; i++){
    if(wort.charAt(i) == 'B') zaehler++
}
return zaehler
}

function zaehlerBuchstaben(s,c){
var x = 0
s=String(s).toUpperCase()
c=String(c).toUpperCase()
    for(var i = 0; i<s.length;i++){
       if(s.charAt(i)==c) x++
    }
return x
}

console.log(zaehlerBuchstaben("HUhu","H"))
console.log(buchstaben("qwbBer"))
console.log(min(10,2))
console.log(isEven(7))