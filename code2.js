gdjs.howtoplayCode = {};
gdjs.howtoplayCode.GDbgObjects1= [];
gdjs.howtoplayCode.GDbgObjects2= [];
gdjs.howtoplayCode.GDboxObjects1= [];
gdjs.howtoplayCode.GDboxObjects2= [];
gdjs.howtoplayCode.GDEnemyObjects1= [];
gdjs.howtoplayCode.GDEnemyObjects2= [];
gdjs.howtoplayCode.GDe1Objects1= [];
gdjs.howtoplayCode.GDe1Objects2= [];
gdjs.howtoplayCode.GDe2Objects1= [];
gdjs.howtoplayCode.GDe2Objects2= [];
gdjs.howtoplayCode.GDbossObjects1= [];
gdjs.howtoplayCode.GDbossObjects2= [];
gdjs.howtoplayCode.GDbosstextObjects1= [];
gdjs.howtoplayCode.GDbosstextObjects2= [];
gdjs.howtoplayCode.GDhowtoObjects1= [];
gdjs.howtoplayCode.GDhowtoObjects2= [];
gdjs.howtoplayCode.GDbackObjects1= [];
gdjs.howtoplayCode.GDbackObjects2= [];
gdjs.howtoplayCode.GDNewObjectObjects1= [];
gdjs.howtoplayCode.GDNewObjectObjects2= [];
gdjs.howtoplayCode.GDsanitizerObjects1= [];
gdjs.howtoplayCode.GDsanitizerObjects2= [];
gdjs.howtoplayCode.GDhowtoSpriteObjects1= [];
gdjs.howtoplayCode.GDhowtoSpriteObjects2= [];
gdjs.howtoplayCode.GDnextObjects1= [];
gdjs.howtoplayCode.GDnextObjects2= [];
gdjs.howtoplayCode.GDpreviousObjects1= [];
gdjs.howtoplayCode.GDpreviousObjects2= [];

gdjs.howtoplayCode.conditionTrue_0 = {val:false};
gdjs.howtoplayCode.condition0IsTrue_0 = {val:false};
gdjs.howtoplayCode.condition1IsTrue_0 = {val:false};
gdjs.howtoplayCode.condition2IsTrue_0 = {val:false};


gdjs.howtoplayCode.mapOfGDgdjs_46howtoplayCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.howtoplayCode.GDbackObjects1});gdjs.howtoplayCode.mapOfGDgdjs_46howtoplayCode_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.howtoplayCode.GDnextObjects1});gdjs.howtoplayCode.mapOfGDgdjs_46howtoplayCode_46GDpreviousObjects1Objects = Hashtable.newFrom({"previous": gdjs.howtoplayCode.GDpreviousObjects1});gdjs.howtoplayCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.howtoplayCode.condition0IsTrue_0.val = false;
{
gdjs.howtoplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.howtoplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "m1.wav", true, 50, 1);
}}

}


{


{
gdjs.howtoplayCode.GDhowtoSpriteObjects1.createFrom(runtimeScene.getObjects("howtoSprite"));
gdjs.howtoplayCode.GDnextObjects1.createFrom(runtimeScene.getObjects("next"));
gdjs.howtoplayCode.GDpreviousObjects1.createFrom(runtimeScene.getObjects("previous"));
{for(var i = 0, len = gdjs.howtoplayCode.GDhowtoSpriteObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDhowtoSpriteObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 600);
}
}{for(var i = 0, len = gdjs.howtoplayCode.GDnextObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDnextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 280);
}
}{for(var i = 0, len = gdjs.howtoplayCode.GDpreviousObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDpreviousObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 350);
}
}}

}


{

gdjs.howtoplayCode.GDhowtoSpriteObjects1.createFrom(runtimeScene.getObjects("howtoSprite"));

gdjs.howtoplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.howtoplayCode.GDhowtoSpriteObjects1.length;i<l;++i) {
    if ( gdjs.howtoplayCode.GDhowtoSpriteObjects1[i].getAnimation() == 0 ) {
        gdjs.howtoplayCode.condition0IsTrue_0.val = true;
        gdjs.howtoplayCode.GDhowtoSpriteObjects1[k] = gdjs.howtoplayCode.GDhowtoSpriteObjects1[i];
        ++k;
    }
}
gdjs.howtoplayCode.GDhowtoSpriteObjects1.length = k;}if (gdjs.howtoplayCode.condition0IsTrue_0.val) {
gdjs.howtoplayCode.GDpreviousObjects1.createFrom(runtimeScene.getObjects("previous"));
{for(var i = 0, len = gdjs.howtoplayCode.GDpreviousObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDpreviousObjects1[i].hide();
}
}}

}


{

gdjs.howtoplayCode.GDhowtoSpriteObjects1.createFrom(runtimeScene.getObjects("howtoSprite"));

gdjs.howtoplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.howtoplayCode.GDhowtoSpriteObjects1.length;i<l;++i) {
    if ( gdjs.howtoplayCode.GDhowtoSpriteObjects1[i].getAnimation() == 6 ) {
        gdjs.howtoplayCode.condition0IsTrue_0.val = true;
        gdjs.howtoplayCode.GDhowtoSpriteObjects1[k] = gdjs.howtoplayCode.GDhowtoSpriteObjects1[i];
        ++k;
    }
}
gdjs.howtoplayCode.GDhowtoSpriteObjects1.length = k;}if (gdjs.howtoplayCode.condition0IsTrue_0.val) {
gdjs.howtoplayCode.GDnextObjects1.createFrom(runtimeScene.getObjects("next"));
{for(var i = 0, len = gdjs.howtoplayCode.GDnextObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDnextObjects1[i].hide();
}
}}

}


{

gdjs.howtoplayCode.GDbackObjects1.createFrom(runtimeScene.getObjects("back"));

gdjs.howtoplayCode.condition0IsTrue_0.val = false;
gdjs.howtoplayCode.condition1IsTrue_0.val = false;
{
gdjs.howtoplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.howtoplayCode.mapOfGDgdjs_46howtoplayCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.howtoplayCode.condition0IsTrue_0.val ) {
{
gdjs.howtoplayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.howtoplayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.howtoplayCode.GDnextObjects1.createFrom(runtimeScene.getObjects("next"));

gdjs.howtoplayCode.condition0IsTrue_0.val = false;
gdjs.howtoplayCode.condition1IsTrue_0.val = false;
{
gdjs.howtoplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.howtoplayCode.mapOfGDgdjs_46howtoplayCode_46GDnextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.howtoplayCode.condition0IsTrue_0.val ) {
{
gdjs.howtoplayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.howtoplayCode.condition1IsTrue_0.val) {
gdjs.howtoplayCode.GDhowtoSpriteObjects1.createFrom(runtimeScene.getObjects("howtoSprite"));
gdjs.howtoplayCode.GDpreviousObjects1.createFrom(runtimeScene.getObjects("previous"));
{for(var i = 0, len = gdjs.howtoplayCode.GDhowtoSpriteObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDhowtoSpriteObjects1[i].setAnimation(gdjs.howtoplayCode.GDhowtoSpriteObjects1[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.howtoplayCode.GDpreviousObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDpreviousObjects1[i].hide(false);
}
}}

}


{

gdjs.howtoplayCode.GDpreviousObjects1.createFrom(runtimeScene.getObjects("previous"));

gdjs.howtoplayCode.condition0IsTrue_0.val = false;
gdjs.howtoplayCode.condition1IsTrue_0.val = false;
{
gdjs.howtoplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.howtoplayCode.mapOfGDgdjs_46howtoplayCode_46GDpreviousObjects1Objects, runtimeScene, true, false);
}if ( gdjs.howtoplayCode.condition0IsTrue_0.val ) {
{
gdjs.howtoplayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.howtoplayCode.condition1IsTrue_0.val) {
gdjs.howtoplayCode.GDhowtoSpriteObjects1.createFrom(runtimeScene.getObjects("howtoSprite"));
gdjs.howtoplayCode.GDnextObjects1.createFrom(runtimeScene.getObjects("next"));
{for(var i = 0, len = gdjs.howtoplayCode.GDhowtoSpriteObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDhowtoSpriteObjects1[i].setAnimation(gdjs.howtoplayCode.GDhowtoSpriteObjects1[i].getAnimation() - (1));
}
}{for(var i = 0, len = gdjs.howtoplayCode.GDnextObjects1.length ;i < len;++i) {
    gdjs.howtoplayCode.GDnextObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.howtoplayCode.eventsList0x5b7028


gdjs.howtoplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.howtoplayCode.GDbgObjects1.length = 0;
gdjs.howtoplayCode.GDbgObjects2.length = 0;
gdjs.howtoplayCode.GDboxObjects1.length = 0;
gdjs.howtoplayCode.GDboxObjects2.length = 0;
gdjs.howtoplayCode.GDEnemyObjects1.length = 0;
gdjs.howtoplayCode.GDEnemyObjects2.length = 0;
gdjs.howtoplayCode.GDe1Objects1.length = 0;
gdjs.howtoplayCode.GDe1Objects2.length = 0;
gdjs.howtoplayCode.GDe2Objects1.length = 0;
gdjs.howtoplayCode.GDe2Objects2.length = 0;
gdjs.howtoplayCode.GDbossObjects1.length = 0;
gdjs.howtoplayCode.GDbossObjects2.length = 0;
gdjs.howtoplayCode.GDbosstextObjects1.length = 0;
gdjs.howtoplayCode.GDbosstextObjects2.length = 0;
gdjs.howtoplayCode.GDhowtoObjects1.length = 0;
gdjs.howtoplayCode.GDhowtoObjects2.length = 0;
gdjs.howtoplayCode.GDbackObjects1.length = 0;
gdjs.howtoplayCode.GDbackObjects2.length = 0;
gdjs.howtoplayCode.GDNewObjectObjects1.length = 0;
gdjs.howtoplayCode.GDNewObjectObjects2.length = 0;
gdjs.howtoplayCode.GDsanitizerObjects1.length = 0;
gdjs.howtoplayCode.GDsanitizerObjects2.length = 0;
gdjs.howtoplayCode.GDhowtoSpriteObjects1.length = 0;
gdjs.howtoplayCode.GDhowtoSpriteObjects2.length = 0;
gdjs.howtoplayCode.GDnextObjects1.length = 0;
gdjs.howtoplayCode.GDnextObjects2.length = 0;
gdjs.howtoplayCode.GDpreviousObjects1.length = 0;
gdjs.howtoplayCode.GDpreviousObjects2.length = 0;

gdjs.howtoplayCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['howtoplayCode'] = gdjs.howtoplayCode;
