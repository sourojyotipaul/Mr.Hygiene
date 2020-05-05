gdjs.StartCode = {};
gdjs.StartCode.GDbg2Objects1= [];
gdjs.StartCode.GDbg2Objects2= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDSubtitleObjects1= [];
gdjs.StartCode.GDSubtitleObjects2= [];
gdjs.StartCode.GDplayObjects1= [];
gdjs.StartCode.GDplayObjects2= [];
gdjs.StartCode.GDmusic_95onObjects1= [];
gdjs.StartCode.GDmusic_95onObjects2= [];
gdjs.StartCode.GDLoginObjects1= [];
gdjs.StartCode.GDLoginObjects2= [];
gdjs.StartCode.GDHIGHSCOREObjects1= [];
gdjs.StartCode.GDHIGHSCOREObjects2= [];
gdjs.StartCode.GDSCOREObjects1= [];
gdjs.StartCode.GDSCOREObjects2= [];
gdjs.StartCode.GDbox1Objects1= [];
gdjs.StartCode.GDbox1Objects2= [];
gdjs.StartCode.GDscoretextObjects1= [];
gdjs.StartCode.GDscoretextObjects2= [];
gdjs.StartCode.GDhighscoretextObjects1= [];
gdjs.StartCode.GDhighscoretextObjects2= [];
gdjs.StartCode.GDmusic_95offObjects1= [];
gdjs.StartCode.GDmusic_95offObjects2= [];
gdjs.StartCode.GDhowtoplayObjects1= [];
gdjs.StartCode.GDhowtoplayObjects2= [];
gdjs.StartCode.GDPlayBGObjects1= [];
gdjs.StartCode.GDPlayBGObjects2= [];
gdjs.StartCode.GDgameTitleObjects1= [];
gdjs.StartCode.GDgameTitleObjects2= [];
gdjs.StartCode.GDgamehowtoObjects1= [];
gdjs.StartCode.GDgamehowtoObjects2= [];
gdjs.StartCode.GDcrownObjects1= [];
gdjs.StartCode.GDcrownObjects2= [];
gdjs.StartCode.GDuserObjects1= [];
gdjs.StartCode.GDuserObjects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.StartCode.GDplayObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDmusic_9595onObjects1Objects = Hashtable.newFrom({"music_on": gdjs.StartCode.GDmusic_95onObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDmusic_9595offObjects1Objects = Hashtable.newFrom({"music_off": gdjs.StartCode.GDmusic_95offObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDgamehowtoObjects1Objects = Hashtable.newFrom({"gamehowto": gdjs.StartCode.GDgamehowtoObjects1});gdjs.StartCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.StartCode.GDmusic_95offObjects1.createFrom(runtimeScene.getObjects("music_off"));
{for(var i = 0, len = gdjs.StartCode.GDmusic_95offObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95offObjects1[i].hide();
}
}}

}


{


{
gdjs.StartCode.GDPlayBGObjects1.createFrom(runtimeScene.getObjects("PlayBG"));
gdjs.StartCode.GDcrownObjects1.createFrom(runtimeScene.getObjects("crown"));
gdjs.StartCode.GDgameTitleObjects1.createFrom(runtimeScene.getObjects("gameTitle"));
gdjs.StartCode.GDgamehowtoObjects1.createFrom(runtimeScene.getObjects("gamehowto"));
gdjs.StartCode.GDhighscoretextObjects1.createFrom(runtimeScene.getObjects("highscoretext"));
gdjs.StartCode.GDmusic_95offObjects1.createFrom(runtimeScene.getObjects("music_off"));
gdjs.StartCode.GDmusic_95onObjects1.createFrom(runtimeScene.getObjects("music_on"));
gdjs.StartCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));
gdjs.StartCode.GDscoretextObjects1.createFrom(runtimeScene.getObjects("scoretext"));
gdjs.StartCode.GDuserObjects1.createFrom(runtimeScene.getObjects("user"));
{gdjs.evtTools.storage.readNumberFromJSONFile("HighScore", "HS", runtimeScene, runtimeScene.getVariables().get("ReadHS"));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ReadHS")));
}{for(var i = 0, len = gdjs.StartCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDplayObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 60);
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayBGObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayBGObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 125);
}
}{for(var i = 0, len = gdjs.StartCode.GDhighscoretextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDhighscoretextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 50);
}
}{for(var i = 0, len = gdjs.StartCode.GDgameTitleObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDgameTitleObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 500);
}
}{for(var i = 0, len = gdjs.StartCode.GDgamehowtoObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDgamehowtoObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 200);
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95onObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95onObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 100);
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95offObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95offObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 150);
}
}{for(var i = 0, len = gdjs.StartCode.GDscoretextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDscoretextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 50);
}
}{for(var i = 0, len = gdjs.StartCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDuserObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 85);
}
}{for(var i = 0, len = gdjs.StartCode.GDcrownObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDcrownObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 80);
}
}}

}


{

gdjs.StartCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


{
gdjs.StartCode.GDhighscoretextObjects1.createFrom(runtimeScene.getObjects("highscoretext"));
gdjs.StartCode.GDscoretextObjects1.createFrom(runtimeScene.getObjects("scoretext"));
{for(var i = 0, len = gdjs.StartCode.GDscoretextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDscoretextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.StartCode.GDhighscoretextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDhighscoretextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1));
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("HighScore", "HS", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{

gdjs.StartCode.GDmusic_95onObjects1.createFrom(runtimeScene.getObjects("music_on"));

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDmusic_9595onObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
gdjs.StartCode.GDmusic_95offObjects1.createFrom(runtimeScene.getObjects("music_off"));
/* Reuse gdjs.StartCode.GDmusic_95onObjects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95onObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95onObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95onObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95onObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95offObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95offObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95offObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95offObjects1[i].setZOrder(17);
}
}}

}


{

gdjs.StartCode.GDmusic_95offObjects1.createFrom(runtimeScene.getObjects("music_off"));

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDmusic_9595offObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDmusic_95offObjects1 */
gdjs.StartCode.GDmusic_95onObjects1.createFrom(runtimeScene.getObjects("music_on"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(40);
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95onObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95onObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95offObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95offObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95onObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95onObjects1[i].setZOrder(17);
}
}{for(var i = 0, len = gdjs.StartCode.GDmusic_95offObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmusic_95offObjects1[i].setZOrder(1);
}
}}

}


{

gdjs.StartCode.GDgamehowtoObjects1.createFrom(runtimeScene.getObjects("gamehowto"));

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDgamehowtoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "howtoplay");
}}

}


}; //End of gdjs.StartCode.eventsList0x5b7028


gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDbg2Objects1.length = 0;
gdjs.StartCode.GDbg2Objects2.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDSubtitleObjects1.length = 0;
gdjs.StartCode.GDSubtitleObjects2.length = 0;
gdjs.StartCode.GDplayObjects1.length = 0;
gdjs.StartCode.GDplayObjects2.length = 0;
gdjs.StartCode.GDmusic_95onObjects1.length = 0;
gdjs.StartCode.GDmusic_95onObjects2.length = 0;
gdjs.StartCode.GDLoginObjects1.length = 0;
gdjs.StartCode.GDLoginObjects2.length = 0;
gdjs.StartCode.GDHIGHSCOREObjects1.length = 0;
gdjs.StartCode.GDHIGHSCOREObjects2.length = 0;
gdjs.StartCode.GDSCOREObjects1.length = 0;
gdjs.StartCode.GDSCOREObjects2.length = 0;
gdjs.StartCode.GDbox1Objects1.length = 0;
gdjs.StartCode.GDbox1Objects2.length = 0;
gdjs.StartCode.GDscoretextObjects1.length = 0;
gdjs.StartCode.GDscoretextObjects2.length = 0;
gdjs.StartCode.GDhighscoretextObjects1.length = 0;
gdjs.StartCode.GDhighscoretextObjects2.length = 0;
gdjs.StartCode.GDmusic_95offObjects1.length = 0;
gdjs.StartCode.GDmusic_95offObjects2.length = 0;
gdjs.StartCode.GDhowtoplayObjects1.length = 0;
gdjs.StartCode.GDhowtoplayObjects2.length = 0;
gdjs.StartCode.GDPlayBGObjects1.length = 0;
gdjs.StartCode.GDPlayBGObjects2.length = 0;
gdjs.StartCode.GDgameTitleObjects1.length = 0;
gdjs.StartCode.GDgameTitleObjects2.length = 0;
gdjs.StartCode.GDgamehowtoObjects1.length = 0;
gdjs.StartCode.GDgamehowtoObjects2.length = 0;
gdjs.StartCode.GDcrownObjects1.length = 0;
gdjs.StartCode.GDcrownObjects2.length = 0;
gdjs.StartCode.GDuserObjects1.length = 0;
gdjs.StartCode.GDuserObjects2.length = 0;

gdjs.StartCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
