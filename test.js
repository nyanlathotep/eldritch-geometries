function BaseGame() {
	this.geometry = {
		width: 800,
		height: 500
	};
}

function randint(a,b) {
	return Math.floor(Math.random() * (b-a) + a);
}

BaseGame.prototype.width = function() {
	return this.geometry.width;
}
BaseGame.prototype.height = function() {
	return this.geometry.height;
}

BaseGame.prototype.start = function() {
	Crafty.init(this.width(), this.height(), document.getElementById('game'));
	Crafty.background('black');
	Crafty.e('2D, Canvas, Gravity, Color, Fourway')
		.attr({x: 0, y:0, w:10, h:30})
		.color('red')
		.gravity('Floor')
		.fourway(4)
	for (i = 0; i < 30; i++) {
		Crafty.e('2D, Canvas, Color, Floor')
			.attr({x: randint(0, this.width()-30), y:randint(0, this.height()-30),
				   w: 30, h:30})
			.color('green')
	}
}

Game = new BaseGame();