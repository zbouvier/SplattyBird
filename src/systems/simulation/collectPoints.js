"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collectPoints(entity, elapsed) { // eslint-disable-line no-unused-vars
		var collisions = game.entities.get(entity, "collisions");
		var score = game.entities.get(entity, "score");
		for (var i = 0; i < collisions.length; i++) {
			var other = collisions[i];
			if (game.entities.get(other, "points")) {
				game.entities.destroy(other)
				game.entities.set(entity, "score", score + 1);
			}
		}
	}, "player");

};
