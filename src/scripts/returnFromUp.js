"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var rotation = game.entities.get(entity, "rotation");
	rotation.angle = 0;
};
