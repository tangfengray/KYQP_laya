var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();define(["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e){var i=t.call(this)||this;return i._isClick=!1,i._vm=e,i}return __extends(e,t),e.prototype.onOK=function(){this._isClick=!0,this.vm.goToGame()},e.prototype.beClose=function(){t.prototype.beClose.call(this);var e={};e.takeScore=this.sid_take.value,e.isfirstGame=this._isClick,e.isautoTakeScore=this.chk_chose.selected,this.vm.updataSetting(e)},e.prototype.onChange=function(){var t=this.sid_take.getChildByName("box_money");t.x=this.sid_take.bar.x+62;var e=t.getChildByName("txt_money"),i=t.getChildByName("img_money");e.text=CFun.formatCurrency(this.sid_take.value),e.width>174&&(i.width=e.width+20)},e.prototype.viewInit=function(t){this.txt_all.text=CFun.formatCurrency(t.playerMoney),this.txt_min.text=CFun.formatCurrency(t.min),this.txt_max.text=CFun.formatCurrency(t.max),this.sid_take.setSlider(t.min,t.max,t.take),this.sid_take.bar.y=-8,this.chk_chose.selected=t.isAuto,this.btn_ok.clickHandler=laya.utils.Handler.create(this,this.onOK)},e.prototype.comInit=function(){this.sid_take.changeHandler=new laya.utils.Handler(this,this.onChange,[],!1)},e}(ui.game_dzpk.DZPKTakeUI);e.DZPKTakeView=i});