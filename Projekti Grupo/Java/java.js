function openNav() {
	document.getElementById("sideMenu")
		.style.width = "300px";
	document.getElementById("contentArea")
		.style.marginLeft = "300px";
}

function closeNav() {
	document.getElementById("sideMenu")
		.style.width = "0";
	document.getElementById("contentArea")
		.style.marginLeft = "0";
}

function showContent(content) {
	document.getElementById("contentTitle")
		.textContent = content + " page";
		
	closeNav();
}




var first  = ['APPS','WEBSITES','SOFTWARES'];
var second = ['you','clients','artists','us'];
var i = 0;
var j = 0;
var maxfirst  = first.length - 1;
var maxsecond = second.length - 1;

function delay() {
    $('#intro').velocity("transi1ion.slideUpIn", 1000);
    setInterval(firstwordchange, 1500);
}

function firstwordchange() {
    if (i < maxfirst) i++; else i = 0;

    $('#firstword').velocity("transition.slideUpOut", 750);

    setTimeout(function () {
        $('#firstword').text(first[i]);
    }, 750);

  $('#firstword').velocity("transition.slideUpIn", 750);
}


setTimeout(delay, 750);



