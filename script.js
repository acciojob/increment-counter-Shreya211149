//your JS code here. If required.
let p=document.getElementById("counter");
let button=document.getElementById("btn");
let count=0;

button.addEventListener("click",function(){
	alert(count);
	count++;
	p.innerText=count;
});