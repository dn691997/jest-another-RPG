const inquirer = require('inquirer');
const Player = require('../lib/Player');
const Enemy = require('../lib/Enemy');

function Game() {
	this.roundNumber = 0;
	this.isPlayerTurn = false;
	this.enemies = [];
	this.currentEnemy;
	this.player;
}

Game.prototype.initializeGame = function () {
	this.enemies.push(new Enemy('golbin', 'sword'));
	this.enemies.push(new Enemy('orc', 'baseball bat'));
	this.enemies.push(new Enemy('skeleton', 'axe'));

	this.currentEnemy = this.enemies[0];
};
module.exports = Game;
