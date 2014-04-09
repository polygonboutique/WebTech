/**
 * author: Sergej Schefer
 * */

function checkRegister(input){
    alert(input);
}

function checkIfEmpty(value, divID){
    if(value == ""){
    	contentIsNotOk(divID);
    }else{
    	contentIsOk(divID);
    }
}

function checkEmail(value, divID){
	if(value.contains('@') && value.length > 2){
		contentIsOk(divID);
	}else{
		contentIsNotOk(divID, "Please enter a valid email address");
	}
}

function checkNumbers(value, divID){
	var isnum = /^\d+$/.test(value);

	if(isnum == true){
		contentIsOk(divID);
	}else{
		contentIsNotOk(divID, "Only numbers allowed");
	}
}

function contentIsOk(divID){
    document.getElementById(divID).innerHTML = "ok";
    document.getElementById(divID).className = ' form-ok';
}

function contentIsNotOk(divID, cumstomMSG){
    if(typeof cumstomMSG === 'undefined'){
    	document.getElementById(divID).innerHTML = "Please enter " + divID;
    }else{
    	document.getElementById(divID).innerHTML = cumstomMSG;
    }
    document.getElementById(divID).className = ' form-error';
}

function checkRadiobuttons(msgID){
	var inputTags = document.getElementsByTagName('input');
	var oneButtonChecked = false;

	for(var i = 0; i < inputTags.length; i++){
		if(inputTags[i].type === 'radio' && inputTags[i].name === 'frequency'){
			if(!oneButtonChecked){
				oneButtonChecked = inputTags[i].checked;
			}
		}
	}

	if(oneButtonChecked){
		alert("1 Button clicked");
	}else{
		alert("Click one button please!!!!!!");
	}

	bro();
}


function bro(){
	yo(function b(){
		alert("yo bro");
	});
}


function yo(callme){
	callme();
}