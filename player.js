class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.nombre = null;
      this.ranking = null;
    }
  //hacer referencia a la BD para
  //Saber nuestro contador de jugadores
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })  
    }
  //Función para actualizar el valor de contador de jugadores en la base de datos. 
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });  
    }
  //Actualización de jugadores en la base de datos
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.nombre, 
        distance:this.distance
      }); 
    } 

      static infoJugadores(){
        var jugadoresInfo = database.ref('players');
        jugadoresInfo.on("value",(data)=>{
          datosJugadores = data.val();
        })
      }
      obtenercarrofin(){
        database.ref('carrofin').on("value",(data)=>{
          this.ranking = data.val();
        })
      }
      static actualizacioncarrofin(ranking){
        database.ref('/').update({
          carrofin:ranking
        })
      }
    }