"use strict";

function clampToRange(min, max, val) {
	return Math.min(Math.max(val, min), max);
}

function calculateScalingFactor(startingRangeMin, startingRangeMax, endingRangeMin, endingRangeMax) {

	var startingRangeDiff = startingRangeMax - startingRangeMin;
	var endingRangeDiff = endingRangeMax - endingRangeMin;
	return startingRangeDiff * endingRangeDiff;
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("rotateSearch",["playerController2d", "velocity"]);
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = game.entities.get(entity, "velocity");
		var rotation = game.entities.get(entity, "rotation");
		var scalingFactor;
		var vCurrent;
		if (velocity.y < 0) {
			scalingFactor = calculateScalingFactor (-1, 0, (7 * Math.PI / 4), (2 * Math.PI));
			vCurrent = clampToRange(-1, 0, velocity.y);
			rotation.angle = vCurrent * scalingFactor;
		} else {
			scalingFactor = calculateScalingFactor (0, 1, 0, (Math.PI / 2));
			vCurrent = clampToRange(0, 1, velocity.y);
			rotation.angle = vCurrent * scalingFactor;
		}
	}, "rotateSearch");
};
