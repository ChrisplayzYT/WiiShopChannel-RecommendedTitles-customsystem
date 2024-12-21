// (optional if you already have this in another js file, remove this.)
var shop = new wiiShop();

// recommended titles preloader part 1
MM_preloadImages(
    // header
    '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_noAction.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_SoftList_over.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_SoftList_press.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_noAction.png',
    // header

    // titleboxes
    '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_noAction.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_over.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_press.png',
    // titleboxes

    // arrows
    '/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_00.png', '/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png', '/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png', '/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png', '/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png', '/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_S.png', '/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_00.png', '/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png', '/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png', '/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png', '/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png',
    '/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_S.png');
// arrows

// recommended titles preloader part 1

preloadtitlesonrecommended(); // cause the shop can't handle so many preloads in one MM_preloadImages

// recommended titles preloader part 2
function preloadtitlesonrecommended() {
    // preload title icons
    MM_preloadImages(
        // Wii Shop ChannelRecommended Titles
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/amazoninstantvideo/AIVwii',
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/huluplus/hulupluswii',
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/Super Smash Bros/ssb1',
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/mariokart64/mk64',
        // Pokémon
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonrumble/pokerumble',
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonranch/pokeranch',
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonsnap/pokesnap',
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonpuzzle/pokepuzzle',
        // A Bit Retro
        '/static/recommendedtitles/recomtitleicons/abitretro/mariokart64/mk64',
        '/static/recommendedtitles/recomtitleicons/abitretro/mariobros3/mario3',
        '/static/recommendedtitles/recomtitleicons/abitretro/warioswoods/wariowoods',
        '/static/recommendedtitles/recomtitleicons/abitretro/sonicthehedgehog/sonic1',
        // Digital Only
        '/static/recommendedtitles/recomtitleicons/digitalonly/pokemonrumble/pokerumble',
        '/static/recommendedtitles/recomtitleicons/digitalonly/worldofgoo/wog',
        '/static/recommendedtitles/recomtitleicons/digitalonly/tetrisparty/tetris',
        '/static/recommendedtitles/recomtitleicons/digitalonly/drmarioonlinerx/drmario',
        // Demos
        '/static/recommendedtitles/recomtitleicons/demos/pokemonrumbledemo/pokerumbledemo',
        '/static/recommendedtitles/recomtitleicons/demos/fastracingleaguedemo/fastracingdemo',
        '/static/recommendedtitles/recomtitleicons/demos/2fast4gnomzdemo/24gnomzdemo',
        '/static/recommendedtitles/recomtitleicons/demos/kyotokeidemo/kyotokeidemo');
}
// recommended titles preloader part 2


// initates the recommended titles system

// needed to make the recommended titles function


// activate press & hover sounds
var snd = new wiiSound();

// Preload title & arrow images, Copyright DreamWeaver, borrowed by Acer Cloud Technology, Inc. during 2005-2014. 
function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length,
            a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}


// arrow L animation 
function animateLarrow() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
    document.getElementById("arrowL").style.left = "30px";
    setTimeout(animate1L, 71);
}

function animate1L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
    document.getElementById("arrowL").style.left = "29px";
    setTimeout(animate3L, 71);
}

function animate3L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
    document.getElementById("arrowL").style.left = "28px";
    setTimeout(animate4L, 71);
}

function animate4L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
    document.getElementById("arrowL").style.left = "27px";
    setTimeout(animate5L, 71);
}

function animate5L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png";
    document.getElementById("arrowL").style.left = "26px";
    setTimeout(animate6L, 71);
}

function animate6L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png";
    document.getElementById("arrowL").style.left = "25px";
    setTimeout(animate8L, 71);
}

function animate8L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png";
    document.getElementById("arrowL").style.left = "24px";
    setTimeout(animate9L, 71);
}

function animate9L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_00.png";
    document.getElementById("arrowL").style.left = "23px";
    setTimeout(animate10L, 71);
}

function animate10L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_00.png";
    document.getElementById("arrowL").style.left = "22px";
    setTimeout(animate11L, 71);
}

function animate11L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_00.png";
    document.getElementById("arrowL").style.left = "23px";
    setTimeout(animate13L, 71);
}

function animate13L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png";
    document.getElementById("arrowL").style.left = "24px";
    setTimeout(animate15L, 71);
}

function animate15L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png";
    document.getElementById("arrowL").style.left = "25px";
    setTimeout(animate17L, 71);
}

function animate17L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
    document.getElementById("arrowL").style.left = "26px";
    setTimeout(animate19L, 71);
}

function animate19L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
    document.getElementById("arrowL").style.left = "27px";
    setTimeout(animate20L, 71);
}

function animate20L() {
    document.getElementById("arrowLimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
    document.getElementById("arrowL").style.left = "27px";
    setTimeout(animateLarrow, 67);
}


// arrow R animation 
function animateRarrow() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
    document.getElementById("arrowR").style.right = "30px";
    setTimeout(animate1R, 71);
}

function animate1R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
    document.getElementById("arrowR").style.right = "29px";
    setTimeout(animate3R, 71);
}

function animate3R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
    document.getElementById("arrowR").style.right = "28px";
    setTimeout(animate4R, 71);
}

function animate4R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
    document.getElementById("arrowR").style.right = "27px";
    setTimeout(animate5R, 71);
}

function animate5R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png";
    document.getElementById("arrowR").style.right = "26px";
    setTimeout(animate6R, 71);
}

function animate6R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png";
    document.getElementById("arrowR").style.right = "25px";
    setTimeout(animate8R, 71);
}

function animate8R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png";
    document.getElementById("arrowR").style.right = "24px";
    setTimeout(animate9R, 71);
}

function animate9R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_00.png";
    document.getElementById("arrowR").style.right = "23px";
    setTimeout(animate10R, 71);
}

function animate10R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_00.png";
    document.getElementById("arrowR").style.right = "22px";
    setTimeout(animate11R, 71);
}

function animate11R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_00.png";
    document.getElementById("arrowR").style.right = "23px";
    setTimeout(animate13R, 71);
}

function animate13R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png";
    document.getElementById("arrowR").style.right = "24px";
    setTimeout(animate15R, 71);
}

function animate15R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png";
    document.getElementById("arrowR").style.right = "25px";
    setTimeout(animate17R, 71);
}

function animate17R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
    document.getElementById("arrowR").style.right = "26px";
    setTimeout(animate19R, 71);
}

function animate19R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
    document.getElementById("arrowR").style.right = "27px";
    setTimeout(animate20R, 71);
}

function animate20R() {
    document.getElementById("arrowRimgsrc").src = "/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
    document.getElementById("arrowR").style.right = "27px";
    setTimeout(animateRarrow, 67);
}



// recommended script pt1  [ THE ANIMATION!! ]

// reset animations when done

function resettooriginalspothdr() {
    document.getElementById("hdr").style.marginLeft = "-30px";
    var hdrhlrd = document.getElementById('hdr');
    var pushhdrrighttamt = 8; // push the titles far enough that the shops borders hide it (looks horrible on localhost sadly)
    var hdrorigiinalpos = parseInt(hdrhlrd.style.marginLeft) || -30;
    var keyframesbutolderxdhdr = 12; // go zooming fast
    var intervalTime2 = 12;

    clearInterval(hdrhlrd.intervalId);

    hdrhlrd.intervalId = setInterval(function() {
        if (hdrorigiinalpos < pushhdrrighttamt) {
            hdrorigiinalpos += keyframesbutolderxdhdr;
            hdrhlrd.style.marginLeft = hdrorigiinalpos + 'px';
        } else {

        }
    }, intervalTime2);
    showdemarrows();
}



function resettooriginalspot() {

    // changes the margin of the recommeended back to the original 15px so its back to the middle, DUH
    document.getElementById("recomtitlesholder").style.marginLeft = "-110px";
    // added smooth animation
    var recomtitlesholdr = document.getElementById('recomtitlesholder');
    var pushtitlezrightamt = 10;
    var recomtitlesoriginalpos = parseInt(recomtitlesholdr.style.marginLeft) || 0;
    var keyframesbutolderxd = 14;
    var intervalTime = 14;

    clearInterval(recomtitlesholdr.intervalId);

    recomtitlesholdr.intervalId = setInterval(function() {
        if (recomtitlesoriginalpos < pushtitlezrightamt) {
            recomtitlesoriginalpos += keyframesbutolderxd;
            recomtitlesholdr.style.marginLeft = recomtitlesoriginalpos + 'px';
        } else {

        }
    }, intervalTime);
}

function beginscroll() {
    scrolltitles();
    scrollheader();
}

function resetpos() {
    resettooriginalspot();
    resettooriginalspothdr();
}

function scrolltitles() {
    var recomtitlesholdr = document.getElementById('recomtitlesholder');
    var pushtitlezrightamt = 300; // push the titles halfway cause the shop wont do it all the way to 800 (gets to 800 in the finishanim js thanfully... ))
    var recomtitlesoriginalpos = parseInt(recomtitlesholdr.style.marginLeft) || 0;
    var keyframesbutolderxd = 14;
    var intervalTime = 14;
    clearInterval(recomtitlesholdr.intervalId);

    recomtitlesholdr.intervalId = setInterval(function() {
        if (recomtitlesoriginalpos < pushtitlezrightamt) {
            recomtitlesoriginalpos -= keyframesbutolderxd;
            recomtitlesholdr.style.marginLeft = recomtitlesoriginalpos + 'px';
        } else {
            finishanimation(); // finish the animation
        }
    }, intervalTime);
}

function finishanimation() {
    var recomtitlesholdr = document.getElementById('recomtitlesholder');
    var pushtitlezrightamt = 800; // push the titles far enough that the shops borders hide it (looks horrible on localhost sadly)
    var recomtitlesoriginalpos = parseInt(recomtitlesholdr.style.marginLeft) || 0;
    var keyframesbutolderxd = 14; // go zooming fast
    var intervalTime = 14;

    clearInterval(recomtitlesholdr.intervalId);

    recomtitlesholdr.intervalId = setInterval(function() {
        if (recomtitlesoriginalpos < pushtitlezrightamt) {
            recomtitlesoriginalpos -= keyframesbutolderxd;
            recomtitlesholdr.style.marginLeft = recomtitlesoriginalpos + 'px';
        } else {
            resetpos()
        }
    }, intervalTime);
}



function scrollheader() {
    var hdrhlrd = document.getElementById('hdr');
    var pushhdrrighttamt = 300; // push the titles far enough that the shops borders hide it (looks horrible on localhost sadly)
    var hdrorigiinalpos = parseInt(hdrhlrd.style.marginLeft) || 0;
    var keyframesbutolderxdhdr = 12; // go zooming fast
    var intervalTime2 = 12;

    clearInterval(hdrhlrd.intervalId);

    hdrhlrd.intervalId = setInterval(function() {
        if (hdrorigiinalpos < pushhdrrighttamt) {
            hdrorigiinalpos -= keyframesbutolderxdhdr;
            hdrhlrd.style.marginLeft = hdrorigiinalpos + 'px';
        } else {
            scrollheaderpt2();
        }
    }, intervalTime2);
}



function scrollheaderpt2() {
    var hdrhlrd = document.getElementById('hdr');
    var pushhdrrighttamt = 800; // push the titles far enough that the shops borders hide it (looks horrible on localhost sadly)
    var hdrorigiinalpos = parseInt(hdrhlrd.style.marginLeft) || 0;
    var keyframesbutolderxdhdr = 12; // go zooming fast
    var intervalTime2 = 12;

    clearInterval(hdrhlrd.intervalId);

    hdrhlrd.intervalId = setInterval(function() {
        if (hdrorigiinalpos < pushhdrrighttamt) {
            hdrorigiinalpos -= keyframesbutolderxdhdr;
            hdrhlrd.style.marginLeft = hdrorigiinalpos + 'px';
        } else {
            resetpos()
        }
    }, intervalTime2);
}




// recommended script pt2 (change up the titles and text) [ NOT THE ANIMATION]
function recommendeddefault() {
    changeuptitles1();
}


function recommended1show() {
    setTimeout(changeuptitles1, 500);
    beginscroll(); // triggers the scrollerrr
    setTimeout(resetpos, 800);

}

function changeuptitles1() {
    document.getElementById("hdrtxtpart1").innerHTML = "Wii Shop Channel";
    document.getElementById("hdrtxtpart2").innerHTML = "Recommended Titles";
    document.getElementById('hdrurl').href = "#?wscrecommendedtitles";

    document.getElementById('recommendedsort01').style.display = "block";
    document.getElementById('recommendedsort02').style.display = "none";
    document.getElementById('recommendedsort03').style.display = "none";
    document.getElementById('recommendedsort04').style.display = "none";
    document.getElementById('recommendedsort05').style.display = "none";
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended5show(); snd.playSE(4);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended2show(); snd.playSE(3);");
}


function recommended2show() {
    setTimeout(changeuptitles2, 500);
    beginscroll(); // triggers the scrollerrr
    setTimeout(resetpos, 800);
}

function changeuptitles2() {
    document.getElementById("hdrtxtpart1").innerHTML = "Pokémon";
    document.getElementById("hdrtxtpart2").innerHTML = "";
    document.getElementById('hdrurl').href = "#?pokemonrecommendedtitles";

    document.getElementById('recommendedsort01').style.display = "none";
    document.getElementById('recommendedsort02').style.display = "block";
    document.getElementById('recommendedsort03').style.display = "none";
    document.getElementById('recommendedsort04').style.display = "none";
    document.getElementById('recommendedsort05').style.display = "none";
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended1show(); snd.playSE(4);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended3show(); snd.playSE(3);");
}

function recommended3show() {
    setTimeout(changeuptitles3, 500);
    beginscroll(); // triggers the scrollerrr\
    setTimeout(resetpos, 800);
}

function changeuptitles3() {
    document.getElementById("hdrtxtpart1").innerHTML = "A Bit Retro";
    document.getElementById("hdrtxtpart2").innerHTML = "";
    document.getElementById('hdrurl').href = "#?abitretrorecommendedtitles";

    document.getElementById('recommendedsort01').style.display = "none";
    document.getElementById('recommendedsort02').style.display = "none";
    document.getElementById('recommendedsort03').style.display = "block";
    document.getElementById('recommendedsort04').style.display = "none";
    document.getElementById('recommendedsort05').style.display = "none";
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended2show(); snd.playSE(4);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended4show(); snd.playSE(3);");
}

function recommended4show() {
    setTimeout(changeuptitles4, 500);
    beginscroll(); // e//triggers the scrollerr
    setTimeout(resetpos, 800);
}

function changeuptitles4() {
    document.getElementById("hdrtxtpart1").innerHTML = "Digital Only";
    document.getElementById("hdrtxtpart2").innerHTML = "";
    document.getElementById('hdrurl').href = "#?digitalonlyrecommendedtitles";

    document.getElementById('recommendedsort01').style.display = "none";
    document.getElementById('recommendedsort02').style.display = "none";
    document.getElementById('recommendedsort03').style.display = "none";
    document.getElementById('recommendedsort04').style.display = "block";
    document.getElementById('recommendedsort05').style.display = "none";
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended3show(); snd.playSE(4);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended5show(); snd.playSE(3);");
}

function recommended5show() {
    setTimeout(changeuptitles5, 500);
    beginscroll(); // triggers the scrollerrr
    scrollheader();
    setTimeout(resetpos, 800);
}

function changeuptitles5() {
    document.getElementById("hdrtxtpart1").innerHTML = "Demos";
    document.getElementById("hdrtxtpart2").innerHTML = "";
    document.getElementById('hdrurl').href = "#?demosrecommendedtitles";

    document.getElementById('recommendedsort01').style.display = "none";
    document.getElementById('recommendedsort02').style.display = "none";
    document.getElementById('recommendedsort03').style.display = "none";
    document.getElementById('recommendedsort04').style.display = "none";
    document.getElementById('recommendedsort05').style.display = "block";
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended4show(); snd.playSE(4);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended1show(); snd.playSE(3);");
}

function showarrowLcover() {
    document.getElementById("arrowLCOVER").style.display = "block";
    document.getElementById("arrowL").style.display = "none";
}

function showarrowRcover() {
    document.getElementById("arrowRCOVER").style.display = "block";
    document.getElementById("arrowR").style.display = "none";
}

function hidearrowLcover() {
    document.getElementById("arrowLCOVER").style.display = "none";
    document.getElementById("arrowL").style.display = "block";
}

function hidearrowRcover() {
    document.getElementById("arrowRCOVER").style.display = "none";
    document.getElementById("arrowR").style.display = "block";
}