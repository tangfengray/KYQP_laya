var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}(),ButtonState=function(t){function e(e,i){var s=t.call(this,e,i)||this;return s.state=-1,s.state=0,s}return __extends(e,t),e.prototype.changeState=function(){t.prototype.changeState.call(this);var e=null;0==this.state?((e=this.getChildByName("up"))&&(e.visible=!0),(e=this.getChildByName("down"))&&(e.visible=!1),(e=this.getChildByName("over"))&&(e.visible=!1)):1==this.state?((e=this.getChildByName("up"))&&(e.visible=!1),(e=this.getChildByName("down"))&&(e.visible=!1),(e=this.getChildByName("over"))&&(e.visible=!0)):2==this.state&&((e=this.getChildByName("up"))&&(e.visible=!1),(e=this.getChildByName("down"))&&(e.visible=!0),(e=this.getChildByName("over"))&&(e.visible=!1))},e}(laya.ui.Button);