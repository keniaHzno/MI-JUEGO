class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.saludo = createElement('h2');
      this.title = createElement('h2');
      this.reinicio = createButton('reinicio');

     }
     //Función para esconder despúes de ingresar los nombre de los 4 jugadores
     hide(){
      this.input.hide();
      this.button.hide();
      this.saludo.hide();
      this.title.hide();
    }
  
    display(){
      //Posición del texto respecto a la pantalla
      this.title.html("Juego de Carreras de Autos");
      this.title.position(displayWidth/2 -50, 0);

      this.reinicio.position(displayWidth -30,displayHeight-80);

      this.input.position(displayWidth/2 -40, displayHeight/2 -80);
      this.button.position(displayWidth/2 +30, displayHeight/2 );
  //Cuando presionemos el botón de play
      this.button.mousePressed(()=>{
        //Se esconde el input y el botón
        this.input.hide();
        this.button.hide();
  
        //toma el valor del input
        player.nombre = this.input.value();
        //Suma un jugador en el contador
        playerCount+=1;
        //Lo acomoda en el indice correcto
        player.index = playerCount;
        //Llama la función de actualizar de la clase player
        player.update()
        //Llama la función de actualizar contador de la clase player
        player.updateCount(playerCount);
        //var greeting = createElement('h3');
        //Dice "HOLA Y EL NOMBRE DEL JUGADOR"
        this.saludo.html("Hola " + player.nombre);
        this.saludo.position(displayWidth/2 -70, displayHeight/4);
      });
      this.reinicio.mousePressed(()=>{
        player.updateCount(0);+
        game.update(0);
      });
    }
    
  }
  