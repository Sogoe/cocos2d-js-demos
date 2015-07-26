/**
 * Created by Mrlan on 2015/7/25.
 */
var CircleBgLayer = BaseLayer.extend({
    drawNode: null,
    center: null,
    circles: [],
    maxR: null,
    v: null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.center = cc.p(size.width/2, size.height/2);
        this.drawNode = new cc.DrawNode();
        this.addChild(this.drawNode, 2);
        this.initConfig(16, 80, cc.color(255, 255, 0, 255), cc.color(255, 0, 0, 255));
        this.scheduleUpdate();
    },
    initConfig:function (num, v, color1, color2) {
        var size = cc.winSize;
        this.maxR = (size.height+size.width)/2;
        //两种颜色交替，确保num为偶数
        num = num%2 === 0 ? num : num+1;
        delete this.circles;
        this.circles = [];
        var step = this.maxR / num;
        this.v = v;
        for(var i = 0; i <= num; i++) {
            var color = i%2 === 0 ? color1 : color2;
            this.circles.push({r:i*step, color:color});
        }
    },
    update:function (deltaTime) {
        this.drawNode.clear();
        for(var i = this.circles.length-1; i >= 0; i--) {
            this.drawNode.drawDot(this.center, this.circles[i].r, this.circles[i].color);
            this.circles[i].r += this.v*deltaTime;
        }
        if(this.circles[this.circles.length-1].r >= this.maxR) {
            var temp = this.circles.pop();
            temp.r = temp.r - this.maxR;
            this.circles.unshift(temp);
        }
    }
});

var CircleBgScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new CircleBgLayer());
    }
});