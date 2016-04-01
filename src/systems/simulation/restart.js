"use strict";
function isMouseInside(game, viewPort, container) {
	var position = game.entities.get(container, "position");
	var size = game.entities.get(container, "size");
	var mouse = game.inputs.mouse;
	var viewPortPosition = game.entities.get(viewPort, "position");
	var mouseX = mouse.x + viewPortPosition.x;
	return mouseX >= position.x &&
		mouseX <= position.x + size.width &&
		mouse.y >= position.y &&
		mouse.y <= position.y + size.height;

}
var background = 0;
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function restart(entity, elapsed) { // eslint-disable-line no-unused-vars
		if (game.inputs.buttonPressed("jump")) {
			isMouseInside(game, background, entity);
		}
		if ((game.inputs.buttonPressed("jump") || game.inputs.buttonPressed("restart")) && isMouseInside(game, background, entity)) {
			game.switchScene("main");
		}
	}, "gameOverScreen");

};
