function calculateTip(event) {	
	document.getElementById('totaltip').style.display="block";
	event.preventDefault();

}


function calcularGorj(){
	let bill = document.getElementById('bill').value;
	let serviceQual = document.getElementById('serviceQual').value;
	let numOfpeople = document.getElementById('people').value;

	if(bill == '' || serviceQual == 0)
	    console.log('Bill cant be null');

	if(numOfpeople == '' || numOfpeople <= 1){
	    numOfpeople = 1;
	    document.getElementById('each').style.display ="none";

	} else 
	    document.getElementById('each').style.display ="block";

	document.getElementById('tip').innerHTML = Number((bill  * serviceQual) / numOfpeople);
	console.log(bill)
	console.log(serviceQual)
	console.log(numOfpeople)
	document.getElementById('totaltip').style.display="block";

}

document.getElementById('tipsform').addEventListener('submit', calculateTip);
