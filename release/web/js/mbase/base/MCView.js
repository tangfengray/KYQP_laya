var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),Handler=laya.utils.Handler,MCView=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.closeNow=function(){this.display.viewType==ComView.WINDOW||this.display.viewType==ComView.WINDOW_NO_CLOSEAUTO?laya.utils.Tween.to(this.display,{scaleX:.9,scaleY:.9,alpha:.5},100,null,Handler.create(this,this.tweenClose,[],!1)):t.prototype.closeNow.call(this)},e.prototype.tweenClose=function(){t.prototype.closeNow.call(this),this.display.scaleX=this.display.scaleY=this.display.alpha=1},e.prototype.showNow=function(){t.prototype.showNow.call(this),this.display.viewType==ComView.WINDOW||this.display.viewType==ComView.WINDOW_NO_CLOSEAUTO?laya.utils.Tween.from(this.display,{scaleX:.9,scaleY:.9,alpha:.5},100,null,Handler.create(this,this.tweenShow,[],!1)):t.prototype.showNow.call(this)},e.prototype.tweenShow=function(){},e}(CView);