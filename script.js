// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
}

function showIngram(el){
}

function nextImage(el){
		if (el.src.match("images/bat1.png")){
		el.src = "images/bat1two.png";
	} else if (el.src.match("images/bat1two.png")){
		el.src = "images/bat1three.png";
	} else if (el.src.match("images/bat1three.png")){
		el.src = "images/bat1four.png";
	} else if (el.src.match("images/bat1four.png")){
		el.src = "images/bat1.png";
	} else {
	}
}

function nextImagetwo(el){
		if (el.src.match("images/bat2.png")){
		el.src = "images/bat2two.png";
	} else if (el.src.match("images/bat2two.png")){
		el.src = "images/bat2three.png";
	} else if (el.src.match("images/bat2three.png")){
		el.src = "images/bat2four.png";
		} else if (el.src.match("images/bat2four.png")){
		el.src = "images/bat2.png";
	} else {
	}
}

function nextImagethree(el){
		if (el.src.match("images/newbat.png")){
		el.src = "images/newbat2.png";
	} else if (el.src.match("images/newbat2.png")){
		el.src = "images/newbat3.png";
	} else if (el.src.match("images/newbat3.png")){
		el.src = "images/newbat4.png";
		} else if (el.src.match("images/newbat4.png")){
		el.src = "images/newbat.png";
	} else {
	}
}

function nextImagefour(el){
		if (el.src.match("images/bat4.png")){
		el.src = "images/bat4two.png";
	} else if (el.src.match("images/bat4two.png")){
		el.src = "images/bat4three.png";
	} else if (el.src.match("images/bat4three.png")){
		el.src = "images/bat4four.png";
		} else if (el.src.match("images/bat4four.png")){
		el.src = "images/bat4.png";
	} else {
	}
}