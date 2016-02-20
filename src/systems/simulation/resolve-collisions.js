"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function resolveCollisions() { // eslint-disable-line no-unused-vars
		var entitiesCollision = game.entities.find("collisions");
		var foundCollisions = false;
		for (var i = 0; i < entitiesCollision.length; i++) {
			var collisions = game.entities.get(entitiesCollision[i], "collisions");
			if (collisions.length > 0) {
				foundCollisions = true;
				break;
			}
		}
		if (foundCollisions === true) {
			var entitiesWithVelocity = game.entities.find("velocity");
			for (i = 0; i < entitiesWithVelocity.length; i++) {
				game.entities.remove(entitiesWithVelocity[i], "velocity");
			}
		}
	});
};
