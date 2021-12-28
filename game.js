class Game {
    constructor(){}
    //Función para rescatar el valor del estado del juego en la base de datos
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      }) 
    }
  //Función para actualizar el estado del juego en la base de datos
    update(state){
      database.ref('/').update({
        gameState: state
      });
   }
  //Espera la respuesta de la base de datos
  //Para que no supere a 4 jugadores en ingresar
    async start(){
      if(gameState === 0){
        player = new Player();
        var numJugadores = await database.ref('playerCount').once("value");
        if(numJugadores.exists()){
          playerCount = numJugadores.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
      //Crea los sprites para los carros
      /*carro1= createSprite(100,200);
      carro1.addImage("carro1",carro1Img);
      carro2= createSprite(300,200);
      carro2.addImage("carro2",carro2Img);
      carro3= createSprite(500,200);
      carro3.addImage("carro3",carro3Img);
      carro4= createSprite(700,200);
      carro4.addImage("carro4",carro4Img);
      carros=[carro1,carro2,carro3,carro4];*/
      } 
    play(){
      form.hide();
      //text("inicio de juego",200,40);
      Player.infoJugadores();
      player.obtenercarrofin();
      if(datosJugadores !== undefined){
        //var pos=50;
        image(pistaImg, 0,-displayHeight*4,displayWidth,displayHeight*5);

        //Indice en el arreglo
        var index = 0;
        //Posición X, Y de los carros
        var x = 175;
        var y;
      
        for(var plr in datosJugadores){
          //suma de uno en uno para recorrer el arreglo de los carros
          index = index + 1;
          x = x + 200;
          //Usa los datos de form y la base de datos para mostrar en pantalla a los sprites de carros
          y = displayHeight - datosJugadores[plr].distance;
          carros[index-1].x = x;
          carros[index-1].y = y;

         /* if(color==="player"+player.index){
            fill("purple");
          }else{
            fill("green");

          }*/
         // pos+=20;
         // text(datosJugadores[color].nombre+": "+datosJugadores[color].distancia,60,pos);
         //seguimiento de la camara a los carros
         if(index === player.index){
           stroke(10);
           fill ("blue");
           ellipse(x,y,60,60);
           carros[index-1].shapeColor = "red";
           camera.position.x = displayWidth/2;
           camera.position.y = carros[index-1].y;
         }
        }

      }
      //acelera el carrito
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10;
        player.update();
      }
      if(player.distance>4000){
         gameState=2;
         player.ranking=player.ranking+1;
         Player.actualizacioncarrofin(player.ranking)
      }
      drawSprites()
      
    }
    final(){
      console.log("fin del juego");
      console.log(player.ranking);
    }
    
    
}
  