class slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:10
        }


        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            
         let posA = this.slingshot.bodyA.position;
         let posB = this.slingshot.pointB;
         strokeWeight(2);
         line(posA.x, posA.y, posB.x, posB.y);

        }
        
    }
}