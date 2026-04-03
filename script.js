//your JS code here. If required.
let p=document.getElementById("counter");
let button=document.getElementById("btn");
let count=0;

button.addEventListener("click",function(){
	const currentValue = Number(counter.innerText);
	alert(currentValue);           // un-incremented value
	counter.innerText = currentValue + 1;
});