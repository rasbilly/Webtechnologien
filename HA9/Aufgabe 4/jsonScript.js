var a1 = { "uberschrift": "Pferde sind toll!", "text": "meine Schwester liebt Pferde" }
var a2 = { "uberschrift": "Katzen sind diof!", "text": " hasst Pferde" }
var a3 = { "uberschrift": "Hunde sind gfhj!", "text": "meine Schfghjebt Pferde" }
var arr=[]
arr.push(a1)
arr.push(a2)
arr.push(a3)

function getArtikel(sec) {
    var isArtikelLeer = document.querySelectorAll("article")

    if (isArtikelLeer.length == 0) {
        arr.forEach(e=> {
            var artic =document.createElement("article")
            var uber =document.createElement("h2")
            var para =document.createElement("p")
            
            uber.appendChild(document.createTextNode(e.uberschrift))
            para.appendChild(document.createTextNode(e.text))
            artic.appendChild(uber)
            artic.appendChild(para)
            
            document.getElementById(sec).appendChild(artic)
        })
    }
}


window.onload=getArtikel("inhalt")