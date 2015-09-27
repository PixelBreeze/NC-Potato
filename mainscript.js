var scktmsg = socket.onmessage;

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
  $('.navbar.footer').append(<div id="ncsbutton">NCS</div>)

//socket.onmessage = function(e){scktmsg(e);e=JSON.parse(e.data);
// if (e.text.indexOf("Pixel") > -1) {
 //  API.sendChat("Sorry im AFK rightnow!");
//  }
//}




