class Rope{
        constructor(bodyA, pointB){
            var options = {
                'bodyA' : bodyA,
                'pointB' : pointB,
                'stiffness': 1.5,
                'length': 250
            }
            this.pointB = pointB;
            this.rope = Matter.Constraint.create(options);
            World.add(world, this.rope);
        }
        display(){
            var pointA = this.rope.bodyA.position;
            push();
            stroke("pink");
            strokeWeight(5);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
            pop();
        }
}

