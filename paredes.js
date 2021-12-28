class pared{
    constructor(x,y,w,h){
    //this.pareds=createSprite(x,y,w,h);
    this.image= loadImage("images/wood2.png");
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
}
display(){
push();
       // translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h);
        pop();
}
}



/*class pared{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/wood.png");
        World.add(world, this.body);
    }
}*/