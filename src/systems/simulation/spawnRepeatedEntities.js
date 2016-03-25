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
	ecs.addEach(function(entity) { // eslint-disable-line no-unused-vars
		var spawner = game.entities.get(entity, "spawner");
		var pipes = game.entities.find(spawner.search);
		var rightMostEntityX = findRightMostEntity(pipes, game);
		if (rightMostEntityX <= spawner.threshold) {
			var spawnScript = game.require(spawner.script);
			spawnScript(game, rightMostEntityX);
		}
	},"spawner");
};
