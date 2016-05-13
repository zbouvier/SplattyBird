"use strict";

function spawnPipePiece(game, prefab, lastX, heightAdjustment) {
	var gapBetweenPipe = 180;
	var id = game.instantiatePrefab(prefab);
	var position = game.entities.get(id,"position");
	position.x = lastX + gapBetweenPipe;
	position.y += heightAdjustment;
}


module.exports = function(game, rightMostEntityX) { // eslint-disable-line no-unused-vars
	var randomPipeHeight = Math.floor((Math.random() * 225));
	if (randomPipeHeight >= 212) {
		randomPipeHeight === Math.floor((Math.random() * 225));
	}
	spawnPipePiece(game, "pipeTop", rightMostEntityX, randomPipeHeight);
	spawnPipePiece(game, "pipePoint", rightMostEntityX, randomPipeHeight);
	spawnPipePiece(game, "pipeBottom", rightMostEntityX, randomPipeHeight);

};
