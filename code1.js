gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDLogObjects1= [];
gdjs.GameCode.GDLogObjects2= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDNewObjectObjects1= [];
gdjs.GameCode.GDNewObjectObjects2= [];
gdjs.GameCode.GDEnemyObjects1= [];
gdjs.GameCode.GDEnemyObjects2= [];
gdjs.GameCode.GDGameTitleObjects1= [];
gdjs.GameCode.GDGameTitleObjects2= [];
gdjs.GameCode.GDBossObjects1= [];
gdjs.GameCode.GDBossObjects2= [];
gdjs.GameCode.GDBG1Objects1= [];
gdjs.GameCode.GDBG1Objects2= [];
gdjs.GameCode.GDpowerUpObjects1= [];
gdjs.GameCode.GDpowerUpObjects2= [];
gdjs.GameCode.GDScoretextObjects1= [];
gdjs.GameCode.GDScoretextObjects2= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDSCOREObjects1= [];
gdjs.GameCode.GDSCOREObjects2= [];
gdjs.GameCode.GDenemy2Objects1= [];
gdjs.GameCode.GDenemy2Objects2= [];
gdjs.GameCode.GDPowericonObjects1= [];
gdjs.GameCode.GDPowericonObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpowerUpObjects1Objects = Hashtable.newFrom({"powerUp": gdjs.GameCode.GDpowerUpObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.GameCode.GDenemy2Objects1});gdjs.GameCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "m1.wav", true, 50, 1);
}}

}


{


{
{runtimeScene.getVariables().get("speed").setNumber(4);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "screnTimer");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(gdjs.GameCode.GDPlayerObjects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.GameCode.GDLogObjects1.createFrom(runtimeScene.getObjects("Log"));
gdjs.GameCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.GameCode.GDScoretextObjects1.createFrom(runtimeScene.getObjects("Scoretext"));
{for(var i = 0, len = gdjs.GameCode.GDLogObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLogObjects1[i].setX(gdjs.GameCode.GDLogObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoretextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoretextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.GameCode.GDLogObjects1.createFrom(runtimeScene.getObjects("Log"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDLogObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDLogObjects1[i].getX() <= -(379) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDLogObjects1[k] = gdjs.GameCode.GDLogObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDLogObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDLogObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDLogObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLogObjects1[i].setX(3290);
}
}{for(var i = 0, len = gdjs.GameCode.GDLogObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLogObjects1[i].setWidth(gdjs.randomInRange(117, 257));
}
}{for(var i = 0, len = gdjs.GameCode.GDLogObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLogObjects1[i].setY(gdjs.randomInRange(140, 600));
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.GameCode.GDpowerUpObjects1.createFrom(runtimeScene.getObjects("powerUp"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDpowerUpObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDpowerUpObjects1[i].getX() <= -(100) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDpowerUpObjects1[k] = gdjs.GameCode.GDpowerUpObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDpowerUpObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDpowerUpObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDpowerUpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpowerUpObjects1[i].setX(gdjs.randomInRange(1500, 1700));
}
}{for(var i = 0, len = gdjs.GameCode.GDpowerUpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpowerUpObjects1[i].setY(100);
}
}}

}


{

gdjs.GameCode.GDpowerUpObjects1.createFrom(runtimeScene.getObjects("powerUp"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDpowerUpObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDpowerUpObjects1[i].getY() >= 800 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDpowerUpObjects1[k] = gdjs.GameCode.GDpowerUpObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDpowerUpObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDpowerUpObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDpowerUpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpowerUpObjects1[i].setX(gdjs.randomInRange(1500, 1700));
}
}{for(var i = 0, len = gdjs.GameCode.GDpowerUpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpowerUpObjects1[i].setY(100);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDpowerUpObjects1.createFrom(runtimeScene.getObjects("powerUp"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpowerUpObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDpowerUpObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDpowerUpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpowerUpObjects1[i].setX(gdjs.randomInRange(1500, 1700));
}
}{for(var i = 0, len = gdjs.GameCode.GDpowerUpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpowerUpObjects1[i].setY(100);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getY() >= 800 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getX() <= -(50) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getY() <= -(200) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.GameCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects1[i].getX() <= -(100) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects1[k] = gdjs.GameCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setX(gdjs.randomInRange(1400, 1800));
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setY(50);
}
}}

}


{

gdjs.GameCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "146730__leszek-szary__shoot.wav", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(100);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(100);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.GameCode.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDenemy2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemy2Objects1[i].getX() <= -(100) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDenemy2Objects1[k] = gdjs.GameCode.GDenemy2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDenemy2Objects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDenemy2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemy2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemy2Objects1[i].setX(gdjs.randomInRange(1400, 1700));
}
}{for(var i = 0, len = gdjs.GameCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemy2Objects1[i].setY(50);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDenemy2Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDenemy2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemy2Objects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "146730__leszek-szary__shoot.wav", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(100);
}}

}


{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() + (4));
}
}}

}


{

gdjs.GameCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects1[i].getY() >= 800 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects1[k] = gdjs.GameCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setX(gdjs.randomInRange(1000, 1500));
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setY(50);
}
}}

}


{

gdjs.GameCode.GDenemy2Objects1.createFrom(runtimeScene.getObjects("enemy2"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDenemy2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemy2Objects1[i].getY() >= 800 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDenemy2Objects1[k] = gdjs.GameCode.GDenemy2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDenemy2Objects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDenemy2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemy2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemy2Objects1[i].setX(gdjs.randomInRange(1000, 1500));
}
}{for(var i = 0, len = gdjs.GameCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemy2Objects1[i].setY(50);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5b7028


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDLogObjects1.length = 0;
gdjs.GameCode.GDLogObjects2.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDNewObjectObjects1.length = 0;
gdjs.GameCode.GDNewObjectObjects2.length = 0;
gdjs.GameCode.GDEnemyObjects1.length = 0;
gdjs.GameCode.GDEnemyObjects2.length = 0;
gdjs.GameCode.GDGameTitleObjects1.length = 0;
gdjs.GameCode.GDGameTitleObjects2.length = 0;
gdjs.GameCode.GDBossObjects1.length = 0;
gdjs.GameCode.GDBossObjects2.length = 0;
gdjs.GameCode.GDBG1Objects1.length = 0;
gdjs.GameCode.GDBG1Objects2.length = 0;
gdjs.GameCode.GDpowerUpObjects1.length = 0;
gdjs.GameCode.GDpowerUpObjects2.length = 0;
gdjs.GameCode.GDScoretextObjects1.length = 0;
gdjs.GameCode.GDScoretextObjects2.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDSCOREObjects1.length = 0;
gdjs.GameCode.GDSCOREObjects2.length = 0;
gdjs.GameCode.GDenemy2Objects1.length = 0;
gdjs.GameCode.GDenemy2Objects2.length = 0;
gdjs.GameCode.GDPowericonObjects1.length = 0;
gdjs.GameCode.GDPowericonObjects2.length = 0;

gdjs.GameCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
