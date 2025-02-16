// (optional if you already have this in another js file, remove this.)
var shop = new wiiShop();
// made by ChrisplayzWii, 10/25/2024 - 2/1/2025

// recommended titles preloader part 1
MM_preloadImages(
    // header
    '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_noAction.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_SoftList_over.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_SoftList_press.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_noAction.png',
    // header

    // titleboxes
    '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_noAction.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_over.png', '/static/recommendedtitles/ARROWSANDHEADER/GifA_Soft_press.png',
    // titleboxes

// arrows
'/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png','/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png','/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png','/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png','/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_00.png','/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_S.png'
,'/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png','/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png','/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png','/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png','/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_00.png','/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_S.png');
// arrows

// recommended titles preloader part 1

preloadtitlesonrecommended(); // cause the shop can't handle so many preloads in one MM_preloadImages

// recommended titles preloader part 2
function preloadtitlesonrecommended() {
    // preload title icons
    MM_preloadImages(
        // Wii Shop ChannelRecommended Titles
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/amazoninstantvideo/AIVwii.png',
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/huluplus/hulupluswii.png',
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/Super Smash Bros/ssb1.png',
        '/static/recommendedtitles/recomtitleicons/wscrecommendedtitles/mariokart64/mk64.png',
        // Pokémon
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonrumble/pokerumble.png',
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonranch/pokeranch.png',
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonsnap/pokesnap.png',
        '/static/recommendedtitles/recomtitleicons/pokemon/pokemonpuzzle/pokepuzzle.png',
        // A Bit Retro
        '/static/recommendedtitles/recomtitleicons/abitretro/mariokart64/mk64.png',
        '/static/recommendedtitles/recomtitleicons/abitretro/mariobros3/mario3.png',
        '/static/recommendedtitles/recomtitleicons/abitretro/warioswoods/wariowoods.png',
        '/static/recommendedtitles/recomtitleicons/abitretro/sonicthehedgehog/sonic1.png',
        // Digital Only
        '/static/recommendedtitles/recomtitleicons/digitalonly/pokemonrumble/pokerumble.png',
        '/static/recommendedtitles/recomtitleicons/digitalonly/worldofgoo/wog.png',
        '/static/recommendedtitles/recomtitleicons/digitalonly/tetrisparty/tetris.png',
        '/static/recommendedtitles/recomtitleicons/digitalonly/drmarioonlinerx/drmario.png',
        // Demos
        '/static/recommendedtitles/recomtitleicons/demos/pokemonrumbledemo/pokerumbledemo.png',
        '/static/recommendedtitles/recomtitleicons/demos/fastracingleaguedemo/fastracingdemo.png',
        '/static/recommendedtitles/recomtitleicons/demos/2fast4gnomzdemo/24gnomzdemo.png',
        '/static/recommendedtitles/recomtitleicons/demos/kyotokeidemo/kyotokeidemo.png');
}
// recommended titles preloader part 2


// initates the recommended titles system

// needed to make the recommended titles function


// activate press & hover sounds
var snd = new wiiSound();
snd.playBGM();
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

// the recom animation!1!1

// arrow L animation 
function animateLarrow() {
document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
document.getElementById("arrowL").style.left="30px";
setTimeout(animateLarrow2,62);
}

function animateLarrow2() {
    document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
    document.getElementById("arrowL").style.left="29px";
    setTimeout(animateLarrow3,62);
    }

    function animateLarrow3() {
        document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
        document.getElementById("arrowL").style.left="28px";
        setTimeout(animateLarrow4,62);
        }

        function animateLarrow4() {
            document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
            document.getElementById("arrowL").style.left="27px";
            setTimeout(animateLarrow5,62);
            }
            
        function animateLarrow5() {
            document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png";
            document.getElementById("arrowL").style.left="26px";
            setTimeout(animateLarrow6,62);
            }

                        
        function animateLarrow6() {
            document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png";
            document.getElementById("arrowL").style.left="25px";
            setTimeout(animateLarrow7,62);
            }


            function animateLarrow7() {
                document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png";
                document.getElementById("arrowL").style.left="24px";
                setTimeout(animateLarrow8,62);
                }

                
            function animateLarrow8() {
                document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png";
                document.getElementById("arrowL").style.left="23px";
                setTimeout(animateLarrow9,62);
                }
                
                
            function animateLarrow9() {
                document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_00.png";
                document.getElementById("arrowL").style.left="22px";
                setTimeout(animateLarrow10,62);
                }

                function animateLarrow10() {
                    document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_00.png";
                    document.getElementById("arrowL").style.left="21px";
                    setTimeout(animateLarrow11,62);
                    }

                    function animateLarrow11() {
                            //  makes animation longa so it goes all the way (no img :( ))
                        document.getElementById("arrowL").style.left="20px";
                        setTimeout(animateLarrow12,62);
                        }

                        // go back to original 
                        function animateLarrow12() {
                            //  makes animation longa so it goes all the way (no img :( ))
                               document.getElementById("arrowL").style.left="21px";
                               setTimeout(animateLarrow13,62);
                               }

                               function animateLarrow13() {
                                   document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png";
                                   document.getElementById("arrowL").style.left="22px";
                                   setTimeout(animateLarrow14,62);
                                   }

                                   function animateLarrow14() {
                                    document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_01.png";
                                    document.getElementById("arrowL").style.left="23px";
                                    setTimeout(animateLarrow15,62);
                                    }

                                    
                                   function animateLarrow15() {
                                    document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png";
                                    document.getElementById("arrowL").style.left="24px";
                                    setTimeout(animateLarrow16,62);
                                    }

                                    function animateLarrow16() {
                                        document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_02.png";
                                        document.getElementById("arrowL").style.left="25px";
                                        setTimeout(animateLarrow17,62);
                                        }

                                        function animateLarrow17() {
                                            document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
                                            document.getElementById("arrowL").style.left="26px";
                                            setTimeout(animateLarrow18,62);
                                            }
                       
                                            function animateLarrow18() {
                                                document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
                                                document.getElementById("arrowL").style.left="26px";
                                                setTimeout(animateLarrow19,62);
                                                }         
                                   
                                                function animateLarrow19() {
                                                    document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_03.png";
                                                    document.getElementById("arrowL").style.left="27px";
                                                    setTimeout(animateLarrow20,62);
                                                    }         

                                                    function animateLarrow20() {
                                                        document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
                                                        document.getElementById("arrowL").style.left="28px";
                                                        setTimeout(animateLarrow21,62);
                                                        }         

                                                        function animateLarrow21() {
                                                            document.getElementById("arrowLimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_L_arrow_04.png";
                                                            document.getElementById("arrowL").style.left="29px";
                                                            setTimeout(animateLarrow22,62);
                                                            }         

                                                            function animateLarrow22() {
                                                                                      //  makes animation longa so it goes all the way (no img :( ))
                                                                document.getElementById("arrowL").style.left="30px";
                                                                setTimeout(animateLarrow23,62);
                                                                }         

                                                                
                                                            function animateLarrow23() {
                                                                                            //  makes animation longa so it goes all the way (no img :( ))
                                                                    document.getElementById("arrowL").style.left="31px";
                                                                    setTimeout(animateLarrow24,62);
                                                                    }         

                                                                    function animateLarrow24() {
                                                                                                  //  makes animation longa so it goes all the way (no img :( ))
                                                                            document.getElementById("arrowL").style.left="31px";
                                                                            setTimeout(animateLarrow,75);
                                                                            }         



                                                                            // arrow R animation 
function animateRarrow() {
    document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
    document.getElementById("arrowR").style.right="30px";
    setTimeout(animateRarrow2,62);
    }
    
    function animateRarrow2() {
        document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
        document.getElementById("arrowR").style.right="29px";
        setTimeout(animateRarrow3,62);
        }
    
        function animateRarrow3() {
            document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
            document.getElementById("arrowR").style.right="28px";
            setTimeout(animateRarrow4,62);
            }
    
            function animateRarrow4() {
                document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
                document.getElementById("arrowR").style.right="27px";
                setTimeout(animateRarrow5,62);
                }
                
            function animateRarrow5() {
                document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png";
                document.getElementById("arrowR").style.right="26px";
                setTimeout(animateRarrow6,62);
                }
    
                            
            function animateRarrow6() {
                document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png";
                document.getElementById("arrowR").style.right="25px";
                setTimeout(animateRarrow7,62);
                }
    
    
                function animateRarrow7() {
                    document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png";
                    document.getElementById("arrowR").style.right="24px";
                    setTimeout(animateRarrow8,62);
                    }
    
                    
                function animateRarrow8() {
                    document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png";
                    document.getElementById("arrowR").style.right="23px";
                    setTimeout(animateRarrow9,62);
                    }
                    
                    
                function animateRarrow9() {
                    document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_00.png";
                    document.getElementById("arrowR").style.right="22px";
                    setTimeout(animateRarrow10,62);
                    }
    
                    function animateRarrow10() {
                        document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_00.png";
                        document.getElementById("arrowR").style.right="21px";
                        setTimeout(animateRarrow11,62);
                        }
    
                        function animateRarrow11() {
                                //  makes animation longa so it goes all the way (no img :( ))
                            document.getElementById("arrowR").style.right="20px";
                            setTimeout(animateRarrow12,62);
                            }
    
                            // go back to original 
                            function animateRarrow12() {
                                //  makes animation longa so it goes all the way (no img :( ))
                                   document.getElementById("arrowR").style.right="21px";
                                   setTimeout(animateRarrow13,62);
                                   }
    
                                   function animateRarrow13() {
                                       document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png";
                                       document.getElementById("arrowR").style.right="22px";
                                       setTimeout(animateRarrow14,62);
                                       }
    
                                       function animateRarrow14() {
                                        document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_01.png";
                                        document.getElementById("arrowR").style.right="23px";
                                        setTimeout(animateRarrow15,62);
                                        }
    
                                        
                                       function animateRarrow15() {
                                        document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png";
                                        document.getElementById("arrowR").style.right="24px";
                                        setTimeout(animateRarrow16,62);
                                        }
    
                                        function animateRarrow16() {
                                            document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_02.png";
                                            document.getElementById("arrowR").style.right="25px";
                                            setTimeout(animateRarrow17,62);
                                            }
    
                                            function animateRarrow17() {
                                                document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
                                                document.getElementById("arrowR").style.right="26px";
                                                setTimeout(animateRarrow18,62);
                                                }
                           
                                                function animateRarrow18() {
                                                    document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
                                                    document.getElementById("arrowR").style.right="26px";
                                                    setTimeout(animateRarrow19,62);
                                                    }         
                                       
                                                    function animateRarrow19() {
                                                        document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_03.png";
                                                        document.getElementById("arrowR").style.right="27px";
                                                        setTimeout(animateRarrow20,62);
                                                        }         
    
                                                        function animateRarrow20() {
                                                            document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
                                                            document.getElementById("arrowR").style.right="28px";
                                                            setTimeout(animateRarrow21,62);
                                                            }         
    
                                                            function animateRarrow21() {
                                                                document.getElementById("arrowRimgsrc").src="/static/recommendedtitles/ARROWSANDHEADER/top_R_arrow_04.png";
                                                                document.getElementById("arrowR").style.right="29px";
                                                                setTimeout(animateRarrow22,62);
                                                                }         
    
                                                                function animateRarrow22() {
                                                                                          //  makes animation longa so it goes all the way (no img :( ))
                                                                    document.getElementById("arrowR").style.right="30px";
                                                                    setTimeout(animateRarrow23,62);
                                                                    }         
    
                                                                    
                                                                function animateRarrow23() {
                                                                                                //  makes animation longa so it goes all the way (no img :( ))
                                                                        document.getElementById("arrowR").style.right="31px";
                                                                        setTimeout(animateRarrow24,62);
                                                                        }         
    
                                                                        function animateRarrow24() {
                                                                                                      //  makes animation longa so it goes all the way (no img :( ))
                                                                                document.getElementById("arrowR").style.right="31px";
                                                                                setTimeout(animateRarrow,75);
                                                                                }         



function startscrolltitles() {
    if (isScrolling) return; 

    isScrolling = true;  
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: snd.playSE(6);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: snd.playSE(6);");

    snd.playSE(3);
    document.getElementById("sectionsoftitlesrecom").style.display = "block";
    var titlesofrecom = document.getElementById("sectionsoftitlesrecom");
    document.getElementById("sectionsoftitlesrecom").style.marginLeft = "0px";

    scrollInterval = setInterval(function () {
        var howfarleft = parseInt(titlesofrecom.style.marginLeft || "0", 10);
        titlesofrecom.style.marginLeft = (howfarleft - 15) + "px";
    }, 11); // 11 is not the speed, 10 is

    setTimeout(stopScrollTitles, 450);  
}

function stopScrollTitles() {
    clearInterval(scrollInterval); 

    setTimeout(nolongerscrolling,100);

    setTimeout(stopfortest, 100);
}
function nolongerscrolling() {
    isScrolling = false; 
}

function stopfortest() {
    document.getElementById("sectionsoftitlesrecom").style.display = "none";
    later();
}

function later() {
    document.getElementById("sectionsoftitlesrecom").style.display = "block";
    var titlesofrecom = document.getElementById("sectionsoftitlesrecom");
    titlesofrecom.style.marginLeft = "113px";

    scrollIntervalend = setInterval(function () {
        var howfarleft = parseInt(titlesofrecom.style.marginLeft, 10); 
        titlesofrecom.style.marginLeft = (howfarleft - 15) + "px"; // goes backwards (hopefully)
    }, 11); // 11 is not the speed, 10 is

    setTimeout(stopScrollTitlesfinal, 105);
}

function stopScrollTitlesfinal() {
    clearInterval(scrollInterval); 
    clearInterval(scrollIntervalend); 
    isScrolling = false;
}





// the recom animation!1!1


// recommended script pt2 (change up the titles and text) [ NOT THE ANIMATION]
function recommendeddefault() {
    isScrolling = false;
    changeuptitles1();
}


function recommended1show() {
    setTimeout(changeuptitles1, 400);
    startscrolltitles(); // triggers the scrollerrr

}

function changeuptitles1() {

    // Recommended Titles
    document.getElementById("hdrtxtpart1").innerHTML = "Wii Shop Channel";
    document.getElementById("hdrtxtpart2").innerHTML = "Recommended Titles";
    document.getElementById('hdrurl').href = "#?wscrecommendedtitles";

    document.getElementById('recommendedsort01').style.display = "block";
    document.getElementById('recommendedsort02').style.display = "none";
    document.getElementById('recommendedsort03').style.display = "none";
    document.getElementById('recommendedsort04').style.display = "none";
    document.getElementById('recommendedsort05').style.display = "none";
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended5show(); snd.playSE(3);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended2show(); snd.playSE(3);");
}


function recommended2show() {
    setTimeout(changeuptitles2, 400);
    startscrolltitles(); // triggers the scrollerrr

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
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended1show(); snd.playSE(3);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended3show(); snd.playSE(3);");
}

function recommended3show() {
    setTimeout(changeuptitles3, 400);
    startscrolltitles(); // triggers the scrollerrr

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
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended2show(); snd.playSE(3);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended4show(); snd.playSE(3);");
}

function recommended4show() {
    setTimeout(changeuptitles4, 400);
    startscrolltitles(); // triggers the scrollerrr

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
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended3show(); snd.playSE(3);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended5show(); snd.playSE(3);");
}

function recommended5show() {
    setTimeout(changeuptitles5, 400);
    startscrolltitles(); // triggers the scrollerrr

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
    document.getElementById("arrowLCOVER").setAttribute("onClick", "javascript: recommended4show(); snd.playSE(3);");
    document.getElementById("arrowRCOVER").setAttribute("onClick", "javascript: recommended1show(); snd.playSE(3);");
}

function showarrowLcover() {
    var arrowL = document.getElementById("arrowL");
    var arrowLcover = document.getElementById("arrowLCOVER");

    arrowLcover.style.left = arrowL.style.left;
    
    document.getElementById("arrowLCOVER").style.display= "block";//none
    document.getElementById("arrowL").style.display = "none";//bloick
}

function showarrowRcover() {
    var arrowR = document.getElementById("arrowR");
    var arrowRcover = document.getElementById("arrowRCOVER");

    arrowRcover.style.right = arrowR.style.right;
    
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
