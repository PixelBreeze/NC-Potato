var scktmsg = socket.onmessage;
$('head').append('<link rel="stylesheet" href="https://rawgit.com/PixelBreeze/NC-Potato/master/tempcss.css" type="text/css"/>');
var afkscr = 0; //default value for afk script
var colorR = '#00CEFF'; //color RDj
var colorB = '#0058FF'; //color Bouncer
var colorM = '#FF00F5'; //color Manager
var colorCH = '#FF005C'; //color Cohost
var colorH = '#FF002D'; //color Host
 ///color changers
  $('body').append('<style> .uname.rank-1 {color:' + colorR + ' !important} </style>')
  $('body').append('<style> .uname.rank-2 {color:' + colorB + ' !important} </style>')
  $('body').append('<style> .uname.rank-3 {color:' + colorM + ' !important} </style>')
  $('body').append('<style> .uname.rank-4 {color:' + colorCH + ' !important} </style>')
  $('body').append('<style> .uname.rank-5 {color:' + colorH + ' !important} </style>')
  //some more shiz
    $('.navbar.footer').append('<div id="ncsbutton">NCS</div>')
    $('body').append('<div id="ncsmenu"></div>')
    $('#ncsmenu').append('<div class="menuitem">AFK Message</div>')
    
    var e;
    $('#ncsbutton').on('click',function(){
    if (e==1) {
    $('#ncsmenu').css('visibility', 'hidden');
    e=0;
    } else {
    $('#ncsmenu').css('visibility', 'visible');
    e=1;
    }
    })

    var afktoggle;
    $('#ncsafk').on('click',function(){
    if (afktoggle==1) {
    afkscr = 0
    $('#afkc').css('visibility', 'hidden');
    afktoggle=0;
    console.log('afk off');
    } else {
    afkscr = 1
    console.log('afk on');
    $('#afkc').css('visibility', 'visible');
    afktoggle=1;
    }
    })


//socket.onmessage = function(e){scktmsg(e);e=JSON.parse(e.data);
// if (e.text.indexOf("Pixel") > -1) {
 //  API.sendChat("Sorry im AFK rightnow!");
//  }
//}




