# Wii Shop Channel | Custom Recommended Titles system
This is a system built from scratch, allowing for ease of inserting into your shop project, and customiseable recommended titles.

# Video of it working:
( the dots are just to show the titles changing/hiding, you can remove them using shop.setWallpaper(2); )
<video disabled src="https://github.com/user-attachments/assets/321f739a-2c2a-48b4-a4e4-88a0afaf2e2f" controls="" style="border-radius:5px;"></video>

# how to use:

<h3 style="font-style:italic;"> If your using this system outside of nintendos W_01.jsp/welcome page code, in the part of this text named "the recommended titles code needed", 

paste that code somewhere within your pages body & put onload="startrecommended();" in the body element, 
or put "startrecommended();" somewhere within a function that loads on the pages load. </h3>

<h3 style="font-style:italic;"> If your using this system inside of nintendos W_01.jsp/welcome page code,  </h3>
<h3>first, REMOVE THIS:  </h3>

```

<div id="SoftListSpacer">
    <a id="headerURL" href="javascript:showPage('B_04.jsp?p=1&rec=true')">
        <img src="/oss/oss/common/images//spacer.gif" width="551" height="42" border="0" 
            onMouseDown="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_Press.png',1);focus_Header();" 
            onMouseUp="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_Over.png',1)focus_Header();" 
            onMouseOver="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_Over.png',1); snd.playSE( cSE_Forcus );move_fleeze_cursor();focus_Header();" 
            onMouseOut="MM_swapImage('SofList','','/oss/oss/common/images//banner/GifA_SoftList_noAction.png',1);" 
            onClick="snd.playSE(cSE_Decide);" 
        />
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

    <div id="wiishopchannelrecommendedtitles" alt="made by ChrisplayzYT/BLOX 2024.">

        <!-- recommended start (made by ChrisplayzYT/BLOX, 10/25/2024 - 10/26/2024)-->
        <!-- !!! HOW TO STARTUP THE RECOMMENDED TITLES SYSTEM:
     you can either put onload="startrecommended();" in the body element,
     or inside a function that runs on page load
     put startrecommended(); somewhere within that function, 
     if you followed either methods properly, on reload the text on top should say 
    "Wii Shop Channel Recommended Titles", and the arrows should move.
    -->
        <script>
            function startrecommended() {
            // initates the recommended titles system
            snd.playBGM();
            recommendeddefault(); // start the recommended titles system
            animateLarrow(); // animate the left arrow
            animateRarrow(); // animate the Right arrow
            
            }
        </script>
    
        <script src="/static/recommendedtitles/js/recommendedtitles.js">
            // arrow animations and preloading
        </script>
        <link rel="stylesheet" href="/static/recommendedtitles/css/recommendedtitles.css">
    
    
        <div id="recommendedarea">
    
            <!-- recommended start (made by ChrisplayzYT/BLOX, 10/25/2024) -->
    
    
            <!-- headr start -->
    
            <div id="hdr" style="" onmouseover="hidearrowLcover(); hidearrowRcover();">
                <a href="#" onclick="snd.playSE(3);" onmouseover="snd.playSE(2);" style="text-decoration:none; display:block;" id="hdrurl">
                    <span style="font-size: 30px; color: #34BEED; font-weight: bold;" id="hdrtxtpart1">
                
                </span>
                    <span style="font-size: 16px; color: #34BEED; font-weight:normal;" id="hdrtxtpart2">
                
                </span>
                </a>
            </div>
    
            <!-- headr end -->
    
    
            <!-- titles begin -->
    
            <div id="recomtitlesholder" style=" overflow:hidden; height:158px; width:580px; max-width:580px; margin-left:15px; margin-top:0px;">
    
                <div id="arrowL" style="position:absolute; top:108px; left:30px;" onmouseover="showarrowLcover();" onclick="">
                    <img src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png" id="arrowLimgsrc">
                </div>
    
                <div id="arrowR" style="position:absolute; top:108px; right:30px;" onmouseover="showarrowRcover();" onclick="">
                    <img src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png" id="arrowRimgsrc">
                </div>
    
                <div id="arrowLCOVER" style="display:none; position:absolute; top:108px; left:30px;" onmouseover="snd.playSE(2);" onmouseout="hidearrowLcover();" onclick="">
                    <img src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_S.png" id="arrowLimgsrcCOVER">
                </div>
    
                <div id="arrowRCOVER" style="display:none; position:absolute; top:108px; right:30px;" onmouseover="snd.playSE(2);" onmouseout="hidearrowRcover();" onclick="">
                    <img src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_S.png" id="arrowRimgsrcCOVER">
                </div>
    
                <!-- recom sections begin -->
                <div id="sectionsoftitlesrecom" style="height:158px;" onmouseover="hidearrowLcover(); hidearrowRcover();">
    
                    <!-- WSC RECOM TITLES -->
                    <div id="recommendedsort01">
    
                        <!-- 
        !!! do not modify anything above, itll mess up the scroller!!! !!!
        only modify the header name 
        in the scripts:
        document.getElementById("hdrtxtpart1").innerHTML="nameofsection";
        document.getElementById("hdrtxtpart2").innerHTML="(smallerhdrtxtnexttofirsthdrtxt)";
        document.getElementById('hdrurl').href = "#?sectionname";)
        in the scripts
        and the titles below
         -->
    
                        <div id="recomtitle01">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); " onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/amazoninstantvideo/AIVwii" id="recomtitleimgsrc">
                                <span id="recomtitlename">Amazon Instant Video</span>
                                <span id="recomtitleprice">0 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle02">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); " onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/huluplus/hulupluswii" id="recomtitleimgsrc">
                                <span id="recomtitlename">Hulu Plus</span>
                                <span id="recomtitleprice">0 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle03">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); " onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/Super Smash Bros/ssb1" id="recomtitleimgsrc">
                                <span id="recomtitlename">Super Smash Bros.</span>
                                <span id="recomtitleprice">1000 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle04">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); " onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/mariokart64/mk64" id="recomtitleimgsrc">
                                <span id="recomtitlename">Mario Kart 64</span>
                                <span id="recomtitleprice">1000 Wii Points</span>
                            </a>
                        </div>
    
    
                    </div>
                    <!-- WSC RECOM TITLES -->
    
    
                    <!-- POKEMON -->
                    <div id="recommendedsort02">
    
    
                        <!-- 
        !!! do not modify anything above, itll mess up the scroller!!! !!!
        only modify the header name 
        in the scripts:
        document.getElementById("hdrtxtpart1").innerHTML="nameofsection";
        document.getElementById("hdrtxtpart2").innerHTML="(smallerhdrtxtnexttofirsthdrtxt)";
        document.getElementById('hdrurl').href = "#?sectionname";)
        in the scripts
        and the titles below 
        -->
    
                        <div id="recomtitle01">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/pokemon/pokemonrumble/pokerumble" id="recomtitleimgsrc">
                                <span id="recomtitlename">Pokémon Rumble</span>
                                <span id="recomtitleprice">1500 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle02">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/pokemon/pokemonranch/pokeranch" id="recomtitleimgsrc">
                                <span id="recomtitlename">My Pokémon Ranch</span>
                                <span id="recomtitleprice">1000 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle03">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/pokemon/pokemonsnap/pokesnap" id="recomtitleimgsrc">
                                <span id="recomtitlename">Pokémon Snap</span>
                                <span id="recomtitleprice">1000 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle04">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/pokemon/pokemonpuzzle/pokepuzzle" id="recomtitleimgsrc">
                                <span id="recomtitlename">Pokémon Puzzle</span>
                                <span id="recomtitleprice">1000 Wii Points</span>
                            </a>
                        </div>
    
    
                    </div>
                    <!-- POKEMON -->
    
    
                    <!-- A BIT RETRO -->
                    <div id="recommendedsort03">
    
    
    
                        <!-- 
        !!! do not modify anything above, itll mess up the scroller!!! !!!
        only modify the header name 
        in the scripts:
        document.getElementById("hdrtxtpart1").innerHTML="nameofsection";
        document.getElementById("hdrtxtpart2").innerHTML="(smallerhdrtxtnexttofirsthdrtxt)";
        document.getElementById('hdrurl').href = "#?sectionname";)
        in the scripts
        and the titles below
         -->
    
                        <div id="recomtitle01">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/abitretro/mariokart64/mk64" id="recomtitleimgsrc">
                                <span id="recomtitlename">Mario Kart 64</span>
                                <span id="recomtitleprice">1000 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle02">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/abitretro/mariobros3/mario3" id="recomtitleimgsrc">
                                <span id="recomtitlename">Super Mario Bros. 3</span>
                                <span id="recomtitleprice">500 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle03">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/abitretro/warioswoods/wariowoods" id="recomtitleimgsrc">
                                <span id="recomtitlename">Wario's Woods</span>
                                <span id="recomtitleprice">500 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle04">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/abitretro/sonicthehedgehog/sonic1" id="recomtitleimgsrc">
                                <span id="recomtitlename">Sonic The Hedgehog</span>
                                <span id="recomtitleprice">800 Wii Points</span>
                            </a>
                        </div>
    
                    </div>
                    <!-- A BIT RETRO -->
    
    
                    <!-- DIGITAL ONLY -->
                    <div id="recommendedsort04">
    
                        <!-- 
            !!! do not modify anything above, itll mess up the scroller!!! !!!
        only modify the header name 
        in the scripts:
        document.getElementById("hdrtxtpart1").innerHTML="nameofsection";
        document.getElementById("hdrtxtpart2").innerHTML="(smallerhdrtxtnexttofirsthdrtxt)";
        document.getElementById('hdrurl').href = "#?sectionname";)
        in the scripts
        and the titles below 
        -->
    
                        <div id="recomtitle01">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/digitalonly/pokemonrumble/pokerumble" id="recomtitleimgsrc">
                                <span id="recomtitlename">Pokémon Rumble</span>
                                <span id="recomtitleprice">1500 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle02">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/digitalonly/worldofgoo/wog" id="recomtitleimgsrc">
                                <span id="recomtitlename">World of Goo</span>
                                <span id="recomtitleprice">1500 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle03">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/digitalonly/tetrisparty/tetris" id="recomtitleimgsrc">
                                <span id="recomtitlename">Tetris party</span>
                                <span id="recomtitleprice">1200 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle04">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/digitalonly/drmarioonlinerx/drmario" id="recomtitleimgsrc">
                                <span id="recomtitlename">Dr. Mario Online Rx</span>
                                <span id="recomtitleprice">1000 Wii Points</span>
                            </a>
                        </div>
    
                    </div>
                    <!-- DIGITAL ONLY -->
    
    
                    <!-- DEMOS -->
                    <div id="recommendedsort05">
    
                        <!-- 
            !!! do not modify anything above, itll mess up the scroller!!! !!!
        only modify the header name 
        in the scripts:
        document.getElementById("hdrtxtpart1").innerHTML="nameofsection";
        document.getElementById("hdrtxtpart2").innerHTML="(smallerhdrtxtnexttofirsthdrtxt)";
        document.getElementById('hdrurl').href = "#?sectionname";)
        in the scripts
        and the titles below
         -->
    
                        <div id="recomtitle01">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/demos/pokemonrumbledemo/pokerumbledemo" id="recomtitleimgsrc">
                                <span id="recomtitlename" style="margin-top:-58px;">Pokémon Rumble <br> Demo</span>
                                <span id="recomtitleprice" style="margin-top:8px;">0 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle02">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/demos/fastracingleaguedemo/fastracingdemo" id="recomtitleimgsrc">
                                <span id="recomtitlename" style="margin-top:-58px;">FAST - Racing League Demo</span>
                                <span id="recomtitleprice" style="margin-top:8px;">0 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle03">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/demos/2fast4gnomzdemo/24gnomzdemo" id="recomtitleimgsrc">
                                <span id="recomtitlename" style="margin-top:-58px;">2 Fast 4 Gnomz <br> Demo</span>
                                <span id="recomtitleprice" style="margin-top:8px;">0 Wii Points</span>
                            </a>
                        </div>
    
                        <div id="recomtitle04">
                            <a href="#?titleid=null" style="text-decoration:none; display:block;" onclick="snd.playSE(3);" id="titleurl" onmouseover="hidearrowRcover(); snd.playSE(2); " onmouseover="hidearrowRcover(); snd.playSE(2); ">
                                <img src="/static/recommendedtitles/recomtitleicons/demos/kyotokeidemo/kyotokeidemo" id="recomtitleimgsrc">
                                <span id="recomtitlename" style="margin-top:-58px;">Kyotokei <br> Demo</span>
                                <span id="recomtitleprice" style="margin-top:8px;">0 Wii Points</span>
                            </a>
                        </div>
    
                    </div>
                    <!-- DEMOS -->
    
                    <!-- recom sections end-->
                </div>
    
            </div>
            <!-- titles end -->
    
    
    
    
        </div>
    
        <!-- recommended end   (made by ChrisplayzYT/BLOX, 10/25/2024 - 10/26/2024) -->
    </div>


```

↑ the recommended titles code needed ↑
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
↑ the recommended titles code needed ↑


<br><br><br>
 Wii Shop Channel Custom Recommended Titles System made by ChrisplayzYT/BLOX.
 <br>
All Rights Reserved to Nintendo/Opera for the built in code "new wiiShop(), "new wiiSound()", and DreamWeaver for MM_preloadImages(); used by Acer Cloud/Nintendo, 2006.
