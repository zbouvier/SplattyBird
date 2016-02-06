"use strict";

function wasLeft(entityLastPosition, entitySize, otherPosition) {
	return entityLastPosition.x + entitySize.width <= otherPosition.x;
}
function wasRight(entityLastPosition, otherPosition, otherSize) {
	return entityLastPosition.x >= otherPosition.x + otherSize.width;
}
function wasAbove(entityLastPosition, entitySize, otherPosition) {
	return entityLastPosition.y + entitySize.height <= otherPosition.y;
}
function wasBelow(entityLastPosition, otherPosition, otherSize) {
	return entityLastPosition.y >= otherPosition.y + otherSize.height;
}

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	data.entities.registerSearch("resolveCollisions", ["collisions","velocity","lastPosition","position"]);
	ecs.addEach(function resolveCollisions(entity, elapsed) { // eslint-disable-line no-unused-vars
		var entityCollisions = data.entities.get(entity, "collisions");
		var entityPosition = data.entities.get(entity, "position");
		var entitySize = data.entities.get(entity, "size");
		var entityVelocity = data.entities.get(entity, "velocity");
		var entityLastPosition = data.entities.get(entity, "lastPosition");



		for (var i = 0; i < entityCollisions.length; i++) {
			var other = entityCollisions[i];
			var otherPosition = data.entities.get(other, "position");
			var otherSize = data.entities.get(other, "size");

			if (wasLeft(entityLastPosition, entitySize, otherPosition)) {
				entityPosition.x = otherPosition.x - entitySize.width;
				entityVelocity.x = 0;
			}
			if (wasRight(entityLastPosition, otherPosition, otherSize)) {
				entityPosition.x = otherPosition.x + otherSize.width;
				entityVelocity.x = 0;
			}
			if (wasAbove(entityLastPosition, entitySize, otherPosition)) {
				entityPosition.y = otherPosition.y - entitySize.height;
				entityVelocity.y = 0;
			}
			if (wasBelow(entityLastPosition, otherPosition, otherSize)) {
				entityPosition.y = otherPosition.y + otherSize.height;
				entityVelocity.y = 0;
			}
		}
	}, "resolveCollisions");

};
