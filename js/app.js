// Enemies our player must avoid
var Enemy = function(x,y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
}

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
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	this.sprite = 'images/char-pink-girl.png';
	this.x = 0;
	this.y = 400;
}

Player.prototype.update = function() {
	var collision = this.checkPlayerCollisions();
	if(this.y || collision) {
		this.reset();
	}
	
}

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.checkPlayerCollisions = function() {
	var counter;
	
		// write some code that checks if enemy.xPosition >= player.xPosition
		// if true, then set playerCollision = true
		// I hope you know what I mean by "xPosition"; maybe you called that variable something else.
		for (counter in allEnemies) {
			if (player.x < allEnemies[counter].x) {
				return true;
			}
		}
		return false;

}

Player.prototype.reset = function() {
	this.y = 400;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [], defaultEnemyLanesX = [205, 0, 300, 400, 122], defaultEnemyLanesY = [65, 145, 225];
var enemyCounter;
var enemies;
var enemy1, enemy2, enemy3, enemy4, enemy5;
var player;

//for(enemyCounter = 0; enemyCounter < defaultEnemyLanes.length; enemyCounter++) {
	enemy1 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
	enemy2 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
	enemy3 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
	enemy4 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
	enemy5 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
	allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);
//}

player = new Player();

Player.prototype.handleInput = function(keyPressed) {
  if(keyPressed === 'right' && this.x < 400) {
    this.x += 100;
  }

  if(keyPressed ==='left' && this.x > 82) {
    this.x -= 100;
  }

  if(keyPressed === 'down' && this.y < 400) {
    this.y += 85;
  }

  if(keyPressed === 'up' && this.y > 52) {
    this.y -= 85;
  }
}

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
});