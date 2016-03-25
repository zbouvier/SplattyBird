"use strict";
function deleteAllComponents(game, component) {
	var entitiesWithVelocity = game.entities.find(component).slice();
	for (var i = 0; i < entitiesWithVelocity.length; i++) {
		game.entities.remove(entitiesWithVelocity[i], component);
	}
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("resolve-collisions",["player", "collisions"]);
	ecs.addEach(function resolveCollisions(entity) { // eslint-disable-line no-unused-vars
		var collisions = game.entities.get(entity, "collisions");
		var hasCollided = false;
		for (var i = 0; i < collisions.length; i++) {
			var obstacle = game.entities.get(collisions[i], "obstacle");
			if (obstacle) {
				deleteAllComponents(game, "velocity");
				deleteAllComponents(game, "spawner");
				hasCollided = true;
			}
		}
		if (hasCollided) {
			game.entities.remove(entity, "collisions");
		}
	},"resolve-collisions");
};
