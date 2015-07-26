/**
 * Created by Mrlan on 2015/7/25.
 */
var MenuLayer = cc.Layer.extend({
    menuMap: null,
    ctor:function () {
        this._super();
        //add menus from menu list
        this.menuMap = {};
        var menuItems = [];
        for(var key in MenuList){
            var label = new cc.LabelBMFont(key, res.Font);
            var menuItem = new cc.MenuItemLabel(label, this.onMenuSelected, this);
            this.menuMap[menuItem.__instanceId] = MenuList[key];
            menuItems.push(menuItem);
        }
        var menu = new cc.Menu(menuItems);
        menu.alignItemsVerticallyWithPadding(20);
        this.addChild(menu, 1);
    },
    onMenuSelected:function (target) {
        var Scene = this.menuMap[target.__instanceId];
        cc.director.pushScene(new cc.TransitionSlideInR(1, new Scene()));
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new MenuLayer());
    }
});