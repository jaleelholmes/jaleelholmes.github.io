(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
        
        
            
            
        };
        
        

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',
                x:600,
                y:groundY},
                {type: 'sawblade',
                x:400,
                y:groundY},
                {type: 'sawblade',
                x:800,
                y:groundY} ,
                
               {type: 'sawblade',
                x:500,
                y:groundY},
                
                
              
            
                
            ]
            
            
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE

        
        var createSawBlade = function(x,y){
            
                
                 
            var hitZoneSize = 25;
            var damageFromObstacle = 10 ;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            
            myObstacle.y = y;
            
            game.addGameItem(myObstacle);
            
              var sawbladeBitmap = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(sawbladeBitmap);
            
            sawbladeBitmap.x = -25;
            
            sawbladeBitmap.y = -25;
            
          
        
         
        };
        
        
        // This is tricky code
        // createSawBlade(600,450);
        
        // createSawBlade(400,350);
        
        // createSawBlade(500,340);
        
        var gameItems =levelData.gameItems;
        
        function createitem(item){
            
            console.log(item);
            
        var x = item.x ;
        
        var y = item.y ;
        
         console.log(item.x);
         
         createSawBlade(x,y);
            
        }
        
        gameItems.forEach(createitem);
            
        
        
    
        
        
        
        
        
                
                
            


    };
})(window);
