"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function restart(entity, elapsed) { // eslint-disable-line no-unused-vars
		if (game.inputs.buttonPressed("restart")) {
			game.switchScene("main");
		}
	}, "button");

};
