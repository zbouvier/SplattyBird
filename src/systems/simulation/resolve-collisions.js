"use strict";

var saveData = require("splat-ecs/lib/save-data");

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
		var highscore = game.entities.get(entity, "highscore");
		var score = game.entities.get(entity, "score");
		for (var i = 0; i < collisions.length; i++) {
			var obstacle = game.entities.get(collisions[i], "obstacle");
			if (obstacle) {
				deleteAllComponents(game, "velocity");
				deleteAllComponents(game, "spawner");
				hasCollided = true;
				game.entities.set(entity, "highscoreHolder", 1);
				game.instantiatePrefab("restartButton");
				game.instantiatePrefab("titleScreen");
				game.sounds.play("Explosion33.wav");
				if (score > highscore) {
					game.entities.set(entity, "highscore", score);
					saveData.set({
						highscore: score
					}, function() {
					});
				}

			}
		}
		if (hasCollided) {
			game.entities.remove(entity, "collisions");
		}
	},"resolve-collisions");
};
