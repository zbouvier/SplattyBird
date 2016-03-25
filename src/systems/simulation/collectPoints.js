"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("collectPoints", ["player", "collisions", "score"]);
	ecs.addEach(function collectPoints(entity, elapsed) { // eslint-disable-line no-unused-vars
		var collisions = game.entities.get(entity, "collisions");
		var score = game.entities.get(entity, "score");
		for (var i = 0; i < collisions.length; i++) {
			var other = collisions[i];
			var points = game.entities.get(other, "points");
			if (points) {
				game.entities.destroy(other);
				game.sounds.play("Pickup_Coin.wav");
				game.entities.set(entity, "score", score + points);
			}
		}
	}, "collectPoints");

};
