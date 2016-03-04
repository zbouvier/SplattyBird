"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(entity, context) { // eslint-disable-line no-unused-vars
		var size = game.entities.get(entity, "size");
		var color = game.entities.get(entity, "color");
		var position = game.entities.get(entity, "position");
		context.fillStyle = color;
		context.fillRect(position.x, position.y, size.width, size.height);
	} ,"color");
};
