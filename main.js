
function check(){

	var questionn = document.quiz.questionn.value;
	var question1 = questionn.toLowerCase() 
	var correct = 1;
	var oportunidades = 4

	for (oportunidades; oportunidades > 0; oportunidades--){
		document.getElementById("quiz");
		if (question1 != "keanu reeves") {
			correct = 0
		}
		else{
			correct = 1
			break
		}
	}
	
	
	
	var pictures = ["imagenes/lose.jpg" , "imagenes/win.gif"];
	var messages = ["Perdiste!" , "You are breathtaking!"];

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[correct];
	document.getElementById("picture").src = pictures[correct];
	}
	
