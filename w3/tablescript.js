function myFunction() {
    var x = document.getElementById("tableau");
    var y = document.getElementById("alt");
    x.style.display = "block";
    y.style.display="none";
}
function showok(){
    var p;
    const names = ["Anakin","Obi-Wan","Luke","Leia"];
    const sno=[1,2,3,4];
    var r;
    for(r=0;r<4;r++){
        document.getElementById(10+r).innerHTML=names[r];
        document.getElementById(r).innerHTML=sno[r];
    }
}
