// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
		this.x = this.x + (dt * 50);
		if(this.x > 505) {
			this.x = 0;
		}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	this.sprite = 'images/char-boy.png';
	this.x = 202;
	this.y = 400;
};

Player.prototype.update = function(dt) {
	this.y = this.y + (dt * 50);
	if(this.y > 606) {
		this.y = 0;
	}
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [], enemyLanes = [65, 145, 225];
var enemyCounter;
var enemies;
var player;

for(enemyCounter = 0; enemyCounter < 3; enemyCounter++) {
	enemies = new Enemy(0,enemyLanes[Math.floor(Math.random() * 3)]);
	allEnemies.push(enemies);
}

player = new Player();

Player.prototype.handleInput = function(keyPressed) {
  return;
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
	player.handleInput(allowedKeys[e.keyCode]);

})