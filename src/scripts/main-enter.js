"use strict";

var saveData = require("splat-ecs/lib/save-data");
module.exports = function(game) { // eslint-disable-line no-unused-vars
	var player = game.entities.find("player") [0];
	saveData.get("highscore", function(err, hs) {
		if (hs !== undefined) {
			game.entities.set(player, "highscore", hs.highscore);
		}
	});

	game.scaleCanvasToFitRectangle(288,512);

};
