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
		var score = game.entities.get(entity, "score");
		var viewPort = game.entities.find("viewPort") [0];
		var viewPortSize = game.entities.get(viewPort, "size");
		context.fillStyle = "#fff";
		context.strokeStyle = "#000";
		context.lineWidth = 3;
		context.font = "bold 39px sans serif";
		centerText(context, score.toString(), 0, 50, viewPortSize);
	} ,"player");
};
