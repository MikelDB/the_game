const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private platforms: Phaser.Physics.Arcade.StaticGroup;
    private player: Phaser.Physics.Arcade.Sprite;
    private cursors;
    private score: number;
    private scoreText: Phaser.GameObjects.Text;
    private stars: Phaser.Physics.Arcade.Group;
    private gameOver: boolean;
    private bombs: Phaser.Physics.Arcade.Group;
    private lastDirection: string;

    constructor() {
      super(sceneConfig);
      this.score = 0;
      this.lastDirection = 'right';
    }

    public preload() {
      this.load.image('planet', 'assets/ScapeMars/planet.jpg');
      this.load.image('ground', 'images/platform.png');
      this.load.image('star', 'images/star.png');
      this.load.image('bomb', 'images/bomb.png');
      this.load.multiatlas('player', 'assets/ScapeMars/player/texture.json', 'assets/ScapeMars/player');
    }
   
    public create() {
      this.physics.world.setBounds(0, 0, 1920, 600);
      const background = this.add.image(960, 100, 'planet');

      this.platforms = this.physics.add.staticGroup();

      this.platforms.create(400, 575, 'ground').setScale(20, 1).refreshBody().setAlpha(0);

      this.player = this.physics.add.sprite(100, 450, 'player', 'robot11-run0.png');

      this.player.setBounce(0.2);
      this.player.setCollideWorldBounds(true);

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNames('player', { 
          start: 1, 
          end: 24,
          prefix: 'left-robot11-run',
          suffix: '.png'
        }),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
          key: 'idle-left',
          frames: this.anims.generateFrameNames('player', { 
            start: 1, 
            end: 2,
            prefix: 'left-robot11-idle',
            suffix: '.png'
          }),
          frameRate: 20
      });

      this.anims.create({
        key: 'idle-right',
        frames: this.anims.generateFrameNames('player', { 
          start: 1, 
          end: 2,
          prefix: 'right-robot11-idle',
          suffix: '.png'
        }),
        frameRate: 20
    });

      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNames('player', { 
            start: 1, 
            end: 24,
            prefix: 'right-robot11-run',
            suffix: '.png'
          }),
          frameRate: 20,
          repeat: -1
      });

      this.physics.add.collider(this.player, this.platforms);

      this.cursors = this.input.keyboard.createCursorKeys();

      this.cameras.main.setBounds(0, -450, background.displayWidth, background.displayHeight);
      this.cameras.main.startFollow(this.player);

    }
   
    public update() {
      if (this.cursors.left.isDown)
      {
          this.player.setVelocityX(-160);

          this.player.anims.play('left', true);

          this.lastDirection = 'left';
      }
      else if (this.cursors.right.isDown)
      {
          this.player.setVelocityX(160);

          this.player.anims.play('right', true);

          this.lastDirection = 'right';
      }
      else
      {
          this.player.setVelocityX(0);
          if (this.lastDirection === 'right') {
            this.player.anims.play('idle-right');
          } else {
            this.player.anims.play('idle-left');
          }
          
      }

      if (this.cursors.up.isDown && this.player.body.touching.down)
      {
          this.player.setVelocityY(-330);
      }
    }
  }