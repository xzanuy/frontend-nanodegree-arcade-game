var TILE_WIDTH = 101,
    TILE_HEIGHT = 83;

// Enemies our player must avoid
var Enemy = function(y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 1;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = speed;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x +=  this.speed * dt; 
    
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

      if(this.x > 400){
        this.x = 0;
        this.speed = Math.floor((Math.random() * 100) + 50);
        this.y = Math.floor((Math.random() * 300) + 1); 
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

    else if(this.y < 10){
        this.y = 400;
        alert("You woooooooooon");
    }


allEnemies.forEach(function(enemy){

    if (player.x < enemy.x + enemy.width &&
             player.x + player.width > enemy.x &&
             player.y < enemy.y + enemy.height &&
             player.height + player.y > enemy.y){
          
            player.x = 200;
            player.y = 400;
            console.log("collision with" + i);

         }
});


    // You should multiply  any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys){
    
    
    switch(allowedKeys){
        case "left":
        this.x = this.x - TILE_WIDTH;
        console.log(this.x);
        break;

        case "up":
        this.y = this.y - TILE_HEIGHT;
        console.log(this.y);
        break; 

        case "right":
        this.x = this.x + TILE_WIDTH;
        console.log(this.x);
        break;

        case "down":
        this.y = this.y + TILE_HEIGHT;
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

var player = new Player();

for(var i = 0; i<3; i++){
    allEnemies.push(new Enemy(Math.floor((Math.random() * 300) + 1), Math.floor((Math.random() * 100) + 50)));    
    console.log("one enemi mor");


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


 

    