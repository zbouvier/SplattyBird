"use strict";

function spawnPipePiece(game, prefab, lastX, heightAdjustment) {
	var id = game.instantiatePrefab(prefab);
	var position = game.entities.get(id,"position");
	position.x = lastX + gapBetweenPipe;
	position.y += heightAdjustment;
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("repeatSearch",["size", "position", "repeat"]);

	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var position = game.entities.get(entity, "position");
		var size = game.entities.get(entity, "size");
		var repeat = game.entities.get(entity, "repeat");
		var screenSize = game.entities.get(2, "size")
		if (position.x + size.width <= screenSize.width - repeat.every ) {
			var spawnX = position.x + size.width + repeat.every
			var randomPipeHeight = Math.floor((Math.random() * 200));
			spawnPipePiece(game, "pipeTop", spawnX, randomPipeHeight);
			spawnPipePiece(game, "pipePoint", spawnX, randomPipeHeight);
			spawnPipePiece(game, "pipeBottom", spawnX, randomPipeHeight);
		}
	}, "repeatSearch");
};
