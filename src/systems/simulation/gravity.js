
"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("applyGravity",["gravity", "velocity"]);
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = game.entities.get(entity, "velocity");
		var gravity = game.entities.get(entity, "gravity");
		velocity.y += gravity;
	}, "applyGravity");
};
