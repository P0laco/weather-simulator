export default class Cloud {
    constructor(startX, stopX, y) {
        this.x = startX;
        this.startX = startX; 
        this.stopX = stopX; 
        this.y = y;
    }

    drawCloud() {
        ctx.drawImage(cloud, this.x, this.y, 180, 100);
    }

    updateCloud() {
        if (this.x > this.stopX) {
            this.x -= 2;
        }
    }
}
        let cloud = new Image();
        cloud.src = 'assets/cloud.png';
        let cloudX1 = 320
        let cloudX2 = 160
        cloud.onload = function(){
        ctx.drawImage(cloud, cloudX1, 10, 180, 100);
        ctx.drawImage(cloud, cloudX2, 40, 180, 100);
}
