function HTML(){
	document.getElementById("HTM").style.display ='none';
	document.getElementById("HTMLtutorial").style.display ='block';
	document.getElementById("Css").style.display ="none";
	document.getElementById("javascript").style.display ="none";
	window.location.hash = "#tutorial=HTML";
}
function CSS(){
	document.getElementById("Css").style.display ='none';
	document.getElementById("javascript").style.display ="none";
	document.getElementById("HTM").style.display ="none";
}
function Javascript(){
   document.getElementById("javascript").style.display ="none";
   document.getElementById("jscript").style.display = "block";
   document.getElementById("HTM").style.display = "none";
   document.getElementById("Css").style.display ="none";
   window.location.hash = "#tutorial=JavaScript";
}
function paragraphs(){
	document.getElementById("paragraphs").style.display ="block";
	document.getElementById("Css").style.display ="none";
	document.getElementById("HTMLtutorial").style.display ="none";
	document.getElementById("javascript").style.display ="none";
}
function paragraphback(){
	document.getElementById("paragraphs").style.display = "none";
	document.getElementById("HTMLtutorial").style.display = "block";
}
function htmlback(){
	document.getElementById("javascript").style.display = "block";
	document.getElementById("HTMLtutorial").style.display ="none";
	document.getElementById("Css").style.display ="block";
	document.getElementById("javascript").style.display ="block";
	document.getElementById("HTM").style.display ="block";
}
if(window.location.hash == "#tutorial=HTML"){
    HTML();
}
if(window.location.hash == "#tutorial=JavaScript"){
    Javascript();
}
