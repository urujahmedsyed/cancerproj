const btn=document.getElementById("btn");
const txt=document.getElementById("txt");
const body=document.body;
const colors=['rgb(236, 170, 236)','rgb(119, 86, 143)','rgb(139, 139, 255)','rgb(92, 137, 92)','rgb(255, 255, 161)','rgb(254, 212, 135)','rgb(253, 174, 174)'];
btn.addEventListener('click',chbg);
var i=0;
function chbg(){
    i=i+1;
    if(i==7){
        i=0;
    }
    body.style.backgroundColor=colors[i];
    txt.innerHTML="good job!";
}
