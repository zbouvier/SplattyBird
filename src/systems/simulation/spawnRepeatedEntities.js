"use strict";

function findRightMostEntity(entities, game) {
	var rightMostEntityX = 200;
	for (var i = 0; i < entities.length; i++) {
		var position = game.entities.get(entities[i], "position");
		var size = game.entities.get(entities[i], "size");
		var rightSide = position.x + size.width;
		if (rightMostEntityX < rightSide) {
			rightMostEntityX = rightSide;
		}
	}
	return rightMostEntityX;
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function() { // eslint-disable-line no-unused-vars
		var pipes = game.entities.find("platform");
		var rightMostEntityX = findRightMostEntity(pipes, game);
		if (rightMostEntityX <= 288) {
			var spawnPipe = game.require("./scripts/spawn-pipe");
			spawnPipe(game, rightMostEntityX);
//			spawnPipePiece(game, "ground", rightMostEntityX, 0);
		}
	});
};
