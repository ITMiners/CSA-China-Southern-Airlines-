"use strict";new Vue({el:".carousel",data:{mark:0,timer:null,img:["images/scroll-1.png","images/scroll-2.png","images/scroll-3.png","images/scroll-4.png"]},created:function(){this.play()},methods:{change:function(a){this.mark=a},autoPlay:function(){this.mark++,4!==this.mark||(this.mark=0)},play:function(){setInterval(this.autoPlay,2e3)}}});