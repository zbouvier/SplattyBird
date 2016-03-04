"use strict";

var gapBetweenPipe = 200;

function spawnPipePiece(game, prefab, lastX, heightAdjustment) {
	var id = game.instantiatePrefab(prefab);
	var position = game.entities.get(id,"position");
	position.x = lastX + gapBetweenPipe;
	position.y += heightAdjustment;
}


module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function() { // eslint-disable-line no-unused-vars
		var pipes = game.entities.find("platform");
		var rightMostPipeX = gapBetweenPipe;
		for (var i = 0; i < pipes.length; i++) {
			var position = game.entities.get(pipes[i], "position");
			var size = game.entities.get(pipes[i], "size");
			var rightSide = position.x + size.width;
			if (rightMostPipeX < rightSide) {
				rightMostPipeX = rightSide;
			}
		}
		if (rightMostPipeX <= 288) {
			var randomPipeHeight = Math.floor((Math.random() * 200));
			spawnPipePiece(game, "pipeTop", rightMostPipeX, randomPipeHeight);
			spawnPipePiece(game, "pipePoint", rightMostPipeX, randomPipeHeight);
			spawnPipePiece(game, "pipeBottom", rightMostPipeX, randomPipeHeight);
		}
	});
};
