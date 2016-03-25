"use strict";
function isMouseInside(game, container) {
	var position = game.entities.get(container, "position");
	var size = game.entities.get(container, "size");
	var mouse = game.inputs.mouse;
	console.log("mouse.x: " + mouse.x);
	console.log("mouse.y: " + mouse.y);
	console.log("position: " , position);
	console.log("size " , size);
	return mouse.x >= position.x &&
		mouse.x <= position.x + size.width &&
		mouse.y >= position.y &&
		mouse.y <= position.y + size.height;

}
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function restart(entity, elapsed) { // eslint-disable-line no-unused-vars
		if (game.inputs.buttonPressed("jump")) {
			isMouseInside(game, entity);
		}
		if (game.inputs.buttonPressed("jump") && isMouseInside(game, entity)) {
			game.switchScene("main");
		}
	}, "gameOverScreen");

};
