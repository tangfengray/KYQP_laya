var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();define(["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(){var e=t.call(this)||this;return e._accountId=0,e.lockGold=0,e.gold=0,e.code=0,e.recordList=[],e.holdemRecords=[],e.erbaRecords=[],e.noticeMsg=[],e.lastRoomId=0,e.curDeck=0,e.roomSN=0,e.roomDataList=[],e.gameList={},e.arr_gameList=[],e.roomDict={},e.gamePlayer=[],e.gameid=0,e.errorCode=0,e.sceneEid=0,e.queueRoomType=0,e.sn=0,e.amount=0,e.ret=0,e}return __extends(e,t),Object.defineProperty(e.prototype,"accountId",{get:function(){return this._accountId},set:function(t){this._accountId=t,StaticData.accountId=t},enumerable:!0,configurable:!0}),e.prototype.getShowGold=function(){return.01*this.gold},Object.defineProperty(e.prototype,"roomData",{get:function(){return this._roomData},set:function(t){this._roomData=t;var e=JSON.parse(t);e.sort(function(t,e){return t.id>e.id?1:-1}),this.roomDataList={},this.roomDict={};for(var o in e){var r=e[o].gameType,i=e[o].id;this.roomDataList[r]||(this.roomDataList[r]=[]),this.roomDict[i]=e[o],this.roomDataList[r].push(e[o])}0!=this.roomSN&&(this.gameType=this.getGameTypeBySN(this.roomSN),this.lastRoomId=this.getRoomTypeBySN(this.roomSN),this.curDeck=this.roomSN)},enumerable:!0,configurable:!0}),e.prototype.getRoomTypeBySN=function(t){return Math.floor(t/e.SNRoomType)},e.prototype.getGameTypeBySN=function(t){if(t<=0)return 0;var e=this.getRoomTypeBySN(t);return this.roomDict[e].gameType},e.prototype.recvInit=function(){this.regist("client_Player_onLoadRecords",this.onLoadRecords),this.regist("client_Player_onGetGameList",this.onGetGameList)},e.prototype.onGetGameList=function(){for(var t in this.gameList)this.arr_gameList.push(this.gameList[t])},e.prototype.onLoadRecords=function(){this.holdemRecords=[],this.erbaRecords=[];for(var t=this.recordList.length-1;t>=0;t--){var o=[];switch(this.recordList[t].gameType){case e.HOLDEM:o=this.holdemRecords;break;case e.ERBA:o=this.erbaRecords}""!=this.recordList[t].gameNo&&o.push({gamesn:this.recordList[t].gamesn,gameNo:this.recordList[t].gameNo,roomType:this.recordList[t].roomType,matchType:this.recordList[t].matchType,take:this.recordList[t].take,chip:this.recordList[t].chip,win:this.recordList[t].win,deduct:this.recordList[t].deduct,time:CFun.formatDate(new Date(1e3*parseInt(this.recordList[t].time)),"yyyy-MM-dd hh:mm:ss")})}},e.prototype.getRoomDataById=function(t,e){if(0!=this.roomDataList[t].length)for(var o=this.roomDataList[t],r=0,i=o.length;r<i;r++)if(o[r].id==e)return o[r]},e.HALL="",e.HOLDEM="holdem",e.ERBA="erba",e.SNRoomType=2e5,e}(MModel);e.Player=o});