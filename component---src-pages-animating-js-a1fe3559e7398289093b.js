(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{207:function(n,i,r){"use strict";r.r(i);r(100),r(141);var t=r(0),a=r.n(t),e=r(204),o=r(215);r(205);i.default=function(){var n=Object(t.useRef)(null),i=Object(t.useRef)(null),r=Object(t.useRef)([]);return Object(t.useEffect)((function(){n.current.width=window.innerWidth,n.current.height=window.innerHeight;var t=n.current.getContext("2d");return t.clearRect(0,0,window.innerWidth,window.innerHeight),r.current=[],Array.from(new Array(50)).forEach((function(n,i){var a=Math.ceil(30*Math.random())+10,e="rgba("+255*Math.random()+", "+255*Math.random()+", "+255*Math.random()+", 0.5)",d=Math.random()*(window.innerWidth-2*a)+a+5,u=Math.random()*(window.innerHeight-2*a)+a+5,c=(i%2==0?-5:5)*Math.random()+3,h=(i%2==0?5:-5)*Math.random()+3,s=new o.a({x:d,y:u,dx:c,dy:h,radius:a,color:e});s.draw(t),r.current.push(s)})),i.current=function t(){var a=n.current.getContext("2d");a.clearRect(0,0,window.innerWidth,window.innerHeight),r.current.forEach((function(n){n.animate(a)})),i.current=requestAnimationFrame(t)}(),function(){cancelAnimationFrame(i.current)}})),a.a.createElement(e.a,{title:"Animating"},a.a.createElement("canvas",{ref:n}))}},213:function(n,i,r){var t=r(1);t(t.P,"Array",{fill:r(214)}),r(101)("fill")},214:function(n,i,r){"use strict";var t=r(20),a=r(142),e=r(19);n.exports=function(n){for(var i=t(this),r=e(i.length),o=arguments.length,d=a(o>1?arguments[1]:void 0,r),u=o>2?arguments[2]:void 0,c=void 0===u?r:a(u,r);c>d;)i[d++]=n;return i}},215:function(n,i,r){"use strict";r(213);i.a=function(n){var i=this,r=n.x,t=n.y,a=n.dx,e=n.dy,o=n.radius,d=n.color;this.draw=function(n){n.beginPath(),n.arc(i.x,i.y,i.radius,0,2*Math.PI,!1),n.fillStyle=i.color,n.fill()},this.animate=function(n,r,t){if((i.x>window.innerWidth-i.radius||i.x<i.radius)&&(i.dx=-i.dx),(i.y>window.innerHeight-i.radius||i.y<i.radius)&&(i.dy=-i.dy),i.x+=i.dx,i.y+=i.dy,void 0!==r&&void 0!==t){var a=r-i.x,e=t-i.y;a<50&&a>-50&&e<50&&e>-50&&i.radius<=i.maxRadius?i.radius+=1:i.radius>=i.minRadius&&(i.radius-=1)}i.draw(n)},this.radius=o,this.minRadius=o,this.maxRadius=30,this.color=d,this.x=Math.floor(r),this.y=Math.floor(t),this.dx=Math.floor(a),this.dy=Math.floor(e)}}}]);
//# sourceMappingURL=component---src-pages-animating-js-a1fe3559e7398289093b.js.map