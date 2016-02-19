"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function resolveCollisions() { // eslint-disable-line no-unused-vars
		var entitiesCollision = game.entities.find("collisions");
		var entitiesObstacle = game.entities.find("obstacle");
		var foundCollisions = false;
		var foundObstacle = false;
		for (var i = 0; i < entitiesCollision.length; i++) {
			var collisions = game.entities.get(entitiesCollision[i], "collisions");
			if (collisions.length > 0) {
				foundCollisions = true;
				break;
			}
			if (obstacle.length > 0) {
				foundObstacle = true;
				break;
			}
		}
		if (foundCollisions && foundObstacle) {
			var entitiesWithVelocity = game.entities.find("velocity");
			for (i = 0; i < entitiesWithVelocity.length; i++) {
				game.entities.remove(entitiesWithVelocity[i], "velocity");
			}
		}
	});
};
