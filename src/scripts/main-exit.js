"use strict";

var player = 2;
var saveData = require("splat-ecs/lib/save-data");
module.exports = function(game) { // eslint-disable-line no-unused-vars

	saveData.get("highscore", function(hs) {
		game.entities.set(player, "highscore", hs);
	});

	game.scaleCanvasToFitRectangle(288,512);


};
