"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function jump(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = game.entities.get(entity, "velocity");

		if (game.input.buttonPressed("jump")) {
			velocity.y  = -1.2;
		}

	}, "player");

};
