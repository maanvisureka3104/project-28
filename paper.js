class Paper{
    constructor(x,y){
    var option={
    'isStatic' : false,
    'restitution' : 0.3,
     'friction': 0.3,
     'density': 0.1,
      }
    this.body=Bodies.circle(x,y,50,option);
    this.x=x;
    this.y=y;             
    this.radius=100;
    World.add(world,this.body);
    this.image=loadImage("paper.png");  
    }
            
    display()
    {
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,15,this.radius,this.radius);
    pop();     
    }    
}