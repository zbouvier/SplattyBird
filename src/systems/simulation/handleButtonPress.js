"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function handleButtonPress(entity, elapsed) { // eslint-disable-line no-unused-vars
		var button = game.entities.get(entity, "button");
		if (game.inputs.buttonPressed("jump") || game.inputs.buttonPressed("restart")) {
			var script = game.require(button.script);
			script(entity, game);
		}
	}, "button");

};
