var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),Model=function(t){function n(){var n=t.call(this)||this;return n._eventManager=EventManager.ins,n.recvInit(),n}return __extends(n,t),n.prototype.regist=function(t,n){this._eventManager.on(t,n,this)},n.prototype.proChange=function(t,n){this._eventManager.dispatch(t,n)},n.prototype.recvInit=function(){},n}(SendHandel);