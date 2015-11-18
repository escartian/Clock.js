function animloop(){
  requestAnimFrame(animloop);
  clock();
}

function clock()
{
  var x=100;
  var y=100;
  var r=100;
  var now=new Date();
  var seconds=now.getSeconds();
  var minutes=now.getMinutes();
  var hours=now.getHours();
  var r1=90;
  var r2=70;
  var r3=80;
  var angleM=(Math.PI*2*minutes/60)-Math.PI/2;
  var angleH=Math.PI*2*(hours)/12-Math.PI/2;
  var angleS=(Math.PI*2*seconds/60)-Math.PI/2;
  xS=r3*Math.cos(angleS);
  yS=r3*Math.sin(angleS);
  xM=r1*Math.cos(angleM);
  yM=r1*Math.sin(angleM);
  xH=r2*Math.cos(angleH);
  yH=r2*Math.sin(angleH);
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.fillStyle="#FF0000";
  ctx.beginPath();
  ctx.arc(x,y,r,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle="#FFFFFF";
  ctx.beginPath();
  ctx.arc(x,y,r*.99,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.beginPath(x,y);
  ctx.lineTo(x+xH,y+yH);//hour
  ctx.lineTo(x,y);//centre
  ctx.lineTo(x+xM,y+yM);//minute
  ctx.lineTo(x,y);
  ctx.lineTo(x+xS,y+yS);//second
  ctx.stroke();
}
 
 window.onload = function(){
           window.requestAnimFrame = (function(){
                   return  window.requestAnimationFrame       ||
                           window.webkitRequestAnimationFrame ||
                           window.mozRequestAnimationFrame    ||
                           window.oRequestAnimationFrame      ||
                           window.msRequestAnimationFrame     ||
                           function( callback ){
                               window.setTimeout(callback, 1000 / 60);
                           };
               })();
           animloop();
};
