define(["require","exports","../../mbase/data/Accounts","../../mbase/data/CityScene","../../mbase/data/HoldemAgent","../../mbase/data/HoldemDeck","../../mbase/data/Player"],function(e,t,s,a,i,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.registClass("ModelHandle",ModelHandle),this.registClass("Player",n.Player),this.registClass("Account",s.Accounts),this.registClass("CityScene",a.CityScene),this.registClass("HoldemAgent",i.HoldemAgent),this.registClass("HoldemDeck",l.HoldemDeck)}return e.prototype.registClass=function(e,t){laya.utils.ClassUtils.regClass(e,t)},e}();t.RegistClass=r,Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in t)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[s]:("00"+t[s]).substr((""+t[s]).length)));return e}});