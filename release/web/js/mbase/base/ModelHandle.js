var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),ModelHandle=function(e){function t(){var t=e.call(this)||this;return t.networkTime=0,t.serverTime=0,t.latacy=0,t._seed=0,t._mManager=ModelManager.ins,t}return __extends(t,e),Object.defineProperty(t.prototype,"nowServerTime",{get:function(){return this.serverTime+this.latacy},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"seed",{get:function(){return this._seed},set:function(e){this._seed=e,StaticData.seed=e},enumerable:!0,configurable:!0}),t.prototype.recvInit=function(){this.regist("server_Client_createEntity",this.onCreateModel),this.regist("server_Client_syncProperty",this.onSyncProperty),this.regist("server_Client_setNetSeed",this.onSetNetSeed),this.regist("server_Client_connectError",this.onConnectError),this.regist("server_Client_adjustTime",this.onAdjustTime)},t.prototype.onAdjustTime=function(){this.sendData(4026532845,[laya.utils.Browser.now()])},t.prototype.onConnectError=function(){0==this.code?this.sendData(4026532849,[0]):2!=this.code&&4!=this.code&&this.code},t.prototype.onSetNetSeed=function(){this.sendData(4026532846,[RpcDef.version])},t.prototype.onSyncProperty=function(){this.data||CFun.throw("onSyncProperty中没有需要同步的数据"),this.eid=RpcType.int48Reader(this.data);for(var e=ModelManager.ins.getInfoByProValue("e_id",this.eid),t={e_id:this.eid},r="";this.data.bytesAvailable>0;){var i=RpcType.vintReader(this.data),n=RpcDef.getProByID(i);if(!n)break;r+="_"+n.name,t[n.name]=n.reader(this.data)}var o="server_Client_syncProperty_"+e+r;ModelManager.ins.setPro(e,t,function(e){EventManager.ins.dispatch(o,e)},this,"更新："+e+" [event:"+o+","),this.data=null},t.prototype.onCreateModel=function(){var e=null;this.tid>0?e=RpcDef.getModelClassByID(this.tid):CFun.throw("onCreateModel中需要的类型不存在");var t={e_id:this.eid};if(this.props)for(this.props.pos=0;this.props.bytesAvailable>0;){var r=RpcType.vintReader(this.props),i=RpcDef.getProByID(r);if(!i)break;t[i.name]=i.reader(this.props)}var n="server_Client_createEntity_"+e;ModelManager.ins.setPro(e,t,function(e){EventManager.ins.dispatch(n,e)},this,"创建："+e+" [event:"+n+","),this.eid=0,this.tid=0,this.active=!1,this.props&&(this.props.clear(),this.props.pos=0,this.props=null)},t}(MModel);