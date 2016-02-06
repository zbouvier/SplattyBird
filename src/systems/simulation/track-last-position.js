"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function trackLastPosition(entity, elapsed) { // eslint-disable-line no-unused-vars
		var position = data.entities.get(entity, "position");
		data.entities.set(entity, "lastPosition", { x: position.x, y: position.y });
	}, "position");
};
