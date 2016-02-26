"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function() { // eslint-disable-line no-unused-vars
		var pipes = game.entities.find("platform");
		var rightMostPipeX = 300;
		for (var i = 0; i < pipes.length; i++) {
			var position = game.entities.get(pipes[i], "position");
			var size = game.entities.get(pipes[i], "size");
			var rightSide = position.x + size.width;
			if (rightMostPipeX < rightSide) {
				rightMostPipeX = rightSide;
			}
		}
		if (rightMostPipeX <= 800) {
			var randomPipeHeight = Math.floor((Math.random() * 200));
			var topPipe = game.instantiatePrefab("pipeTop");
			var topPipePosition = game.entities.get(topPipe,"position");
			topPipePosition.x = rightMostPipeX + 300;
			topPipePosition.y += randomPipeHeight;
			var bottomPipe = game.instantiatePrefab("pipeBottom");
			var bottomPipePosition = game.entities.get(bottomPipe,"position");
			bottomPipePosition.x = rightMostPipeX + 300;
			bottomPipePosition.y += randomPipeHeight;
			var pipePoint = game.instantiatePrefab("pipePoint");
			var pipePointPosition = game.entities.get(pipePoint, "position");
			pipePointPosition.x = rightMostPipeX = rightMostPipeX + 300;
			pipePointPosition.y += randomPipeHeight;
		}
	});
};
