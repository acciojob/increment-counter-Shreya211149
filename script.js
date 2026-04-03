//your JS code here. If required.
let counter=document.getElementById("counter");
let incrementBtn=document.getElementById("incrementBtn");
let count=0;

incrementBtn.addEventListener("click",function(){
	const currentValue = Number(counter.innerText);
	alert(currentValue);           // un-incremented value
	counter.innerText = currentValue + 1;
});