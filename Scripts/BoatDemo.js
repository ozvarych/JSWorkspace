$(document).ready( function() {

	drawCanvas();

	var canvas = document.getElementById("water1-canvas");
 	var canvasContext = canvas.getContext("2d");
	var firstWater = {
		canvas: canvas,
		context: canvasContext,
		x: -100, 
		y: 700, 
		xOffset: 1, 
		yOffset: function(x1, x2) { 
			var y1 = waterEquation(x1);
			var y2 = waterEquation(x2);
			return (y2 - y1);
		},
		xposition: 300, 
		yposition: (this.xposition * this.xposition)/4,
		draw: function() {
			var img = new Image();
			img.src = "Resources/wave1.png";
			// img.onload = function() {
			   // canvasContext.drawImage(img, 300, 100);
			// };

			var interval = setInterval(function() {
				// var x = 0, y = 100;

				return function () {
					this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
					this.context.drawImage(img, this.x, this.y);

					this.x += 1;
					if (this.x > this.canvas.width) {
					  this.x = 0;
					}
				};
			}(), 1000/40);
		}
	};

	var canvas = document.getElementById("boat-canvas");
 	var canvasContext = canvas.getContext("2d");
 	var boat = {
		canvas: canvas,
		context: canvasContext,
		x: 300, 
		y: 150, 
		xOffset: 1, 
		yOffset: function(x1, x2) { 
			var y1 = boatEquation(x1);
			var y2 = boatEquation(x2);
			return (y2 - y1);
		},
		xposition: 300, 
		yposition: (this.xposition * this.xposition)/4,
		draw: function() {
			var img = new Image();
			img.src = "Resources/boat.png";
			// img.onload = function() {
			   // canvasContext.drawImage(img, 300, 100);
			// };

			var interval = setInterval(function() {
				// var x = 0, y = 100;

				return function () {
					this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
					this.context.drawImage(img, this.x, this.y);

					this.x += 1;
					if (this.x > this.canvas.width) {
					  this.x = 0;
					}
				};
			}(), 1000/40);
		}
	};

	var img = new Image();
	img.src = "Resources/boat.png";
	img.addEventListener('load', function () {
		var interval = setInterval(function() {
			// var x = 0, y = 0;

			return function () {
				boat.context.clearRect(0, 0, boat.canvas.width, boat.canvas.height);
				boat.context.drawImage(img, boat.x, boat.y);

				// debugger
				boat.y += boat.yOffset(boat.x, boat.x + boat.xOffset);
				boat.x += boat.xOffset;
				if (boat.x > boat.canvas.width) {
				  boat.x = 0;
				}
			};
		}(), 1000/50);
	}, false);

	var water1 = new Image();
	water1.src = "Resources/wave1.png";
	water1.addEventListener('load', function () {
		var interval = setInterval(function() {
			// var x = 0, y = 0;

			return function () {
				firstWater.context.clearRect(0, 0, firstWater.canvas.width, firstWater.canvas.height);
				firstWater.context.drawImage(water1, firstWater.x, firstWater.y);

				firstWater.y += firstWater.yOffset(firstWater.x, firstWater.x + firstWater.xOffset);
				firstWater.x += firstWater.xOffset;
				if (firstWater.x > firstWater.canvas.width) {
				  firstWater.x = 0;
				}
			};
		}(), 1000/50);
	}, false);

});

function boatEquation(x) {
	return (Math.pow(((x % 60) - 30 ), 2) - 30)/30;
}

function waterEquation(x) {
	return (Math.pow(((x % 60) - 30 ), 2) - 30)/10;
}


function drawCanvas() {
	var artBoard = document.getElementById("artBoard");
	var width = artBoard.offsetWidth - 10;
	var height = artBoard.offsetHeight - 10;

	drawBlueBackground(width, height);
	drawClouds(width, height);
	drawSecondMountain(width, height);
	drawFirstMountain(width, height);

	drawBoat(width, height);
	drawThirdWater(width, height);
	drawSecondWater(width, height);
	drawFirstWater(width, height);

}

 function clearCanvas(canvas, context) {
 	context.clearRect(0, 0, canvas.width, canvas.height);
  }


function drawFirstWater(width, height) {
	var canvas = document.getElementById("water1-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var water = new Image();
	water.src = "Resources/wave1.png";
	water.onload = function() {
	   canvasContext.drawImage(water,-100,700);
	};

}

function drawSecondWater(width, height) {
	var canvas = document.getElementById("water2-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var water = new Image();
	water.src = "Resources/wave2.png";
	water.onload = function() {
	   canvasContext.drawImage(water,-300,600);
	};

}

function drawThirdWater(width, height) {
	var canvas = document.getElementById("water3-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var water = new Image();
	water.src = "Resources/wave3.png";
	water.onload = function() {
	   canvasContext.drawImage(water,-200,500);
	};

}

function drawBoat(width, height) {
	var canvas = document.getElementById("boat-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var boat = new Image();
	boat.src = "Resources/boat.png";
	boat.onload = function() {
	   canvasContext.drawImage(boat, 300, 100);
	};

}

function drawFirstMountain(width, height) {
	var canvas = document.getElementById("mountain1-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var mountain = new Image();
	mountain.src = "Resources/mountain1.png";
	mountain.onload = function() {
	   canvasContext.drawImage(mountain, -100, 300);
	};

}

function drawSecondMountain(width, height) {
	var canvas = document.getElementById("mountain2-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var mountain = new Image();
	mountain.src = "Resources/mountain2.png";
	mountain.onload = function() {
	   canvasContext.drawImage(mountain, -100, 100);
	};

}

function drawClouds(width, height) {
	var canvas = document.getElementById("clouds-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var clouds = new Image();
	clouds.src = "Resources/clouds.png";
	clouds.onload = function() {
	   canvasContext.drawImage(clouds, -100, 0);
	};

}

function drawBlueBackground(width, height) {
	var canvas = document.getElementById("background-canvas");
 	var canvasContext = canvas.getContext("2d");
 	canvasContext.canvas.width = width;
  	canvasContext.canvas.height = height;
	var width = canvasContext.canvas.width;
	var height = canvasContext.canvas.height;
	canvasContext.fillStyle = "#e3fcff";
	canvasContext.fillRect(0,0,width,height);
}

