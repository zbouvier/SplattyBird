"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("resolve-collisions",["player", "collisions"]);
	ecs.addEach(function resolveCollisions(entity) { // eslint-disable-line no-unused-vars
		var collisions = game.entities.get(entity, "collisions");
		for (var i = 0; i < collisions.length; i++) {
			var obstacle = game.entities.get(collisions[i], "obstacle");
			if (obstacle) {
				var entitiesWithVelocity = game.entities.find("velocity");
				for (i = 0; i < entitiesWithVelocity.length; i++) {
					game.entities.remove(entitiesWithVelocity[i], "velocity");
				}
			}
		}
	},"resolve-collisions");
};
