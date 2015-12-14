var SpaceHipster = SpaceHipster || {};

SpaceHipster.Preload = {
	preload: function() {
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);

		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
		this.preloadBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('space', 'original/assets/images/space.png');
		this.load.image('rock', 'original/assets/images/rock.png');
		this.load.spritesheet('playership', 'original/assets/images/player.png', 12, 12);
		this.load.spritesheet('power', 'original/assets/images/power.png', 12, 12);
		this.load.image('playerParticle', 'original/assets/images/player-particle.png');
		this.load.audio('collect', 'original/assets/audio/collect.ogg');
		this.load.audio('explosion', 'original/assets/audio/explosion.ogg');
	},

	create: function() {
		this.state.start('MainMenu');
	}
};