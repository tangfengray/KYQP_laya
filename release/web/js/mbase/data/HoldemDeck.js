var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=e.call(this)||this;return t.seat=0,t.rid=0,t.name=0,t.icon=0,t.sex=0,t.chip=0,t.amount=0,t._isPlaying=!1,t.nextHandCD=0,t.hand=0,t.curHand=0,t.miniBet=0,t.miniRaise=0,t.dealer=0,t.action=0,t.bet=0,t.cd=0,t.cards=[],t.card=0,t.pot=0,t.blink=0,t.ante=0,t.holeCards=[],t.bestHands=[],t.winner=[],t.seatNO=0,t}return __extends(t,e),Object.defineProperty(t.prototype,"isPlaying",{get:function(){return this._isPlaying},set:function(e){this._isPlaying=e},enumerable:!0,configurable:!0}),t.prototype.recvInit=function(){this.regist("server_Client_createEntity_HoldemDeck",this.onCreateMe)},t.prototype.onCreateMe=function(){},t}(MModel);t.HoldemDeck=n});