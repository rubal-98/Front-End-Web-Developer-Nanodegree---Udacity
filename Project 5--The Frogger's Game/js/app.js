//global variable

var level = 0;
var x;
var y;

// Enemies our player must avoid
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.start1();
};

//this creates a random speed for the enemy and positions it
Enemy.prototype.start1 = function() {
    this.speed = Math.floor(Math.random() * 200 + 200);
    this.x = -100;
    this.y = (Math.floor(Math.random() * 3) + 1) * 83 - 15;
}

//this updates the speed of enemy object
Enemy.prototype.update = function(dt) {
    if (this.x < 500)
        this.x += this.speed * dt;
    else {
        this.x = -100;
        this.start1();
    }
};

//this function renders the enemies on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font = "30px serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.clearRect(10, 50, 500, -50);
    ctx.fillText("SCORE: " + player.score, 10, 38);
    if (level == 0) {
        ctx.fillStyle = "white";


        ctx.strokeRect(52, 252, 400, 90);
        ctx.fillRect(52, 252, 400, 90);
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "24px serif";
        ctx.fillText("Press Enter to Play", 250, 300);
    }
};

//player class
var Player = function() {
    this.sprite = "images/char-princess-girl.png";
    this.score = 0;
    this.start1();
};

//this starts the player and place it on the desired location
Player.prototype.start1 = function() {
    this.col = 2;
    this.row = 5;
};

//this renders the player
Player.prototype.render = function() {
    this.x = this.col * 100;
    this.y = this.row * 83 - 30;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//this function handles the key pressed and ensures that the player is within boundaries
Player.prototype.handleInput = function(keypress) {
    if (level) {
        if (keypress === "left" && this.col > 0 && this.col <= 4) {
            this.col = this.col - 1;
        } else if (keypress === "right" && this.col >= 0 && this.col < 4) {
            this.col = this.col + 1;
        } else if (keypress == "up" && this.row > 0 && this.row <= 5) {
            this.row = this.row - 1;
        } else if (keypress == "down" && this.row >= 0 && this.row < 5) {
            this.row = this.row + 1;
        }
    }
    else if (level === 0) {
        if (keypress == "enter") {
            level = 1;
        }
    }
};

//this function updates the player object
Player.prototype.update = function() {
  var len=allEnemies.length;
    for (i = 0; i < len; i++) {
        var enemy = allEnemies[i];
        // bounding box collision detection
        if (this.x < enemy.x + 70 && this.x + 70 > enemy.x &&
            this.y < enemy.y + 50 && this.y + 60 > enemy.y) {
            this.score = this.score - 1;
            this.start1();
        }
    }
    if (this.row == 0) {
        this.score = this.score + 1;
        this.start1();
    }
};

//enemy objects in an array called allEnemies
var allEnemies = [
    new Enemy(),
    new Enemy(),
    new Enemy()
];
//player object
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        13: "enter"
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
