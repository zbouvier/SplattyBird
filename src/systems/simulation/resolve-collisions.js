"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function resolveCollisions() { // eslint-disable-line no-unused-vars
		var entities = game.entities.find("collisions");
		var foundCollisions = false;
		for (var i = 0; i < entities.length; i++) {
			var collisions = game.entities.get(entities[i], "collisions");
			if (collisions.length > 0) {
				foundCollisions = true;
				break;
			}

		}
		if (foundCollisions) {
			var entitiesWithVelocity = game.entities.find("velocity");
			for (i = 0; i < entitiesWithVelocity.length; i++) {
				game.entities.remove(entitiesWithVelocity[i], "velocity");
			}
		}
	});

};
