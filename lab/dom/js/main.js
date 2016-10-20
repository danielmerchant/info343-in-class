"use strict";

var boxOne = document.getElementById('one'),
	boxTwo = document.getElementById('two'),
	boxThree = document.getElementById('three'),
	boxFour = document.getElementById('four'),
	boxFive = document.getElementById('five'),
	boxSix = document.getElementById('six');

	boxOne.addEventListener("click", function() {
		boxOne.classList.toggle("fade-to-black");
	});

	boxTwo.addEventListener("click", function() {
		boxTwo.classList.add("fall");
	});

	boxThree.addEventListener("mouseover", function() {		
		boxThree.classList.add("fade-to-white");
		boxThree.classList.add("white");
	});

	boxThree.addEventListener("mouseout", function() {
		boxThree.classList.remove("white");
		boxThree.classList.add("fade-to-bg-cover");
	});

	boxFour.addEventListener("click", function() {
		boxFour.classList.toggle("fall");
	});

	boxFive.addEventListener("click", function() {
		function explode() {
			var style = getComputedStyle(boxFive);
			var width = parseInt(style.getPropertyValue('width'));
			var height = parseInt(style.getPropertyValue('height'));
			if (width > 250) {
				boxFive.style.width = 0 + "px";
				boxFive.innerHTML = "";
			} else if (width != 0) {
				width += 5;
				height += 5;
				boxFive.style.width = width + "px";
				boxFive.style.height = height + "px";
			}
		}
		setInterval(function(){ explode() }, 50);
	});