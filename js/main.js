var SpaceHipster = SpaceHipster || {};

SpaceHipster.game = new Phaser.Game(700, 300, Phaser.AUTO, '');

SpaceHipster.game.state.add('Boot', SpaceHipster.Boot);
SpaceHipster.game.state.add('Preload', SpaceHipster.Preload);
SpaceHipster.game.state.add('MainMenu', SpaceHipster.MainMenu);
SpaceHipster.game.state.add('Game', SpaceHipster.Game);


SpaceHipster.game.state.start('Boot');