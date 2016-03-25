"use strict";

module.exports = function(game, rightMostEntityX) { // eslint-disable-line no-unused-vars
	var id = game.instantiatePrefab("ground");
	var position = game.entities.get(id,"position");
	position.x = rightMostEntityX;
};
