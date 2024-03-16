AFRAME.registerComponent("move-box-on-click", {
    schema:{
        moveY: {type: "number", default: 1},
        moveZ: {type: "number", default: 1},
    },
    tick: function(){
        window.addEventListener("click", (e) => {
            this.data.moveY = this.data.moveY + 0.01;
            this.data.moveZ = this.data.moveZ - 0.01;
        })
        this.data.moveY = this.data.moveY + 0.01;
        this.data.moveZ = this.data.moveZ - 0.01;
        var pos = this.el.getAtribute("position");
        pos.y = this.data.moveY;
        pos.z = this.data.moveZ;
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
})