var cur = Date();
function temp(){
    var parato = document.createElement("P");
    var parat = document.createElement("P");
    var parab = document.createElement("P");
    var parac = document.createElement("P");
    var topic = document.getElementById("toInput").value;
    var title = document.getElementById("tInput").value;
    var body = document.getElementById("bInput").value;
    if(title != ""){
        if(body!= ""){
            var to = document.createTextNode(topic);
            var t = document.createTextNode(title);
            var b = document.createTextNode(body);
            var c = document.createTextNode(cur);
            parato.appendChild(to);
            parat.appendChild(t);
            parac.appendChild(c);
            document.getElementById("myDIV").appendChild(parato);
            document.getElementById("myDIV").appendChild(parac);
            document.getElementById("myDIV").appendChild(parat);
            parab.appendChild(b);
            document.getElementById("myDIV").appendChild(parab);
            resetF();
        }else{
            alert("Please Enter Body");
        }
    }else{
        alert("Please Enter Title");
    }
}
function resetF(){
    document.getElementById("tInput").value = "";
    document.getElementById("bInput").value = "";
}
