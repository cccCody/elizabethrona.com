// Created by iWeb 3.0.4 local-build-20130225

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWStrokeParts([{rect:new IWRect(-5,5,10,45),url:'Home_files/stroke_8.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_9.png'},{rect:new IWRect(5,-5,45,10),url:'Home_files/stroke_10.png'},{rect:new IWRect(50,-5,11,10),url:'Home_files/stroke_11.png'},{rect:new IWRect(50,5,11,45),url:'Home_files/stroke_12.png'},{rect:new IWRect(50,50,11,10),url:'Home_files/stroke_13.png'},{rect:new IWRect(5,50,45,10),url:'Home_files/stroke_14.png'},{rect:new IWRect(-5,50,10,10),url:'Home_files/stroke_15.png'}],new IWSize(55,55)),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,215),url:'Home_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Home_files/stroke_1.png'},{rect:new IWRect(1,-1,143,2),url:'Home_files/stroke_2.png'},{rect:new IWRect(144,-1,2,2),url:'Home_files/stroke_3.png'},{rect:new IWRect(144,1,2,215),url:'Home_files/stroke_4.png'},{rect:new IWRect(144,216,2,2),url:'Home_files/stroke_5.png'},{rect:new IWRect(1,216,143,2),url:'Home_files/stroke_6.png'},{rect:new IWRect(-1,216,2,2),url:'Home_files/stroke_7.png'}],new IWSize(145,217))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
