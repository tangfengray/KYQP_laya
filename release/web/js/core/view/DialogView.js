var mview,__extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();!function(t){var o=function(t){function o(){return t.call(this)||this}return __extends(o,t),o.prototype.loadUI=function(o){this.createView(Laya.loader.getRes(o+".json")),t.prototype.loadUI.call(this,o)},o}(laya.ui.Dialog);t.DialogView=o}(mview||(mview={}));