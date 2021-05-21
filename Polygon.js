class polygon {

    constructor(x, y) {
        let options = {
            isStatic:false,
            //isStatic:true,
            restitution:0.8,
            friction:1,
            density:1
        }

        this.w = 20;
        this.h = 20;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        
        World.add(world, this.body);
    }

    display() {
        push()
        //translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(polygon_img, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
}

