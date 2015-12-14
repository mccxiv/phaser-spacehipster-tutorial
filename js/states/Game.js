var SpaceHipster = SpaceHipster || {};

SpaceHipster.Game = {
	create: function() {
		this.explosionSound = this.game.add.audio('explosion');
		this.collectSound = this.game.add.audio('collect');

		this.game.world.setBounds(0, 0, 800, 800);
		this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');

		this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playership');
		this.player.scale.setTo(2);
		this.player.animations.add('fly', [0, 1, 2, 3], 3, true);
		this.player.animations.play('fly');

		this.playerScore = 0;

		this.game.physics.arcade.enable(this.player);
		this.playerSpeed = 120;
		this.player.body.collideWorldBounds = true;

		this.game.physics.arcade.collide(this.player, this.asteroids, null, this);

		this.generateAsteroids();
	},

	update: function() {
		if (this.game.input.activePointer.justPressed()) {
			this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
		}

		this.game.camera.follow(this.player);
		this.game.physics.arcade.collide(this.player, this.asteroids, this.hitAsteroid, null, this);
	},

	hitAsteroid: function(player, asteroid) {
		this.explosionSound.play();

		var emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
		emitter.makeParticles('playerParticle');
		emitter.minParticleSpeed.setTo(-200, -200);
		emitter.maxParticleSpeed.setTo(200, 200);
		emitter.gravity = 0;
		emitter.start(true, 3000, null, 100);

		this.player.kill();
		this.game.time.events.add(3800, this.gameOver, this);
	},

	generateAsteroids: function() {
		this.asteroids = this.game.add.group();

		this.asteroids.enableBody = true;
		this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;

		var numAsteroids = this.game.rnd.integerInRange(20, 60);
		var asteroid;

		for (var i = 0; i < numAsteroids; i++) {
			asteroid = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
			asteroid.scale.setTo(this.game.rnd.integerInRange(10, 40)/30);

			asteroid.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
			asteroid.body.velocity.y = this.game.rnd.integerInRange(-20, 20);

			asteroid.body.immovable = true;
			asteroid.body.collideWorldBounds = true;
		}
	},

	gameOver: function() {
		this.game.state.start('MainMenu', true, false, this.playerScore);
	}
};