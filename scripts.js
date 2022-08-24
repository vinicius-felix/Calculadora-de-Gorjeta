function calculateTip(event) {
event.preventDefault();

}
let bill = document.getElementById('bill').value;
let serviceQual = document.getElementById('service Qual').value;
let numOfpeople = document.getElementById('numOfpeople').value;

if(bill == '' || serviceQual == 0)
    alert('Bill cant be null');

if(numOfpeople == '' || numOfpeople <= 1){
    numOfpeople = 1;
    document.getElementById('each').style.display ="none";

} else 
    document.getElementById('each').style.display ="block";


let total = (bill  * serviceQual) / numoOfpeople;
total = total.tofixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totaltip').style.display="block";


document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display  = "none";

document.getElementById('tipsform').addEventListener('submit'. calculateTip);

