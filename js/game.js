var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'game');
var PhaserGame = function () {
    //Кондидат на удаление
    this.zombie = null;
    this.zombies = null;
    this.mummys = null;
    this.wasStanding = false;
    this.edgeTimer = 0;
    this.platform = null;
	this.bird = null;
    this.player = null;   
	this.birds = null;
    this.kolobok = null;
    this.platforms = null;
    this.cloudsLvl1 = null;
    this.facing = 'left';  
    this.jumpTimer = 0;   
    this.cursors = null;
    this.staticPlatLvl2 = null; 
    this.time = null;
    this.totalGameSec = null;
    this.timesText = null;
    
    //Уровни
	this.bgImgMenu = null;
	this.bgColorLvl1 = null;
	this.treesLvl1 = null;
	this.treesLvl2 = null;
	this.groundLvl2 = null;
    
    this.icePlatform = null;
    this.cloudPlatform = null;
    this.portal = null;
    this.throns = null;
    this.stars = null;
	this.score = 0;
	this.scoreText;
	 
    this.stationary = null;   
    this.locked = false;
    this.lockedTo = null;
    this.wasLocked = false;
    this.willJump = false;
    this.lvl = null;
	
    //Кнопки для звука
    this.music = null;    
    this.musicEnable = true;
    this.music = null; 
	this.coinsMusic = null;
	this.winnerMusic = null;
   
    //Кнопки для меню игры
    this.btnStrGame = null;
    this.btnSound = null;    
    this.btnlevels = false;
    this.btnLevel1 = false;
    this.btnLevel2 = false;    
    this.btnLevel3 = false;    
    this.btnLevel4 = false;    
    this.btnLevel5 = false;    
    this.btnLevel6 = false;    
    
	//Кнопки для здоровья
    this.health = null;
    this.health2 = null;
    this.health3 = null;
    this.life = null;   
    this.living = true;
    
    //Кнопки для временного меню
    this.textMenu = null;
    this.Resume = null;
    this.Exit = null;
    this.SoundEnable = true;
    this.soundText = null;
    
    this.cordX = null;
	this.cordY = null;
	this.cordTPX = null;
	this.cordTPY = null;
    this.count = null;
    this.resaul = null;
	
	this.bugs ;
	this.index = 0;
	this.data ;
	this.pos = [];
    
    this.timeLife = 0;
    this.reverseTimeLife = null/* = 20*/;
    
    this.totalGameSec = null/* = 20*/;
    this.gameTimer;
    
    this.timer = null;
    this.loop = null;
    this.t1 = null;
    this.t2 = null;
    this.t3 = null;
    this.t4 = null;
    this.t5 = null;
    this.t6 = null;
};
PhaserGame.prototype = {
    init: function () {
        this.game.renderer.renderSession.roundPixels = true;
//        this.world.resize(640, 2000);
//        this.physics.arcade.skipQuadTree = false;  
        //this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function () {
        //Спрайты для игры      
        this.load.image('bgColorLvl1', 'assets/bgColorLvl1.png');
        this.load.image('bgColorLvl3', 'assets/bgColorLvl3.png');
        this.load.image('bgColorLvl5', 'assets/bgColorLvl5.png');
        this.load.image('cloudsLvl1', 'assets/cloudsLvl1.png');
        this.load.image('treesLvl1','assets/treesLvl1.png');
        this.load.image('treesLvl2','assets/treesLvl2.png');
        this.load.image('planet2','assets/planet2.png');
        this.load.image('planet','assets/planet.png');
        this.load.image('groundLvl2','assets/ground2.png');		
        this.load.image('groundLvl3','assets/ground3.png');		
        this.load.image('platform', 'assets/platform.png');      
        this.load.image('platform8', 'assets/platform8.png');      
        this.load.image('spacePlatform', 'assets/spacePlatform.png');
        this.load.image('spacePlatformSlide', 'assets/spacePlatformSlide.png');
        this.load.image('pesok', 'assets/pesok.png');
        this.load.image('pesokSlide', 'assets/pesokSlide.png');       
        this.load.image('icePlatform', 'assets/icePlatform.png');        
        this.load.image('cloudPlatform', 'assets/cloudPlatform.png');             
        this.load.image('cloudPlatformGold', 'assets/cloudPlatformGold.png');             
        this.load.image('portal', 'assets/portal.png');             
        this.load.image('throns', 'assets/throns.png');             
        this.load.image('health','assets/heart.png');		
        this.load.image('star','assets/star.png');		
        this.load.image('diamond','assets/diamond.png');      
		this.load.spritesheet('dude', 'assets/dude.png', 32, 48);	
		this.load.spritesheet('kolobok', 'assets/kolobok.png', 116,116);		
		this.load.spritesheet('asteroid', 'assets/asteroid.png', 72,72);		
		this.load.spritesheet('bird', 'assets/bird.png', 180,170);		
		this.load.spritesheet('bird2', 'assets/bird2.png', 119,100);		
		this.load.spritesheet('bird3', 'assets/bird3.png', 109,80);		
		this.load.spritesheet('bird4', 'assets/bird4.png', 75,60);		
		this.load.spritesheet('bird5', 'assets/bird5.png', 100,60);		
		this.load.spritesheet('bird6', 'assets/bird6.png', 109,90);		
		this.load.spritesheet('bird7', 'assets/bird7.png', 80,55);		
		this.load.spritesheet('bird8', 'assets/bird8.png', 82,65);		
		//Спрайты для меню игры
        this.load.image('bgImgMenu','assets/catastrophi.png');
        this.load.spritesheet('flixel-button','assets/flixel-button.png',80,20);
        this.load.spritesheet('flixel-button-levels','assets/flixel-button-levels.png',80,20);
        this.load.spritesheet('flixel-button-level1','assets/flixel-button-level1.png',80,20);
        this.load.spritesheet('flixel-button-level2','assets/flixel-button-level2.png',80,20);
        this.load.spritesheet('flixel-button-level3','assets/flixel-button-level3.png',80,20);
        this.load.spritesheet('flixel-button-level4','assets/flixel-button-level4.png',80,20);
        this.load.spritesheet('flixel-button-level5','assets/flixel-button-level5.png',80,20);
        this.load.spritesheet('flixel-button-level6','assets/flixel-button-level6.png',80,20);
        this.load.spritesheet('flixel-button-sound','assets/flixel-button-sound.png',80,20);        
        //Все аудиозвуки используемые в игре
        this.load.audio('level','audio/level.mp3');
        this.load.audio('winner','audio/winner.wav');
        this.load.audio('jump','audio/jump.wav');
        this.load.audio('coins','audio/coins.wav');
        this.load.audio('selection','audio/selection.wav');        
    },
    create: function () {       
        this.makeMenu();        
    },
    update: function () {            
        if(this.living == true){
            if(this.lvl == 1 && this.life >= 0)
                this.updatelvl1();
            if(this.lvl == 2 && this.life >= 0)
                this.updateLvl2(); 
            if(this.lvl == 3 && this.life >= 0)
                this.updatelvl3(); 
            if(this.lvl == 4 && this.life >= 0)
                this.updatelvl4();
             if(this.lvl == 5 && this.life >= 0)
                this.updatelvl5();
             if(this.lvl == 6 && this.life >= 0)
                this.updatelvl6();
        }
    },    
    //Блок с меню игры
    makeMenu: function(){       
        this.stage.backgroundColor = "#83aa44";
        this.bgImgMenu = this.add.image(50,50,'bgImgMenu');
        this.bgImgMenu.fixedToCamera = true;
        this.bgImgMenu.scale.setTo(0.7);        
        this.music = this.add.audio('level');
		this.music.loop = true;
		this.music.play();
		this.coinsMusic = this.add.audio('coins');
		this.winnerMusic = this.add.audio('winner');
        
        this.btnStrGame = this.makeButton('flixel-button', 465, 100);
        this.btnStrGame.fixedToCamera = true;
		this.btnlevels = this.makeButton('flixel-button-levels', 465, 140);
        this.btnlevels.fixedToCamera = true;  	
        this.btnSound = this.makeButton('flixel-button-sound', 465, 180);
        this.btnSound.fixedToCamera = true;        
        this.btnLevel1 = this.makeButton('flixel-button-level1', 465, 220);
        this.btnLevel1.fixedToCamera = true;        
        this.btnLevel2 = this.makeButton('flixel-button-level2', 465, 260);
        this.btnLevel2.fixedToCamera = true;        
        this.btnLevel3 = this.makeButton('flixel-button-level3', 465, 300);
        this.btnLevel3.fixedToCamera = true;        
        this.btnLevel4 = this.makeButton('flixel-button-level4', 465, 340);
        this.btnLevel4.fixedToCamera = true;        
        this.btnLevel5 = this.makeButton('flixel-button-level5', 465, 380);
        this.btnLevel5.fixedToCamera = true;        
        this.btnLevel6 = this.makeButton('flixel-button-level6', 465, 420);
        this.btnLevel6.fixedToCamera = true;        
        
		this.btnStrGame.onInputDown.add(this.lvl1, this);
		this.btnlevels.onInputDown.add(this.hiddenMenu, this);
		this.btnSound.onInputDown.add(this.playMusic, this);
        this.btnLevel1.onInputDown.add(this.lvl1, this);
        this.btnLevel2.onInputDown.add(this.lvl2, this); 
        this.btnLevel3.onInputDown.add(this.lvl3, this);  
        this.btnLevel4.onInputDown.add(this.lvl4, this);  
        this.btnLevel5.onInputDown.add(this.lvl5, this);  
        this.btnLevel6.onInputDown.add(this.lvl6, this);  
    },//Создание самого меню
    hiddenMenu: function(){     
        //this.btnStrGame.visible =! this.btnStrGame.visible;
        //this.btnSound.visible =! this.btnSound.visible;
        //this.btnlevels.visible =! this.btnlevels.visible;
        this.btnLevel1.visible =! this.btnLevel1.visible;
        this.btnLevel2.visible =! this.btnLevel2.visible;        
        this.btnLevel3.visible =! this.btnLevel3.visible;        
        this.btnLevel4.visible =! this.btnLevel4.visible;        
        this.btnLevel5.visible =! this.btnLevel5.visible;        
        this.btnLevel6.visible =! this.btnLevel6.visible;        
    },//Скрытие меню
    makeButton: function(name, x, y){ 
        this.pick = this.add.audio('selection');
        var button = this.add.button(x, y, name, function(){this.pick.play();}, this, 0, 1, 2);
        button.name = name;
        button.scale.set(2, 1.5);
        button.smoothed = false;
        button.inputEnabled = true;        
        button.text = "dffd";
        return button;       
    },//Создание кнопок меню   
    playMusic: function(item){ 
        if(this.musicEnable == true){             
            this.musicEnable = false;
            this.music.pause();
        }
        else{
            this.musicEnable = true;
            this.music.resume();
        }       
    },//Фотовая музыка
    createPlayer: function(x,y){
        this.player = this.add.sprite(x, y, 'dude');
        this.jupm = this.add.audio('jump');
        this.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.player.body.setSize(20, 32, 5, 16);
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('turn', [4], 20, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);
        this.camera.follow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();       
        this.physics.arcade.gravity.y = 750;        
    },//Создание главного персонажа
    contralPlayer: function(){
        var standing = this.player.body.blocked.down || this.player.body.touching.down || this.locked;
        this.player.body.velocity.x = 0;
        if (this.cursors.left.isDown){
            this.player.body.velocity.x = -300;
            if (this.facing !== 'left'){
                this.player.play('left');
                this.facing = 'left';
            }
        }
        else if (this.cursors.right.isDown){
            this.player.body.velocity.x = 300;
            if (this.facing !== 'right'){
                this.player.play('right');
                this.facing = 'right';
            }
        }
        else{
            if (this.facing !== 'idle'){
                this.player.animations.stop();                
                
                if (this.facing === 'left'){
                    this.player.frame = 0;                    
                }
                else{
                    this.player.frame = 5;
                }
                this.facing = 'idle';
            }
        }
        if (standing && this.cursors.up.isDown && this.time.time > this.jumpTimer){
            this.jupm.play();
            if (this.locked){
                this.cancelLock();                
            }
            this.willJump = true;            
        }
        if (this.locked){
            this.checkLock();
        }
    },//Управление новым персонажем
    healthPlayer: function(){
        var x = 15,y = 15;
        this.health = this.add.sprite(x,y,'health');
        this.health.scale.setTo(0.1);
        this.health.fixedToCamera = true;        
        this.health2 = this.add.sprite(x+15,y,'health');
        this.health2.scale.setTo(0.1);
        this.health2.fixedToCamera = true;        
        this.health3 = this.add.sprite(x+30,y,'health');
        this.health3.scale.setTo(0.1);
        this.health3.fixedToCamera = true; 
    },    
    createPlatformsDoodleJump: function(plat1, plat2, sclX, sclY){
        this.platforms = this.add.physicsGroup();
        var x = 0;
        var y = 64;
        for (var i = 0; i <= this.count; i++){
            if (i == 0){
               var platform = this.platforms.create(x, y, 'portal');
                platform.scale.setTo(0.4, 0.4);
            } else {               
                var type = i % 2 === 1 ? plat1 : plat2;
                var platform = this.platforms.create(x, y, type);
                platform.scale.setTo(sclX, sclY);
            }
            platform.body.velocity.x = this.rnd.between(150, 200);            
                        
            if (Math.random() > 0.5) {
                platform.body.velocity.x *= -1;
            }
            x += 200;
            if (x >= 600) {
                x = 0;
            }
            y+= 104; //высота между платформами            
        }
        this.platforms.setAll('body.allowGravity', false);
        this.platforms.setAll('body.immovable', true);  
       
    },//Создание платформ
    createPlatform: function(x,y,key, SCLX, SLCY){
        this.staticPlatLvl2 = this.add.physicsGroup();
        this.staticPlatLvl2.enableBody = true;
        var plat = this.staticPlatLvl2.create(x,y,key);
        plat.scale.setTo(SCLX, SCLX);
        this.staticPlatLvl2.setAll('body.allowGravity', false);
        this.staticPlatLvl2.setAll('body.immovable', true);
    },       
    timeGame: function(){
        this.timeLife++;
        this.timesText.text = this.reverseTimeLife--;
        if (this.timeLife <= this.totalGameSec){
            return true;
        }
        this.reverseTimeLife = this.totalGameSec;
        this.timesText.text = this.reverseTimeLife;
        this.timeLife = 0;        
		this.levelPlayer();        
    },//Время на DoodleJump   
    customSep: function (player, platform) {
        if (!this.locked && player.body.velocity.y > 0){
            this.locked = true;
            this.lockedTo = platform;
            platform.playerLocked = true;
            player.body.velocity.y = 0;
        }
    },//Делает облака, пталформы твердыми
    checkLock: function () {
        this.player.body.velocity.y = 0;
            //После спрыгивания игрок не повторяет траекторию облока
            if (this.player.body.right < this.lockedTo.body.x || this.player.body.x > this.lockedTo.body.right){
                this.cancelLock();
            }
        
    },//Есть ли игрок на движ. облаке
    cancelLock: function () {
        this.wasLocked = true;
        this.locked = false;
    },//Запрет повторения движ игрока как облако
    preRender: function () {
       if(this.player ){ 
            if (this.game.paused){
                //работает даже если игра на паузе
                return;
            }
            if (this.locked || this.wasLocked){
                this.player.x += this.lockedTo.deltaX;
                this.player.y = this.lockedTo.y - 48;
                if (this.player.body.velocity.x !== 0){
                    this.player.body.velocity.y = 0;
                }
            }
            if (this.willJump){
                this.willJump = false;
                if (this.lockedTo && this.lockedTo.deltaY < 0 && this.wasLocked){
                    //Если платформа вверх, добавим её скорость к игроку  
                    this.player.body.velocity.y = -500 + (this.lockedTo.deltaY * 10);
                }
                else{
                    this.player.body.velocity.y = -500;
                }

                this.jumpTimer = this.time.time + 0;
            }
            if (this.wasLocked){
                this.wasLocked = false;
                this.lockedTo.playerLocked = false;
                this.lockedTo = null;
            }
       }

    },
    wrapPlatform: function (platform) {
        if (platform.body.velocity.x < 0 && platform.x <= -160){
            platform.x = 640;
        }
        else if (platform.body.velocity.x > 0 && platform.x >= 640){
            platform.x = -160;
        }
    },//Появление платформ по циклу     
    setFriction: function (player, platform) {
        if (platform.key === 'icePlatform' || platform.key == "spacePlatformSlide" || platform.key == "pesok"){
            player.body.x -= platform.body.x - platform.body.prev.x;            
        }
        if(platform.key == 'portal'){ 
           // game.world.removeAll();
            //console.log(this.lvl);
            this.stopTime();   
            this.lvl++;
            //console.log(this.lvl);
            this.winnerMusic.play();
                                
            
            if(this.player){
               // this.player.body = null;
                this.player.kill();
                console.log("setFriction игрока удален");
            }
            if(this.platforms)
                this.platforms.destroy();
            if(this.bgColorLvl1)
                this.bgColorLvl1.destroy();
            if(this.cloudsLvl1)
                this.cloudsLvl1.destroy();           
            if(this.treesLvl1)                
                this.treesLvl1.destroy();
            if(this.treesLvl2)
                this.treesLvl2.destroy();
            if(this.stationary)
                this.stationary.destroy();            
            if(this.clouds)
                this.clouds.destroy();
            if(this.staticPlatLvl2)
                this.staticPlatLvl2.destroy(); 
             if(this.health)
                this.health.destroy();
            if(this.health2)
                this.health2.destroy();
            if(this.health3)
                this.health3.destroy();
			if(this.stars)
                this.stars.destroy();
            if(this.birds)
				this.birds.destroy();
            if(this.timesText)
                this.timesText.destroy();
            this.btnStrGame.destroy();
            this.btnSound.destroy();
			this.btnlevels.destroy();
            this.btnLevel1.destroy();
            this.btnLevel2.destroy();
            this.btnLevel3.destroy();
            this.btnLevel4.destroy();
            this.btnLevel5.destroy();
            this.btnLevel6.destroy();
            this.bgImgMenu.destroy();           
            this.startTime();
            
            switch(this.lvl){
                case 1: this.lvl1(); break;
                case 2: this.world.resize(2000, 600); this.lvl2(); break;
                case 3: this.lvl3(); break;                
                case 4: this.world.resize(2000, 600); this.lvl4(); break;
                case 5: this.lvl5(); break;
                case 6: this.world.resize(2000, 600); this.lvl6(); break;
                case 7: alert("Конец игры !!!"); break;
            }
            //this.game.paused = false;
            alert("Вы прошли уровень !!!");           
        }       
    },//Переход на след. уровень
    nextLevel: function(player, platform ){        
        if(platform.key == 'portal'){ 
            //game.world.removeAll();
            //console.log(this.lvl);
             this.stopTime();   
            this.lvl++;
            //console.log(this.lvl);
            this.winnerMusic.play()
            if(this.player){
                this.player.body = null;
                this.player.destroy();
                console.log(" игрока удален");
            }
            if(this.platforms)
                this.platforms.destroy();
            if(this.bgColorLvl1)
                this.bgColorLvl1.destroy();
            if(this.cloudsLvl1)
                this.cloudsLvl1.destroy();           
            if(this.treesLvl1)                
                this.treesLvl1.destroy();
            if(this.treesLvl2)
                this.treesLvl2.destroy();
            if(this.stationary)
                this.stationary.destroy();
            if(this.clouds)
                this.clouds.destroy();
            if(this.staticPlatLvl2)
                this.staticPlatLvl2.destroy();
            if(this.birds)
				this.birds.destroy();
            if(this.health)
                this.health.destroy();
            if(this.health2)
                this.health2.destroy();
            if(this.health3)
                this.health3.destroy();
            if(this.timesText)
                this.timesText.destroy();
            this.btnStrGame.destroy();
            this.btnSound.destroy();
			this.btnlevels.destroy();
            this.btnLevel1.destroy();
            this.btnLevel2.destroy();            
            this.btnLevel3.destroy();
            this.btnLevel4.destroy();
            this.btnLevel5.destroy();
            this.btnLevel6.destroy();
            this.bgImgMenu.destroy();
            
            this.startTime();
            
            switch(this.lvl){
                case 1: this.lvl1(); break;
                case 2: this.world.resize(2000, 600); this.lvl2(); break;
                case 3: this.lvl3(); break;
                case 4: this.world.resize(2000, 600); this.lvl4(); break;
                case 5: this.lvl5(); break;
                case 6: this.world.resize(2000, 600); this.lvl6(); break;
                case 7: alert("Все прошёл"); break;
            }            
           alert("Вы прошли уровень !!!");
        }        
    },  
	killPlayer: function(player, plat ){
		if (plat.key == 'kolobok'){
            this.player.body.x -=100;
			this.levelPlayer(); 
        }            
	},
    levelPlayer: function(){
        this.game.paused = true;
		switch(this.life){			
			case 2: {				
                this.reverseTimeLife = this.totalGameSec;   
				this.health3.destroy();
				this.life--; 
                this.player.body.x = this.cordX;
                this.player.body.y = this.cordY;
				break;
			}
			case 1: {		
                this.reverseTimeLife = this.totalGameSec;   
				this.health2.destroy();
				this.life--;
                this.player.body.x = this.cordX;
                this.player.body.y = this.cordY;
               	break;
			}
			case 0:{             
    				this.music.stop();                    
                    this.health.destroy();
                    if(this.player)
    				    this.player.kill();
                    if(this.platforms)
    				    this.platforms.destroy();
                    if(this.bgColorLvl1)
    				    this.bgColorLvl1.destroy();
                    if(this.cloudsLvl1)
    				    this.cloudsLvl1.destroy();
                    if(this.treesLvl1)
    				    this.treesLvl1.destroy();
                    if(this.treesLvl2)
    				    this.treesLvl2.destroy();
                    if(this.stationary)
                        this.stationary.destroy();                   
                    if(this.clouds)
                        this.clouds.destroy();
                    if(this.staticPlatLvl2)
                        this.staticPlatLvl2.destroy();
                    if(this.bugs)
                        this.bugs.destroy();
					if(this.throns)
                        this.throns.destroy();
                    if(this.birds)
						this.birds.destroy();
					if(this.stars)
                        this.stars.destroy();
					if(this.scoreText)
						this.scoreText.visible= false;
                    if(this.timesText){
                        this.timesText.destroy();
                        //this.timesText.visible = false;
                    }
                    this.stopTime();
    				this.life--;
					this.score = 0;
					this.lvl = -1;
                    this.living = false;
    				//this.world.resize(640, 600);
                    this.btnStrGame.destroy();
                    this.btnSound.destroy();
					this.btnlevels.destroy();
                    this.btnLevel1.destroy();
                    this.btnLevel2.destroy();
                    this.btnLevel3.destroy();
                    this.btnLevel4.destroy();
                    this.btnLevel5.destroy();
                    this.btnLevel6.destroy();                    
                    this.bgImgMenu.destroy();                    
                    //this.gameTimer.destroy();
                    this.makeMenu();                    
                    break;
			}           
		}           
            this.game.paused = false;
    },
	killPlayerThrons: function(player, plat){
		if(plat.key == "throns"){				
                this.game.paused = true;
                this.player.body.x = this.cordX;
                this.player.body.y = this.cordY;
                this.game.paused = false;
				
				this.levelPlayer();   
			}  
	},
	collectStar: function (player, star){
		this.coinsMusic.play();
		star.kill();		
		this.score += 10;		
		this.scoreText.text = 'Счет: ' + this.score;
		if(star.key == "diamond"){
			this.createPlatform(this.cordTPX,this.cordTPY,'portal',0.3,0.3);
		}
	},    
    createBird: function(name, corX, corY, scaleX, scaleY, animate){		
		var bird = this.birds.create(corX, corY, name);
        bird.anchor.setTo(0.5, 0.5);
        bird.body.velocity.x = this.rnd.between(100, 300);
		if(bird.key == "bird"){
			bird.animations.add('left',[0,1,2,3,4,5,6,7,8,9,10,11,12,13],10, true);
            bird.animations.play('left', 10, true);            
		}
        if(bird.key == "bird2"){
			bird.animations.add('left',[0,1,2,3,4,5,6,7,8],10, true);
            bird.animations.play('left', 10, true);
		}
        if(bird.key == "bird3"){
			bird.animations.add('right',[0,1,2,3,4,5,6,7,8],10, true);
            bird.animations.play('right', 10, true);
            bird.body.velocity.x *= -1;
		}
        if(bird.key == "bird4"){
			bird.animations.add('right',[0,1,2,3,4,5,6,7,8],10, true);
            bird.animations.play('right', 10, true);
            bird.body.velocity.x *= -1;
		}
        if(bird.key == "bird5"){
			bird.animations.add('right',[0,1,2,3,4,5,6,7,8],10, true);
            bird.animations.play('right', 10, true);
            bird.body.velocity.x *= -1;
		}
        if(bird.key == "bird6"){
			bird.animations.add('right',[0,1,2,3,4,5,6,7,8],10, true);
            bird.animations.play('right', 10, true);
            bird.body.velocity.x *= -1;
		}
        if(bird.key == "bird7"){
			bird.animations.add('right',[0,1,2,3,4,5,6,7,8],10, true);
            bird.animations.play('right', 10, true);
            bird.body.velocity.x *= -1;
		}
        if(bird.key == "bird8"){
			bird.animations.add('right',[0,1,2,3,4,5,6,7,8],10, true);
            bird.animations.play('right', 10, true);
            bird.body.velocity.x *= -1;
		}
        if(bird.key == "asteroid"){
            bird.animations.add('left',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],10, true);
            bird.animations.play('left', 15, true);
        }		
		if (Math.random() > 0.5 && bird.key == "asteroid") {
                bird.body.velocity.x *= -1;
        }
        bird.scale.setTo(scaleX, scaleY);
		
		this.birds.setAll('body.allowGravity', false);
        this.birds.setAll('body.immovable', true);
        this.input.pixelPerfectClick = true;
	},
	wrapBird: function(bird){		
		if (bird.body.velocity.x < 0 && bird.x <= -160){			
            bird.x = 640;
        }
        else if (bird.body.velocity.x > 0 && bird.x >= 640){			
            bird.x = -160;
        }
	},
	setBirdFriction: function(player, bird){
       this.player.body.y +=70;			
       this.levelPlayer() 
	},
    startTime: function(){
        switch(this.lvl){
            case 1: this.t1 = this.time.events; break;      
            case 2: this.t2 = this.time.events; break;      
            case 3: this.t3 = this.time.events; break;      
            case 4: this.t4 = this.time.events; break;      
            case 5: this.t5 = this.time.events; break;      
            case 6: this.t6 = this.time.events; break;      
        }
    },
    stopTime: function(){
        switch(this.lvl){
            case 1: this.t1.stop(); this.t1.destroy(); break;      
            case 2: this.t2.stop(); this.t2.destroy(); break;      
            case 3: this.t3.stop(); this.t3.destroy(); break;      
            case 4: this.t4.stop(); this.t4.destroy(); break;      
            case 5: this.t5.stop(); this.t5.destroy(); break;      
            case 6: this.t6.stop(); this.t6.destroy(); break;      
        }
    },
	//Уровни
    lvl1: function(){       
        this.living = true;
        this.life = 2;
        this.count = 9;
        this.lvl = 1;		        
        this.totalGameSec = 20;
		this.reverseTimeLife = this.totalGameSec;        
        this.hiddenMenu();
        this.btnStrGame.visible =! this.btnStrGame.visible;
        this.btnSound.visible =! this.btnSound.visible;
        this.btnlevels.visible =! this.btnlevels.visible;
        this.game.renderer.renderSession.roundPixels = true;
        this.world.resize(640, 1100); 
        this.physics.arcade.skipQuadTree = false;
        
        this.bgColorLvl1 = this.add.tileSprite(0, 0, 640, 600, 'bgColorLvl1');
        this.bgColorLvl1.fixedToCamera = true;		
		this.cloudsLvl1 = this.add.tileSprite(0, 0, 640, 600, 'cloudsLvl1');
        this.cloudsLvl1.fixedToCamera = true;        
		this.treesLvl1 = this.add.sprite(0, 1010, 'treesLvl1');		      
		this.timesText = this.add.text(this.world.width/2, 30, this.totalGameSec, { font: '18px Arial', fill: '#5830ff' });
		this.timesText.anchor.setTo(0.5);
		this.timesText.fixedToCamera = true;
        this.cordX = 320;
        this.cordY = 950;
        this.createPlayer(this.cordX,this.cordY); 
        this.createPlatformsDoodleJump("platform", "icePlatform", 1.3, 1);
        this.healthPlayer();
		this.birds = this.add.physicsGroup();
		this.createBird("bird", 0, 860, 0.3, 0.3, false);				
		this.createBird("bird3", 0, 750, 0.6, 0.6, false);		
        this.createBird("bird2", 0, 560, 0.3, 0.3, false);
		this.createBird("bird7", 0, 150, 0.5, 0.5, false);		
        if(this.living == true && this.lvl == 1){
            //this.timer = this.time.events.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.startTime();            
            this.t1.loop(Phaser.Timer.SECOND, this.timeGame, this); 
            this.t1.start();
            
            //this.t1.loop(Phaser.Timer.SECOND, this.timeGame, this);
        }
    },//Создание уровня 1
    updatelvl1: function(){        
		this.cloudsLvl1.tilePosition.y = -(this.camera.y * 0.7);        
		var standing = this.player.body.blocked.down || this.player.body.touching.down;
		this.platforms.forEach(this.wrapPlatform, this);//Движение по циклу платформ        
		this.physics.arcade.collide(this.player, this.platforms, this.setFriction, null, this);//Столкновение
		this.birds.forEach(this.wrapBird, this);//Движение по циклу платформ        
		this.physics.arcade.collide(this.player, this.birds, this.setBirdFriction, null, this);
		this.contralPlayer();//Управление персонажем        
    },//Одновление уровня 1
    lvl2: function(){
       
        this.lvl = 2;
        this.living = true; 
        this.life = 2;
		this.energy = false;
		this.totalGameSec = 30;
        this.reverseTimeLife = this.totalGameSec;
		this.cordX = 20;
        this.cordY = 300;
		this.cordTPX = 1800;
        this.cordTPY = 100;
		this.btnStrGame.visible =! this.btnStrGame.visible;
        this.btnSound.visible =! this.btnSound.visible;
        this.btnlevels.visible =! this.btnlevels.visible;
        this.hiddenMenu();        
        
        this.game.renderer.renderSession.roundPixels = true;
        this.world.resize(2000, 600);
        this.physics.arcade.skipQuadTree = false;
        
        this.bgColorLvl1 = this.add.tileSprite(0, 0, 640, 600, 'bgColorLvl1');       
        this.bgColorLvl1.fixedToCamera = true;		
        this.cloudsLvl1 = this.add.tileSprite(0, 0, 640, 600, 'cloudsLvl1');       
        this.cloudsLvl1.fixedToCamera = true; 
        this.treesLvl2 = this.add.tileSprite(0, 300, 640, 200, 'treesLvl2');
        this.treesLvl2.fixedToCamera = true;
        
        this.stationary = this.add.physicsGroup();
        this.stationary.enableBody = true;
        
        this.stationary.create(0, 500, 'groundLvl2');       
        this.stationary.create(800, 550, 'groundLvl2');		
        this.stationary.create(1700, 500, 'groundLvl2'); 
		
        this.stationary.create(600, 400, 'platform');
        this.stationary.create(800, 300, 'platform');
        this.stationary.create(1000, 200, 'platform');  
		this.stationary.create(1850, 330, 'platform');       
		
        this.throns = this.add.physicsGroup();
        this.throns.enableBody = true;
		this.throns.create(500, 570, 'throns');
        this.throns.create(650, 570, 'throns');
		this.throns.create(1300, 570, 'throns');
		this.throns.create(1400, 570, 'throns');
		this.throns.create(1500, 570, 'throns');
		this.throns.create(1550, 570, 'throns');		
		  
		this.stationary.setAll('body.allowGravity', false);
        this.stationary.setAll('body.immovable', true);
		
		this.throns.setAll('body.allowGravity', false);
        this.throns.setAll('body.immovable', true);
		var tweenData = {x: 0, y: 0};
		tween = this.make.tween(tweenData).to({x:300, y :0},2000, "Sine.easeInOut");
		tween.yoyo(true);			
		this.data = tween.generateData(60);
		this.kolobok = this.add.group();
		this.bugs = game.add.group();
		this.bugs.enableBody = true;
		
		this.pos.push(new Phaser.Point(170,489));
		this.pos.push(new Phaser.Point(900,538));
		this.pos.push(new Phaser.Point(1200,538));		
		
		this.bugs.create(this.pos[0].x, this.pos[0].y, 'kolobok');
		this.bugs.create(this.pos[1].x, this.pos[1].y, 'kolobok');
		this.bugs.create(this.pos[2].x, this.pos[2].y, 'kolobok');
		
		this.bugs.setAll('body.allowGravity', false);       
        this.bugs.setAll('body.immovable', true);	
		
		this.bugs.getAt(0).anchor.setTo(0.5,0.5);
		this.bugs.getAt(0).scale.setTo(0.4);
		this.bugs.getAt(1).anchor.setTo(0.5,0.5);
		this.bugs.getAt(1).scale.setTo(0.4);
		this.bugs.getAt(2).anchor.setTo(0.5,0.5);
		this.bugs.getAt(2).scale.setTo(0.4);
		
		this.stars = this.add.group(); 
		this.stars.enableBody = true; 		
		this.stars.create(470,150,'star');
		this.stars.create(470,300,'star');
		this.stars.create(470,485,'star');
		this.stars.create(650,377,'star'); 
		this.stars.create(850,277,'star'); 
		this.stars.create(1050,177,'star'); 
		this.stars.create(1600,130,'star'); 
		this.stars.create(1600,230,'star'); 
		this.stars.create(1600,330,'star'); 
		this.stars.create(1570,180,'star'); 
		this.stars.create(1570,280,'star'); 
		this.stars.create(1550,230,'star');
		
		this.stars.create(1630,180,'star'); 
		this.stars.create(1630,280,'star'); 
		this.stars.create(1660,230,'star'); 
		this.stars.create(1900,450,'diamond'); 
		this.stars.setAll('body.allowGravity', false); 
		this.stars.setAll('body.immovable', true);
		this.scoreText = this.add.text(100, 15, "Счет: 0", { font: '18px Arial', fill: '#5830ff' });
        this.scoreText.text = 'Счет: ' + this.score;
        this.scoreText.fixedToCamera = true;		
		this.clouds = this.add.physicsGroup();
        var cloud1 = new cloudPlatform(this.game, 200, 400, 'cloudPlatform', this.clouds);
        cloud1.addMotionPath([
            { x: "+200", xSpeed: 3000, xEase: "Linear", y: "-150", ySpeed: 5000, yEase: "Sine.easeIn" },
            { x: "-200", xSpeed: 3500, xEase: "Linear", y: "-150", ySpeed: 3500, yEase: "Sine.easeOut" },
            { x: "-200", xSpeed: 2000, xEase: "Linear", y: "+150", ySpeed: 2000, yEase: "Sine.easeIn" },
            { x: "+200", xSpeed: 2000, xEase: "Linear", y: "+150", ySpeed: 2000, yEase: "Sine.easeOut" }
        ]);
        var cloud2 = new cloudPlatform(this.game, 1350, 96, 'cloudPlatform', this.clouds);
        cloud2.addMotionPath([
            { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+400", ySpeed: 2000, yEase: "Sine.easeIn" },
            { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-400", ySpeed: 2000, yEase: "Sine.easeOut" }
        ]);		
		this.clouds.callAll('start');       
        this.healthPlayer();        
        this.createPlayer(this.cordX, this.cordY);       
        this.timesText = this.add.text(320, 30, this.totalGameSec, { font: '18px Arial', fill: '#5830ff' });
		this.timesText.anchor.setTo(0.5);
		this.timesText.fixedToCamera = true;
        if(this.living == true && this.lvl == 2){
            this.startTime();
            this.t2.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.t2.start();  
            
            //this.time.events.repeat(Phaser.Timer.SECOND*this.totalGameSec, 3, this.timeGame, this);
        }
		/*
		//  Анимация облоков
        this.clouds = this.add.physicsGroup();
        var cloud1 = new cloudPlatform(this.game, 100, 450, 'cloudPlatform', this.clouds);
        cloud1.addMotionPath([
            { x: "+200", xSpeed: 3000, xEase: "Linear", y: "-200", ySpeed: 5000, yEase: "Sine.easeIn" },
            { x: "-200", xSpeed: 3500, xEase: "Linear", y: "-200", ySpeed: 3500, yEase: "Sine.easeOut" },
            { x: "-200", xSpeed: 2000, xEase: "Linear", y: "+200", ySpeed: 2000, yEase: "Sine.easeIn" },
            { x: "+200", xSpeed: 2000, xEase: "Linear", y: "+200", ySpeed: 2000, yEase: "Sine.easeOut" }
        ]);
        var cloud2 = new cloudPlatform(this.game, 800, 96, 'cloudPlatform', this.clouds);
        cloud2.addMotionPath([
            { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+200", ySpeed: 2000, yEase: "Sine.easeIn" },
            { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeOut" }
        ]);
        var cloud3 = new cloudPlatform(this.game, 1300, 290, 'cloudPlatform', this.clouds);
        cloud3.addMotionPath([
            { x: "+500", xSpeed: 4000, xEase: "Expo.easeIn", y: "-200", ySpeed: 3000, yEase: "Linear" },
            { x: "-500", xSpeed: 4000, xEase: "Expo.easeOut", y: "+200", ySpeed: 3000, yEase: "Linear" }
        ]);
        
        this.clouds.callAll('start');
        
        this.zombies = this.add.physicsGroup();        
        var zombie1 = new cloudPlatform(this.game, 110,310, 'zombie', this.zombies);
        zombie1.addMotionPath([
            { x: "+200", xSpeed: 2500, xEase: "Linear", y: "+0", ySpeed: 2500, yEase: "Sine.easeIn" },
            { x: "-200", xSpeed: 2500, xEase: "Linear", y: "-0", ySpeed: 2500, yEase: "Sine.easeOut" }
        ]);
        zombie1.animations.add('left',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],15, true); 
        zombie1.animations.add('right',[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],15, true);        
        zombie1.animations.play('left', 10, true);
        this.zombies.callAll('start');
        this.physics.arcade.enable(zombie1);  
        
        this.mummys = this.add.physicsGroup();        
        var mummy1 = new cloudPlatform(this.game, 310,310, 'mummy', this.mummys);
        mummy1.addMotionPath([
            { x: "+200", xSpeed: 6000, xEase: "Linear", y: "+0", ySpeed: 6000, yEase: "Sine.easeIn" },
            { x: "-200", xSpeed: 6000, xEase: "Linear", y: "-0", ySpeed: 6000, yEase: "Sine.easeOut" }
        ]);
        mummy1.animations.add('left',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,15,16,17],2, true); 
        mummy1.animations.add('right',[21,22,23,24,25,26,27,28,29,30,31,32,33,34,34,35],10, true); 
        
        mummy1.animations.play('left', 10, true);
        this.mummys.callAll('start');
        this.physics.arcade.enable(this.mummys);  
		*/
    },//Создание уровня 2    
    updateLvl2: function(){
        if(this.player)
        { 
            this.treesLvl2.tilePosition.x = -(this.camera.x * 0.9);        
            this.cloudsLvl1.tilePosition.x = -(this.camera.x * 0.9);
            this.physics.arcade.collide(this.player, this.stationary);       
            
            this.physics.arcade.collide(this.player,  this.clouds, this.customSep, null, this); 
            this.contralPlayer();

            this.bugs.getAt(0).x = this.pos[0].x + this.data[this.index].x;
            this.bugs.getAt(0).y = this.pos[0].y + this.data[this.index].y;		
 
            this.bugs.getAt(1).x = this.pos[1].x + (this.data[this.index].x / 2);
            this.bugs.getAt(1).y = this.pos[1].y + this.data[this.index].y;

            this.bugs.getAt(2).x = this.pos[2].x - this.data[this.index].x;
            this.bugs.getAt(2).y = this.pos[2].y + this.data[this.index].y;

            this.bugs.getAt(0).angle += 9;
            this.bugs.getAt(1).angle += 9;
            this.bugs.getAt(2).angle += 9;
			
            this.index++;
			
            if (this.index === this.data.length) {
                this.index = 0;
            }
			this.physics.arcade.collide(this.player, this.bugs ,this.killPlayer, null, this);
			this.physics.arcade.collide(this.player, this.throns, this.killPlayerThrons, null, this);
			this.physics.arcade.collide(this.player, this.stars, this.collectStar, null, this);
            this.physics.arcade.collide(this.player, this.staticPlatLvl2, this.nextLevel, null,this); 
        }
    },//Обновление уровня 2
    lvl3: function(){       
        this.living = true;
        this.life = 2;
        this.count = 20;
        this.lvl = 3;        
        this.totalGameSec = 80;
		this.reverseTimeLife = this.totalGameSec;        
        this.btnStrGame.visible =! this.btnStrGame.visible;
        this.btnSound.visible =! this.btnSound.visible;
        this.btnlevels.visible =! this.btnlevels.visible;
        this.hiddenMenu();
        this.game.renderer.renderSession.roundPixels = true;
        this.world.resize(640, 2260); 
        this.physics.arcade.skipQuadTree = false;
        
        this.bgColorLvl1 = this.add.tileSprite(0, 0, 640, 600, 'bgColorLvl3');
        this.bgColorLvl1.fixedToCamera = true;	
		this.treesLvl1 = this.add.sprite(0, 1900, 'planet2');		
        this.timesText = this.add.text(this.world.width/2, 30, this.totalGameSec, { font: '18px Arial', fill: '#5830ff' });
		this.timesText.anchor.setTo(0.5);
		this.timesText.fixedToCamera = true;
        this.cordX = 320;
        this.cordY = 2140;
        this.createPlayer(this.cordX,this.cordY); 
        this.createPlatformsDoodleJump("spacePlatformSlide", "spacePlatform", 0.4, 0.5);
        this.healthPlayer();        
        this.birds = this.add.physicsGroup();
		this.createBird("asteroid", 0, 2000, 0.5,0.5, false);
		this.createBird("asteroid", 0, 1800, 0.5,0.5, false);
		this.createBird("asteroid", 0, 1600, 0.5,0.5, false);
		this.createBird("asteroid", 0, 1380, 0.5,0.5, false);
		this.createBird("asteroid", 0, 1170, 0.5,0.5, false);
		this.createBird("asteroid", 0, 960, 0.5,0.5, false);
		this.createBird("asteroid", 0, 770, 0.5,0.5, false);
		this.createBird("asteroid", 0, 630, 0.5,0.5, false);
		this.createBird("asteroid", 0, 350, 0.5,0.5, false);        
        if(this.living == true && this.lvl == 3){
           //this.time.events.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.startTime();
            this.t3.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.t3.start();            
        }
    },//Создание уровня 3
    updatelvl3: function(){
		var standing = this.player.body.blocked.down || this.player.body.touching.down;
        this.platforms.forEach(this.wrapPlatform, this);//Движение по циклу платформ        
        this.physics.arcade.collide(this.player, this.platforms, this.setFriction, null, this);//Столкновение
        this.birds.forEach(this.wrapBird, this);//Движение по циклу платформ
        this.physics.arcade.collide(this.player, this.birds, this.setBirdFriction, null, this);
        this.contralPlayer();//Управление персонажем        
    },//Одновление уровня 3
    lvl4: function(){
        this.living = true; 
        this.lvl = 4;
		this.totalGameSec = 30;
        this.reverseTimeLife = this.totalGameSec;
        this.cordX = 0;
        this.cordY = 200;
        this.cordTPX = 1050;
        this.cordTPY = 300;
        this.btnStrGame.visible =! this.btnStrGame.visible;
        this.btnSound.visible =! this.btnSound.visible;
        this.btnlevels.visible =! this.btnlevels.visible;
        this.hiddenMenu();        
        this.game.renderer.renderSession.roundPixels = true;
        this.world.resize(2000, 600);
        this.physics.arcade.skipQuadTree = false;
        
        this.bgColorLvl1 = this.add.tileSprite(0, 0, 640, 600, 'bgColorLvl3');       
        this.bgColorLvl1.fixedToCamera = true;
        this.cloudsLvl1 = this.add.tileSprite(0, 0, 640, 600, 'planet');       
        this.cloudsLvl1.fixedToCamera = true;
        
		this.stationary = this.add.physicsGroup();
        this.stationary.enableBody = true;
        
        this.stationary.create(0, 500, 'groundLvl2');       
        this.stationary.create(800, 550, 'groundLvl2');		
        this.stationary.create(1700, 500, 'groundLvl2'); 
		
        this.stationary.create(600, 400, 'spacePlatform').scale.setTo(0.3);
        this.stationary.create(800, 300, 'spacePlatform').scale.setTo(0.3);
        this.stationary.create(1000, 200, 'spacePlatform').scale.setTo(0.3);  
		this.stationary.create(1850, 330, 'spacePlatform').scale.setTo(0.3);		
       
		
        this.throns = this.add.physicsGroup();
        this.throns.enableBody = true;
		this.throns.create(500, 570, 'throns');
        this.throns.create(650, 570, 'throns');
		this.throns.create(1300, 570, 'throns');
		this.throns.create(1400, 570, 'throns');
		this.throns.create(1500, 570, 'throns');
		this.throns.create(1550, 570, 'throns');
		  
		this.stationary.setAll('body.allowGravity', false);
        this.stationary.setAll('body.immovable', true);
		
		this.throns.setAll('body.allowGravity', false);
        this.throns.setAll('body.immovable', true);
		
		var tweenData = {x: 0, y: 0};
		tween = this.make.tween(tweenData).to({x:300, y :0},2000, "Sine.easeInOut");
		tween.yoyo(true);			
		this.data = tween.generateData(60);
		this.kolobok = this.add.group();
		this.bugs = game.add.group();
		this.bugs.enableBody = true;
		
		this.pos.push(new Phaser.Point(170,489));
		this.pos.push(new Phaser.Point(900,538));
		this.pos.push(new Phaser.Point(1200,538));		
		
		this.bugs.create(this.pos[0].x, this.pos[0].y, 'kolobok');
		this.bugs.create(this.pos[1].x, this.pos[1].y, 'kolobok');
		this.bugs.create(this.pos[2].x, this.pos[2].y, 'kolobok');
		
		this.bugs.setAll('body.allowGravity', false);       
        this.bugs.setAll('body.immovable', true);	
		
		this.bugs.getAt(0).anchor.setTo(0.5,0.5);
		this.bugs.getAt(0).scale.setTo(0.4);
		this.bugs.getAt(1).anchor.setTo(0.5,0.5);
		this.bugs.getAt(1).scale.setTo(0.4);
		this.bugs.getAt(2).anchor.setTo(0.5,0.5);
		this.bugs.getAt(2).scale.setTo(0.4);
		
		this.stars = this.add.group(); 
		this.stars.enableBody = true; 
		this.stars.create(470,150,'star');
		this.stars.create(470,150,'star');
		this.stars.create(470,300,'star');
		this.stars.create(470,485,'star');
		this.stars.create(650,377,'star'); 
		this.stars.create(850,277,'star'); 
		this.stars.create(1050,177,'star'); 
		this.stars.create(1600,130,'star'); 
		this.stars.create(1600,230,'star'); 
		this.stars.create(1600,330,'star'); 
		this.stars.create(1570,180,'star'); 
		this.stars.create(1570,280,'star'); 
		this.stars.create(1550,230,'star');
		
		this.stars.create(1630,180,'star'); 
		this.stars.create(1630,280,'star'); 
		this.stars.create(1660,230,'star'); 
		this.stars.create(1900,450,'diamond'); 
		this.stars.setAll('body.allowGravity', false); 
		this.stars.setAll('body.immovable', true);
		this.scoreText = this.add.text(100, 15, "Счет: 0", { font: '18px Arial', fill: '#5830ff' });
        this.scoreText.text = 'Счет: ' + this.score;
        this.scoreText.fixedToCamera = true;		
		this.clouds = this.add.physicsGroup();
        var cloud1 = new cloudPlatform(this.game, 200, 400, 'cloudPlatform', this.clouds);
        cloud1.addMotionPath([
            { x: "+200", xSpeed: 3000, xEase: "Linear", y: "-150", ySpeed: 5000, yEase: "Sine.easeIn" },
            { x: "-200", xSpeed: 3500, xEase: "Linear", y: "-150", ySpeed: 3500, yEase: "Sine.easeOut" },
            { x: "-200", xSpeed: 2000, xEase: "Linear", y: "+150", ySpeed: 2000, yEase: "Sine.easeIn" },
            { x: "+200", xSpeed: 2000, xEase: "Linear", y: "+150", ySpeed: 2000, yEase: "Sine.easeOut" }
        ]);
        var cloud2 = new cloudPlatform(this.game, 1350, 96, 'cloudPlatform', this.clouds);
        cloud2.addMotionPath([
            { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+400", ySpeed: 2000, yEase: "Sine.easeIn" },
            { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-400", ySpeed: 2000, yEase: "Sine.easeOut" }
        ]);		
		this.clouds.callAll('start');       
        this.healthPlayer();
        this.life = 2;
        this.createPlayer(this.cordX, this.cordY);
        this.timesText = this.add.text(320, 30, this.totalGameSec, { font: '18px Arial', fill: '#5830ff' });
		this.timesText.anchor.setTo(0.5);
		this.timesText.fixedToCamera = true;
        if(this.living == true && this.lvl == 4)
            //this.time.events.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.startTime();
            this.t4.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.t4.start();            
    },//Создание уровня 4
    updatelvl4: function(){        
        this.physics.arcade.collide(this.player, this.stationary);       
        this.physics.arcade.collide(this.player, this.staticPlatLvl2, this.nextLevel, null,this);         
        this.physics.arcade.collide(this.player,  this.clouds, this.customSep, null, this);
        this.contralPlayer();
        
        
        this.bugs.getAt(0).x = this.pos[0].x + this.data[this.index].x;
        this.bugs.getAt(0).y = this.pos[0].y + this.data[this.index].y;		

        this.bugs.getAt(1).x = this.pos[1].x + (this.data[this.index].x / 2);
        this.bugs.getAt(1).y = this.pos[1].y + this.data[this.index].y;

        this.bugs.getAt(2).x = this.pos[2].x - this.data[this.index].x;
        this.bugs.getAt(2).y = this.pos[2].y + this.data[this.index].y;

        this.bugs.getAt(0).angle += 9;
        this.bugs.getAt(1).angle += 9;
        this.bugs.getAt(2).angle += 9;

        this.index++;

        if (this.index === this.data.length) {
            this.index = 0;
        }
        this.physics.arcade.collide(this.player, this.bugs ,this.killPlayer, null, this);
        this.physics.arcade.collide(this.player, this.throns, this.killPlayerThrons, null, this);
        this.physics.arcade.collide(this.player, this.stars, this.collectStar, null, this);
    },//Обновление уровня 4
    lvl5: function(){       
        this.living = true;
        this.life = 2;
        this.count = 30;
        this.lvl = 5;
        this.totalGameSec = 150;
		this.reverseTimeLife = this.totalGameSec;   
        this.btnStrGame.visible =! this.btnStrGame.visible;
        this.btnSound.visible =! this.btnSound.visible;
        this.btnlevels.visible =! this.btnlevels.visible;
        this.hiddenMenu();
        this.game.renderer.renderSession.roundPixels = true;
        this.world.resize(640, 3260); 
        this.physics.arcade.skipQuadTree = false;
        
        this.bgColorLvl1 = this.add.tileSprite(0, 0, 640, 600, 'bgColorLvl5');
        this.bgColorLvl1.fixedToCamera = true;	
		
        
        this.cordX = 320;
        this.cordY = 3240;
        this.createPlayer(this.cordX,this.cordY); 
        this.createPlatformsDoodleJump("pesok", "pesokSlide", 0.5, 0.3);
        this.healthPlayer();
        
        this.birds = this.add.physicsGroup();
		this.createBird("bird3", 0, 3050, 0.6,0.6, false);
		this.createBird("bird", 0, 2840, 0.3,0.3, false);
		this.createBird("bird2", 0, 2640, 0.4,0.4, false);
		this.createBird("bird4", 0, 2400, 0.7,0.7, false);
		this.createBird("bird5", 0, 2200, 0.5,0.5, false);
		this.createBird("bird2", 0, 2000, 0.4,0.4, false);
		this.createBird("bird3", 0, 1800, 0.5,0.5, false);
		this.createBird("bird4", 0, 1600, 0.7,0.7, false);
		this.createBird("bird5", 0, 1400, 0.5,0.5, false);
		this.createBird("bird6", 0, 1180, 0.5,0.5, false);
		this.createBird("bird7", 0, 940, 0.8,0.8, false);
		this.createBird("bird8", 0, 755, 0.6,0.6, false);		
        this.timesText = this.add.text(this.world.width/2, 30, this.totalGameSec, { font: '18px Arial', fill: '#5830ff' });
		this.timesText.anchor.setTo(0.5);
		this.timesText.fixedToCamera = true;
        if(this.living == true && this.lvl == 5){
            //this.time.events.loop(Phaser.Timer.SECOND, this.timeGame, this); 
            this.startTime();
            this.t5.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.t5.start();            
		}
    },//Создание уровня 3
    updatelvl5: function(){
		var standing = this.player.body.blocked.down || this.player.body.touching.down;
        this.platforms.forEach(this.wrapPlatform, this);//Движение по циклу платформ        
        this.physics.arcade.collide(this.player, this.platforms, this.setFriction, null, this);//Столкновение
        this.birds.forEach(this.wrapBird, this);//Движение по циклу платформ
        this.physics.arcade.collide(this.player, this.birds, this.setBirdFriction, null, this);
        this.contralPlayer();//Управление персонажем        
    },//Одновление уровня 3
    lvl6: function(){
        this.lvl = 6;
        this.living = true; 
        this.life = 2;
		this.energy = false;
		this.totalGameSec = 120;
        this.reverseTimeLife = this.totalGameSec;
		this.cordX = 50;
        this.cordY = 490;
		this.cordTPX = 1200;
        this.cordTPY = 450;
		this.btnStrGame.visible =! this.btnStrGame.visible;
        this.btnSound.visible =! this.btnSound.visible;
        this.btnlevels.visible =! this.btnlevels.visible;
        this.hiddenMenu();        
        
        this.game.renderer.renderSession.roundPixels = true;
        this.world.resize(2000, 600);
        this.physics.arcade.skipQuadTree = false;
        
        
        
        this.bgColorLvl1 = this.add.tileSprite(0, 0, 640, 600, 'bgColorLvl5');       
        this.bgColorLvl1.fixedToCamera = true;
        
        this.stationary = this.add.physicsGroup();
        this.stationary.enableBody = true;
        this.stationary.create(900, 300, 'platform8').scale.setTo(0.3);
        this.stationary.create(1200, 400, 'platform8').scale.setTo(0.3);
        this.stationary.create(1450, 300, 'platform8').scale.setTo(0.3);
        this.stationary.create(1200, 150, 'platform8').scale.setTo(0.3);
        
        
		this.stationary.create(1850, 330, 'platform');		
		
        
        this.throns = this.add.physicsGroup();
        this.throns.enableBody = true;
		this.throns.create(400, 570, 'throns');
		this.throns.create(500, 570, 'throns');
		this.throns.create(600, 570, 'throns');        
        this.throns.create(700, 570, 'throns');
        this.throns.create(800, 570, 'throns');
		this.throns.create(900, 570, 'throns');
		this.throns.create(1000, 570, 'throns');
		this.throns.create(1100, 570, 'throns');
		this.throns.create(1200, 570, 'throns');
		this.throns.create(1300, 570, 'throns');
		this.throns.create(1400, 570, 'throns');
		this.throns.create(1500, 570, 'throns');
		this.throns.create(1600, 570, 'throns');
		this.stationary.create(0, 550, 'groundLvl3');       
		this.stationary.create(1750, 500, 'groundLvl3'); 
        this.stationary.setAll('body.allowGravity', false);
        this.stationary.setAll('body.immovable', true);
		
		this.throns.setAll('body.allowGravity', false);
        this.throns.setAll('body.immovable', true);
		
		var tweenData = {x: 0, y: 0};
		tween = this.make.tween(tweenData).to({x:300, y :0},2000, "Sine.easeInOut");
		tween.yoyo(true);			
		this.data = tween.generateData(60);
		this.kolobok = this.add.group();
		this.bugs = game.add.group();
		this.bugs.enableBody = true;
		
		this.pos.push(new Phaser.Point(850,240));
		this.pos.push(new Phaser.Point(1350,240));
		this.pos.push(new Phaser.Point(1420,200));		
		this.pos.push(new Phaser.Point(1220,200));		
		
		this.bugs.create(this.pos[0].x, this.pos[0].y, 'kolobok');
		this.bugs.create(this.pos[1].x, this.pos[1].y, 'kolobok');
		this.bugs.create(this.pos[2].x, this.pos[2].y, 'kolobok');
		this.bugs.create(this.pos[3].x, this.pos[3].y, 'kolobok');
		
		this.bugs.setAll('body.allowGravity', false);       
        this.bugs.setAll('body.immovable', true);	
		
		this.bugs.getAt(0).anchor.setTo(0.5,0.5);
		this.bugs.getAt(0).scale.setTo(0.4);
		this.bugs.getAt(1).anchor.setTo(0.5,0.5);
		this.bugs.getAt(1).scale.setTo(0.4);
		this.bugs.getAt(2).anchor.setTo(0.5,0.5);
		this.bugs.getAt(2).scale.setTo(0.4);
		this.bugs.getAt(3).anchor.setTo(0.5,0.5);
		this.bugs.getAt(3).scale.setTo(0.4);
        
		this.stars = this.add.group(); 
		this.stars.enableBody = true;
        this.stars.create(1250,200,'diamond');
		
		this.stars.create(200,485,'star');
		this.stars.create(300,485,'star');
		this.stars.create(680,377,'star'); 
		this.stars.create(900,277,'star'); 
		this.stars.create(1050,177,'star'); 
		
		
		this.stars.create(1630,180,'star'); 
		this.stars.create(1630,280,'star'); 
		this.stars.create(1660,230,'star'); 		 
		this.stars.setAll('body.allowGravity', false); 
		this.stars.setAll('body.immovable', true);
        
		this.scoreText = this.add.text(100, 15, "Счет: 0", { font: '18px Arial', fill: '#5830ff' });
        this.scoreText.fixedToCamera = true;		
		
        this.clouds = this.add.physicsGroup();
        var cloud2 = new cloudPlatform(this.game, 1000, 500, 'cloudPlatform', this.clouds);
        cloud2.addMotionPath([
            { x: "+600", xSpeed: 5000, xEase: "Linear", y: "-0", ySpeed: 5000, yEase: "Sine.easeIn" },
            { x: "-600", xSpeed: 5000, xEase: "Linear", y: "+0", ySpeed: 5000, yEase: "Sine.easeOut" }
        ]);
        var cloud1 = new cloudPlatform(this.game, 600, 96, 'cloudPlatform', this.clouds);
        cloud1.addMotionPath([
            { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+400", ySpeed: 2000, yEase: "Sine.easeIn" },
            { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-400", ySpeed: 2000, yEase: "Sine.easeOut" }
        ]);		
		this.clouds.callAll('start');       
        this.healthPlayer();        
        this.createPlayer(this.cordX, this.cordY);       
        this.timesText = this.add.text(320, 30, this.totalGameSec, { font: '18px Arial', fill: '#5830ff' });
		this.timesText.anchor.setTo(0.5);
		this.timesText.fixedToCamera = true;
        if(this.living == true && this.lvl == 6){
            this.startTime();
            this.t6.loop(Phaser.Timer.SECOND, this.timeGame, this);
            this.t6.start();           
        }
    },//Создание уровня 6
    updatelvl6: function(){        
        this.physics.arcade.collide(this.player, this.stationary);       
        this.physics.arcade.collide(this.player, this.staticPlatLvl2, this.nextLevel, null,this);         
        this.physics.arcade.collide(this.player,  this.clouds, this.customSep, null, this);
        this.contralPlayer();
        
        this.bugs.getAt(0).x = this.pos[0].x + this.data[this.index].x;
        this.bugs.getAt(0).y = this.pos[0].y + this.data[this.index].y;		

        this.bugs.getAt(1).x = this.pos[1].x + this.data[this.index].x;
        this.bugs.getAt(1).y = this.pos[1].y + this.data[this.index].y;

        this.bugs.getAt(2).x = this.pos[2].x - this.data[this.index].x;
        this.bugs.getAt(2).y = this.pos[2].y + this.data[this.index].y;
        
        this.bugs.getAt(3).x = this.pos[3].x - this.data[this.index].x;
        this.bugs.getAt(3).y = this.pos[3].y + this.data[this.index].y;

        this.bugs.getAt(0).angle += 9;
        this.bugs.getAt(1).angle += 9;
        this.bugs.getAt(2).angle += 9;
        this.bugs.getAt(3).angle += 9;

        this.index++;

        if (this.index === this.data.length) {
            this.index = 0;
        }
        
        this.physics.arcade.collide(this.player, this.bugs ,this.killPlayer, null, this);
        this.physics.arcade.collide(this.player, this.throns, this.killPlayerThrons, null, this);
        this.physics.arcade.collide(this.player, this.stars, this.collectStar, null, this);
    }//Обновление уровня 4
};
cloudPlatform = function (game, x, y, key, group) {
        if (typeof group === 'undefined') { group = game.world; }
        Phaser.Sprite.call(this, game, x, y, key);
        game.physics.arcade.enable(this);
        this.anchor.x = 0.5;
        this.body.customSeparateX = true;
        this.body.customSeparateY = true;
        this.body.allowGravity = false;
        this.body.immovable = true;
        this.playerLocked = false;
        group.add(this);

    };
cloudPlatform.prototype = Object.create(Phaser.Sprite.prototype);
cloudPlatform.prototype.constructor = cloudPlatform;
cloudPlatform.prototype.addMotionPath = function (motionPath) {
    this.tweenX = this.game.add.tween(this.body);
    this.tweenY = this.game.add.tween(this.body);
    for (var i = 0; i < motionPath.length; i++){
        this.tweenX.to( { x: motionPath[i].x }, motionPath[i].xSpeed, motionPath[i].xEase);
        this.tweenY.to( { y: motionPath[i].y }, motionPath[i].ySpeed, motionPath[i].yEase);
    }
    this.tweenX.loop();
    this.tweenY.loop();
};
cloudPlatform.prototype.start = function () {
    this.tweenX.start();
    this.tweenY.start();

};
cloudPlatform.prototype.stop = function () {
    this.tweenX.stop();
    this.tweenY.stop();
};
game.state.add('Game', PhaserGame, true);