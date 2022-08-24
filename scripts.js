function calculateTip(event) {
	event.preventDefault();
}

let bill = document.getElementById('bill').value;
let serviceQual = document.getElementById('serviceQual').value;
let numOfpeople = document.getElementById('people').value;
let total = 0.00;

if(bill == '' || serviceQual == 0)
    console.log('Bill cant be null');

if(numOfpeople == '' || numOfpeople <= 1){
    numOfpeople = 1;
    document.getElementById('each').style.display ="none";

} else 
    document.getElementById('each').style.display ="block";


total = (bill  * serviceQual) / numOfpeople;

document.getElementById('tip').innerHTML = total.toFixed(2);
document.getElementById('totaltip').style.display="block";


document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display  = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);
