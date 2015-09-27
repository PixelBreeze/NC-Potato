$('head').append('<link rel="stylesheet" href="https://rawgit.com/PixelBreeze/NC-Potato/master/tempcss.css" type="text/css"/>');
var name = "@" + username;
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
    $('#img').append('<div id="ncsmenu"></div>')
    $('#ncsmenu').append('<div id="ncsafk" class="menuitem">AFK Message</div>')
 
    var menustatus;
    $('#ncsbutton').on('click',function(){
    if (menustatus==1) {
    $('#ncsmenu').css('visibility', 'hidden');
    menustatus=0;
    } else {
    $('#ncsmenu').css('visibility', 'visible');
    menustatus=1;
    }
    })

    var afktoggle;
    $('#ncsafk').on('click',function(){
    if (afktoggle==1) {
    afkscr = 0;
    $('#afkc').css('visibility', 'hidden');
    afktoggle=0;
    console.log('afk off');
    } else {
    afkscr = 1;
    console.log('afk on');
    $('#afkc').css('visibility', 'visible');
    afktoggle=1;
    }
    })

API.on(API.events.CHAT, function(data) {
 if (afkscr === 1) {
 if (data.message.indexOf(name) > -1) { 
 API.sendChat("Yo @" + data.user.username + " be back soon...")}}})




