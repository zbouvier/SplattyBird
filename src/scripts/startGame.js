"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.instantiatePrefab("pipeSpawner");
	var player = game.entities.find("player") [0];
	game.entities.set(player, "gravity", 0.01);
};
