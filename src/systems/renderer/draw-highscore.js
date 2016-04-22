"use strict";

function centerText(context, text, offsetX, offsetY, canvas) {
	var w = context.measureText(text).width;
	var x = offsetX + (canvas.width / 2) - (w / 2) | 0;
	var y = offsetY | 0;
	context.strokeText(text, x, y);
	context.fillText(text, x, y);
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(entity, context) { // eslint-disable-line no-unused-vars
		var highscore = game.entities.get(entity, "highscore");
		var viewPort = game.entities.find("viewPort") [0];
		var viewPortSize = game.entities.get(viewPort, "size");
		var highscoreHolder = game.entities.find("highscoreHolder") [0];
		context.fillStyle = "#fff";
		context.strokeStyle = "#000";
		context.lineWidth = 3;
		context.font = "bold 39px sans serif";
		if (highscoreHolder === 1) {
			centerText(context, highscore.toString(), 0, 200, viewPortSize);
			context.font = "bold 15px sans serif"
			centerText(context, "High score :", -75, 190, viewPortSize)
		}

	} ,"player");
};
