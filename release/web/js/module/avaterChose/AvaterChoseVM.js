var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","./AvaterChoseView","../../mbase/base/MViewModel"],function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(){var t=e.call(this)||this;return t.setAtlasName="res/atlas/userInfoWindow.atlas",t.setClass=o.AvaterChoseView,t}return __extends(t,e),t.prototype.saveHead=function(e,t){this.sendData(16778272,[e]),this.sendData(16778270,[""+t])},t}(n.MViewModel);t.AvaterChoseVM=r});