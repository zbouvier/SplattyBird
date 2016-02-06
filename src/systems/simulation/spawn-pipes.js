"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function() { // eslint-disable-line no-unused-vars
		var pipes = game.entities.find("platform");
		var rightMostPipe = 0;
		for (var i = 0; i < pipes.length; i++) {
			var position = game.entities.get(pipes[i], "position");
			var size = game.entities.get(pipes[i], "size");
			var rightSide = position.x + size.width;
			if (rightMostPipe < rightSide) {
				rightMostPipe = rightSide;
			}
		}
		if (rightMostPipe <= 800) {
			var topPipe = game.instantiatePrefab("pipeTop");
			var topPipePosition = game.entities.get(topPipe,"position");
			topPipePosition.x = rightMostPipe + 300;
			var bottomPipe = game.instantiatePrefab("pipeBottom");
			var bottomPipePosition = game.entities.get(bottomPipe,"position");
			bottomPipePosition.x = rightMostPipe + 300;
		}
	});
};
