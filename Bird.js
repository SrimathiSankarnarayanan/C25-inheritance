//extends- extract all props from parent to child

class Bird extends Parentclass{
    constructor(x, y) {
     super(x,y,50,50);
     // over riding- changing the property from parent or base class
     this.image=loadImage("sprites/bird.png")

    };
    display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      //Super keyword is used to extract the display func form parent class
      super.display();

    }
  };
  