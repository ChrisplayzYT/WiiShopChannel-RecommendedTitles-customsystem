# i am currently working on fixing some bugs and improving arrow anims, ill update this read me with the new code soon!
<br><br><br>

# Wii Shop Channel | Custom Recommended Titles system
This is a system built from scratch, allowing for ease of inserting into your shop project, and customiseable recommended titles.

# Video of it working:
( the dots are just to show the titles changing/hiding, you can remove them using shop.setWallpaper(2); )
<video  src="https://github.com/user-attachments/assets/" controls="" style="border-radius:5px;"></video>

# how to use: (you need to download the static folder too btw)

<h3 style="font-style:italic;"> If your using this system outside of nintendos W_01.jsp/welcome page code, in the part of this text named "the recommended titles code needed", 

paste that code somewhere within your pages body & put onload="startrecommended();" in the body element, 
or put "startrecommended();" somewhere within a function that loads on the pages load. </h3>

<h3 style="font-style:italic;"> If your using this system inside of nintendos W_01.jsp/welcome page code,  </h3>
<h3>first, REMOVE THIS from W_01:  </h3>

```
          <div id="SofList01"><img src="/oss/oss/common/images//banner/GifA_SoftList_noAction.png" name="SofList"></div>
          <div id="txtSoftList" align="center">
              <span class="style1">Wii Shop Channel</span>
              <span class="style2">Recommended Titles</span>
          </div>
          <div id="SoftListSpacer">
              <a id="headerURL" href="javascript:showPage('B_04.jsp?p=1&amp;rec=true')">
                  <img src="/oss/oss/common/images//spacer.gif" width="551" height="42" border="0" onmousedown="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_Press.png',1);focus_Header();" onmouseup="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_Over.png',1)focus_Header();" onmouseover="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_Over.png',1); snd.playSE( cSE_Forcus );move_fleeze_cursor();focus_Header();" onmouseout="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_noAction.png',1);" onclick="snd.playSE(cSE_Decide);">
              </a>
          </div>

```
<h3>then, replace this block of code below, with the code in the part of this text named "the recommended titles code needed", & put "startrecommended();" somewhere within the initPageCommon() function (putting it on top is recommended). </h3>

```

<div id="posLeftArrowID" class="posLeftArrow">
<img id="posLeftArrowimageID" border='0'
	        src="/oss/oss/common/images//banner/top_L_arrow_00.png" />
</div>
<div id="posRightArrowID" class="posRightArrow">
<img id="posRightArrowimageID" border='0'
	        src="/oss/oss/common/images//banner/top_R_arrow_00.png" />
</div>

<div id="posStopLeftArrowID" class="posStopLeftArrow">
<img id="posLeftArrowimageID" border='0'
	        src="/oss/oss/common/images//banner/GifA_News_noAction.png" />
</div>
<div id="posStopRightArrowID" class="posStopRightArrow">
<img id="posRightArrowimageID" border='0'
	        src="/oss/oss/common/images//banner/GifA_News_noAction.png" />
</div>

<div id="recroot">
  <div id="rec01" style="">
      <div id="soft01" class="posTitleSoft"></div>
      <div align="left" id="new01" class="posTitleNew" style="display:none"> <img src="/oss/oss/common/images//banner/NEW_en.gif"></div>
      <div id="softShadow01" class="posTitleSoftShadow"><span class="btnSoft"><img name="btnSoft01" src="/oss/oss/common/images//banner/GifA_Soft_noAction.png" class="btnSoft" border="0" /></span></div>
      <div id="softSpacer01" class="posTitleSoftSpacer"><a id="titleUrl01" href=""></a></div>
      <div id="softFocusImage01" class="posTitleSoftFocusImage"></div>
      <div id="details01" class="posTitleDetails" nowrap><span class="style13"></span></div>
  </div>
  <div id="rec02" style="">
      <div id="soft02" class="posTitleSoft"></div>
      <div align="left" id="new02" class="posTitleNew" style="display:none"> <img src="/oss/oss/common/images//banner/NEW_en.gif"></div>
      <div id="softShadow02" class="posTitleSoftShadow"><span class="btnSoft"><img name="btnSoft02" src="/oss/oss/common/images//banner/GifA_Soft_noAction.png" class="btnSoft" border="0" /></span></div>
      <div id="softSpacer02" class="posTitleSoftSpacer"><a id="titleUrl02" href=""></a></div>
      <div id="softFocusImage02" class="posTitleSoftFocusImage"></div>
      <div id="details02" class="posTitleDetails" nowrap><span class="style13"></span></div>
  </div>
  <div id="rec03" style="">
      <div id="soft03" class="posTitleSoft"></div>
      <div align="left" id="new03" class="posTitleNew" style="display:none"> <img src="/oss/oss/common/images//banner/NEW_en.gif"></div>
      <div id="softShadow03" class="posTitleSoftShadow"><span class="btnSoft"><img name="btnSoft03" src="/oss/oss/common/images//banner/GifA_Soft_noAction.png" class="btnSoft" border="0" /></span></div>
      <div id="softSpacer03" class="posTitleSoftSpacer"><a id="titleUrl03" href=""></a></div>
      <div id="softFocusImage03" class="posTitleSoftFocusImage"></div>
      <div id="details03" class="posTitleDetails" nowrap><span class="style13"></span></div>
  </div>
  <div id="rec04" style="">
      <div id="soft04" class="posTitleSoft"></div>
      <div align="left" id="new04" class="posTitleNew" style="display:none"> <img src="/oss/oss/common/images//banner/NEW_en.gif"></div>
      <div id="softShadow04" class="posTitleSoftShadow"><span class="btnSoft"><img name="btnSoft04" src="/oss/oss/common/images//banner/GifA_Soft_noAction.png" class="btnSoft" border="0" /></span></div>
      <div id="softSpacer04" class="posTitleSoftSpacer"><a id="titleUrl04" href=""></a></div>
      <div id="softFocusImage04" class="posTitleSoftFocusImage"></div>
      <div id="details04" class="posTitleDetails" nowrap><span class="style13"></span></div>
  </div>
</div>

```



↓ the recommended titles code needed ↓
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
↓ the recommended titles code needed ↓

```


```

↑ the recommended titles code needed ↑
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
↑ the recommended titles code needed ↑


<br><br><br>
 Wii Shop Channel Custom Recommended Titles System made by ChrisplayzYT/BLOX.
 <br>
All Rights Reserved to Nintendo/Opera for the built in code "new wiiShop(), "new wiiSound()", and DreamWeaver for MM_preloadImages(); used by Acer Cloud/Nintendo, 2006.
