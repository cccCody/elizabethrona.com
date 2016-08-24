// Created by iWeb 3.0.4 local-build-20130225

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,45),url:'Credentials_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Credentials_files/stroke_1.png'},{rect:new IWRect(5,-5,45,10),url:'Credentials_files/stroke_2.png'},{rect:new IWRect(50,-5,11,10),url:'Credentials_files/stroke_3.png'},{rect:new IWRect(50,5,11,45),url:'Credentials_files/stroke_4.png'},{rect:new IWRect(50,50,11,10),url:'Credentials_files/stroke_5.png'},{rect:new IWRect(5,50,45,10),url:'Credentials_files/stroke_6.png'},{rect:new IWRect(-5,50,10,10),url:'Credentials_files/stroke_7.png'}],new IWSize(55,55))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Credentials_files/CredentialsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
