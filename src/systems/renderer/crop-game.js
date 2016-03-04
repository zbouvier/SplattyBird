"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var viewportPosition = game.entities.get(entity, "position");
		var viewportSize = game.entities.get(entity, "size");

		var cameraPosition = game.entities.get(0, "position");
		var cameraSize = game.entities.get(0, "size");

		context.fillStyle = "black";
		context.fillRect(
			cameraPosition.x,
			cameraPosition.y,
			cameraSize.width,
			viewportPosition.y - cameraPosition.y
		);
		context.fillRect(
			viewportPosition.x + viewportSize.width,
			cameraPosition.y,
			cameraSize.width - (viewportPosition.x + viewportSize.width),
			cameraSize.height
		);
		context.fillRect(
			cameraPosition.x,
			viewportPosition.y + viewportSize.height,
			cameraSize.width,
			cameraSize.height - (viewportPosition.y + viewportSize.height)
		);
		context.fillRect(
			cameraPosition.x,
			cameraPosition.y,
			viewportPosition.x - cameraPosition.x,
			cameraSize.height
		);

	}, "viewPort");
};
