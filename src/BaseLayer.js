/**
 * Created by Mrlan on 2015/7/25.
 */
var BaseLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var label = new cc.LabelBMFont("Back", res.Font);
        var menuItem = new cc.MenuItemLabel(label, function() {
            cc.director.popScene();
            return false;
        }, this);
        menuItem.attr({
            x: menuItem.width / 2 + 10,
            y: menuItem.height / 2 + 5,
            anchorX: 0.5,
            anchorY: 0.5
        });
        var menu = new cc.Menu(menuItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, Number.MAX_VALUE);
        return true;
    }
});