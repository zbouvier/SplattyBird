"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("animationSearch",["playerController2d", "velocity", "animation"]);
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		console.log("Animation");
		var velocity = game.entities.get(entity, "velocity");
		var animation = game.entities.get(entity, "animation");
		if (velocity.y > 0) {
			animation.loop = false;
		} else {
			animation.loop = true;
		}
	}, "animationSearch");
};
