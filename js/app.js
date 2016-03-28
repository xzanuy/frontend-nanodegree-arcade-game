// Enemies our player must avoid
var Enemy = function(y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 1;
    this.y = y;
    this.width = 50;
    this.height = 150;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //  this.x += this.x * dt; 
    
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

      

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.



var Player = function() {

    this.x = 200;
    this.y = 400;
    this.width = 100;
    this.height = 100;
    
    this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function(dt) {

    if(this.x < 0){
        this.x = 0;
    }

    else if(this.x > 400){
        this.x = 400;
    }

    else if(this.y > 400){
        this.y = 400;
    }

    else if(this.y < 0){
        this.y = 0;
    }


if (player.x < allEnemies[0].x + allEnemies[0].width &&
             player.x + player.width > allEnemies[0].x &&
             player.y < allEnemies[0].y + allEnemies[0].height &&
             player.height + player.y > allEnemies[0].y){
            console.log("collision");
         }
    
       
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys){
    
    
    switch(allowedKeys){
        case "left":
        this.x = this.x - 100;
        console.log(this.x);
        break;

        case "up":
        this.y = this.y - 100;
        console.log(this.y);
        break; 

        case "right":
        this.x = this.x + 100;
        console.log(this.x);
        break;

        case "down":
        this.y = this.y + 100;
        console.log(this.y);
        break;

    }
};

Player.prototype.checkCollision = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

     

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
array.push(new Enemy(50))
var player = new Player();


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


 

    