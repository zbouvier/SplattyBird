"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("rotateDownSearch",["playerController2d", "velocity"]);
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var timers = game.entities.get(entity, "timers");
		if (timers.rotateDown.running) {
			var rotation = game.entities.get(entity, "rotation");
			rotation.angle = -2;
		}
	}, "rotateDownSearch");
};
