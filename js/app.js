/**
 * Creates Enemy Player Piece
 * @constructor
 */
var Enemy = function(x,y) {
	this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
}

/**
 * Creates Player Piece
 * @constructor
 */
var Player = function() {
	this.sprite = 'images/char-pink-girl.png';
	this.x = 0;
	this.y = 400;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [], defaultEnemyLanesX = [-200, -100, 50, 100, 200], defaultEnemyLanesY = [65, 145, 225];
var enemyCounter;
var enemy1, enemy2, enemy3, enemy4, enemy5;
var player;

//Create 5 Enemy pieces
enemy1 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
enemy2 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
enemy3 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
enemy4 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
enemy5 = new Enemy(defaultEnemyLanesX[Math.floor(Math.random() * 5)],defaultEnemyLanesY[Math.floor(Math.random() * 3)]);
allEnemies.push(enemy1,enemy2,enemy3,enemy4,enemy5);

player = new Player();


/**
 * Update Enemy position, required method for game
 * @param {number} dt is a time delta between ticks.
 */
Enemy.prototype.update = function(dt) {
	this.x = this.x + (dt * 50);
	if(this.x > 505) {
		this.x = 0;
	}
}

/**
 * Draw the enemy on the screen, required method for game
 */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

/**
 * Update Player position, required method for game
 */
Player.prototype.update = function() {
	this.checkPlayerCollisions();
	
	
}

/**
 * Draw the Player on the screen, required method for game
 */
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

/**
 * Checks to see if Enemy and Player are in the same X,Y Plane.  If so, Player piece is reset to starting position.
 */
Player.prototype.checkPlayerCollisions = function() {
	var counter;
	if(this.y <60) {
		this.reset();
	}
	for (counter in allEnemies) {
		if(allEnemies[counter].x+70 > this.x+10 && allEnemies[counter].x <this.x+85 && allEnemies[counter].y+5 >= this.y) {
			player.reset();		
		}
	}
}

/**
 * Resets Player piece to bottom of column where collision occured.
 */
Player.prototype.reset = function() {
	this.y = 400;
}

/**
 * Moves Player piece in the direction of arrow key pressed
 * @param {keyPressed} keyPressed is the keyboard key that was pressed.
 */
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

/**
 * Listens for key presses and sends the keys to the Player.handleInput() method
 * @param {e} event is what we are listening for, in this case, key pressed
 */
// This 
// . You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});