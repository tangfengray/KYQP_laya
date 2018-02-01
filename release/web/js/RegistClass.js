define(["require","exports","./mbase/data/Player","./mbase/data/Accounts","./mbase/data/CityScene","./mbase/data/HoldemAgent","./mbase/data/HoldemDeck"],function(e,s,t,i,l,a,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=function(){function e(){this.registClass("ModelHandle",ModelHandle),this.registClass("Player",t.Player),this.registClass("Account",i.Accounts),this.registClass("CityScene",l.CityScene),this.registClass("HoldemAgent",a.HoldemAgent),this.registClass("HoldemDeck",r.HoldemDeck),this.registClass("SCENE_HallVM","./module/hall/HallVM"),this.registClass("SCENE_DZPKSceneVM","./module/dzpk/scene/DZPKSceneVM"),this.registClass("SCENE_scene_620","./module/dzpk/DZPKRoomsVM"),this.registClass("avaterChose","./module/avaterChose/AvaterChoseVM"),this.registClass("setting","./module/setting/SettingVM"),this.registClass("DZPKHelpVM","./module/dzpk/help/DZPKHelpVM"),this.registClass("DZPKRecordVM","./module/dzpk/record/DZPKRecordVM"),this.registClass("DZPKTakeVM","./module/dzpk/take/DZPKTakeVM"),this.registClass("PiPeiVM","./module/dzpk/pipei/PiPeiVM"),this.registClass("MenuVM","./module/dzpk/menu/MenuVM"),this.registClass("CardTypeVM","./module/dzpk/cardtype/CardTypeVM")}return e.prototype.registClass=function(e,s){laya.utils.ClassUtils.regClass(e,s)},e}();s.RegistClass=o,Date.prototype.format=function(e){var s={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var t in s)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?s[t]:("00"+s[t]).substr((""+s[t]).length)));return e}});