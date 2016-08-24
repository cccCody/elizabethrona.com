// Created by iWeb 3.0.4 local-build-20130225

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="16"><param name="src" value="Media/KPFK-Elizabeth%20Rona.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="300" height="16"><param name="src" value="Media/KPFK-Elizabeth%20Rona.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="300" height="16" data="Media/KPFK-Elizabeth%20Rona.mp3"><param name="src" value="Media/KPFK-Elizabeth%20Rona.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,258),url:'Media_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Media_files/stroke_1.png'},{rect:new IWRect(5,-5,311,10),url:'Media_files/stroke_2.png'},{rect:new IWRect(316,-5,10,10),url:'Media_files/stroke_3.png'},{rect:new IWRect(316,5,10,258),url:'Media_files/stroke_4.png'},{rect:new IWRect(316,263,10,11),url:'Media_files/stroke_5.png'},{rect:new IWRect(5,263,311,11),url:'Media_files/stroke_6.png'},{rect:new IWRect(-5,263,10,11),url:'Media_files/stroke_7.png'}],new IWSize(321,268))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Media_files/MediaMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
