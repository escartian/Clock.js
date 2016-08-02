function Test(){
	document.getElementById("Test").innerHTML = "Congrats! You pressed the button!"
}
function ChangeBackground(){
	var randPercent1=Math.floor(Math.random()*101);
	var randPercent2=Math.floor(Math.random()*101);
	if (randPercent1>randPercent2){
		var temp=randPercent1;
		randPercent1=randPercent2;
		randPercent2=temp;
	}
	document.getElementsByTagName("BODY")[0].style.background=
	"linear-gradient(to bottom," + RandomColor()+", 0%,"+ RandomColor()+" "+ randPercent1+"%,"+ RandomColor()+" "+randPercent2+"%,"+ RandomColor()+" 100%)";
}
function RandomColor(){
	color='#'+Math.floor(Math.random()*16777216).toString(16);
	return color;
}

window.onclick=ChangeBackground;
