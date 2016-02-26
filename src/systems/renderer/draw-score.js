"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(entity, context) { // eslint-disable-line no-unused-vars
		var score = game.entities.get(entity, "score");
		context.fillStyle = "#fff";
		context.font = "bold 20px arial";
		context.fillText("Points: " + score, 16, 30);
	} ,"player");
};
