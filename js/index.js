/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

(() => {

    let platforms,
        stars,
        player,
        cursors,
        scoreText;

    let score = 0;

    const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload, create, update });

    function preload() {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        createBackground(game);
        platforms = createPlatforms(game);
        stars = createStars(game);
        player = createPlayer(game);
        cursors = game.input.keyboard.createCursorKeys();
        scoreText = game.add.text(16, 16, getScoreText(score), {
            fontSize: '32px',
            fill: '#000'
        });
    }

    function update() {
        const hitPlatform = game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(stars, platforms);
        game.physics.arcade.overlap(player, stars, (player, star) => score = collectStar(star, score, scoreText));
        updatePlayer(player, cursors, hitPlatform);
    }

})();

function updatePlayer(player, cursors, hitPlatform) {
    player.body.velocity.x = 0;
    if (cursors.left.isDown) {
        player.body.velocity.x = -150;
        player.animations.play('left');
    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = 150;
        player.animations.play('right');
    } else {
        player.animations.stop();
        player.frame = 4;
    }
    if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
        player.body.velocity.y = -350;
    }
}

function collectStar(star, score, scoreText) {
    star.kill();
    const newScore = score += 50;
    scoreText.text = getScoreText(score);
    return newScore;
}

function getScoreText(score) {
    return `Score: ${score}`;
}
function createPlatforms(game) {
    const platforms = game.add.group();
    platforms.enableBody = true;
    const ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    const ledge1 = platforms.create(400, 400, 'ground');
    ledge1.body.immovable = true;
    const ledge2 = platforms.create(-150, 250, 'ground');
    ledge2.body.immovable = true;
    return platforms;
}

function createBackground(game) {
    return game.add.sprite(0, 0, 'sky');
}

function createPlayer(game) {
    const player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity. y = 300;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    return player;
}

function createStars(game) {
    const stars = game.add.group();
    stars.enableBody = true;
    for (let i = 0; i < 12; i++) {
        const star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    return stars;
}

