class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
    this.sling.bodyA = body
    }

    display(){

        image (this.sling1, 230,50, 50,170)
        image (this.sling2, 190,60, 55,90)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push ()
            if (pointA.x < 250){
                strokeWeight(7);
                stroke(62,30,13)
                line(pointA.x -20, pointA.y, pointB.x -20, pointB.y +20);
                line(pointA.x -20, pointA.y , pointB.x +25 , pointB.y +10)
                image (this.sling3, pointA.x - 30, pointA.y - 10, 15, 30)
            }
            else{
                strokeWeight(7);
            stroke(62,30,13)
            line(pointA.x +25, pointA.y, pointB.x -10, pointB.y +20);
            line(pointA.x +25, pointA.y , pointB.x +30 , pointB.y -3)
            image(this.sling3, pointA.x +25, pointA.y -10, 15, 30)
            }
            pop ()
        }
            
    }
    
}