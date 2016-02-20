"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function resolveCollisions() { // eslint-disable-line no-unused-vars
		var entitiesCollision = game.entities.find("collisions");
		var foundCollisions = false;
		var foundObstacle = false;
		for (var i = 0; i < entitiesCollision.length; i++) {
			var collisions = game.entities.get(entitiesCollision[i], "collisions");
			var obstacle = game.entities.get(4,)
			if (collisions.length > 0) {
				foundCollisions = true;
				break;
			}
			if ()//I do not know what to put here
			// I tried game.entities.get but I think that needs an array.
		}
		if (foundCollisions === true && foundObstacle === true) { // to make this true
			var entitiesWithVelocity = game.entities.find("velocity");
			for (i = 0; i < entitiesWithVelocity.length; i++) {
				game.entities.remove(entitiesWithVelocity[i], "velocity");
			}
		}
	});
};
