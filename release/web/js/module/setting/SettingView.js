var __extends=this&&this.__extends||function(){var s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,t){s.__proto__=t}||function(s,t){for(var i in t)t.hasOwnProperty(i)&&(s[i]=t[i])};return function(t,i){function e(){this.constructor=t}s(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}();define(["require","exports"],function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(s){function t(t){var i=s.call(this)||this;return i._vm=t,i}return __extends(t,s),t.prototype.onMusicChange=function(){this.slider_music.value>0?this.music_switch.selected||(this.music_switch.selected=!0):this.music_switch.selected=!1,CFun.musicV=.01*this.slider_music.value},t.prototype.onSoundChange=function(){this.slider_sound.value>0?this.sound_switch.selected||(this.sound_switch.selected=!0):this.sound_switch.selected=!1,CFun.musicV=.01*this.slider_music.value},t.prototype.onMusicClick=function(){this.music_switch.selected?this.slider_music.value=50:this.slider_music.value=0},t.prototype.onSoundClick=function(){this.sound_switch.selected?this.slider_sound.value=50:this.slider_sound.value=0},t.prototype.beClose=function(){s.prototype.beClose.call(this);var t={swMusic:this.music_switch.selected,swSound:this.sound_switch.selected,slMusic:this.slider_music.value>0?this.slider_music.value:0,slSound:this.slider_sound.value>0?this.slider_sound.value:0};this.vm.updataSetting(t)},t.prototype.viewInit=function(s){this.sound_switch.selected=s.swSound,this.music_switch.selected=s.swMusic,this.slider_music.value=s.swMusic?s.slMusic>0?s.slMusic:50:s.slMusic,this.slider_sound.value=s.swSound?s.slSound>0?s.slSound:50:s.slSound},t.prototype.comInit=function(){this.slider_music.changeHandler=new laya.utils.Handler(this,this.onMusicChange),this.slider_sound.changeHandler=new laya.utils.Handler(this,this.onSoundChange),this.music_switch.on(Laya.Event.CLICK,this,this.onMusicClick),this.sound_switch.on(Laya.Event.CLICK,this,this.onSoundClick)},t}(ui.setting.SettingWindowUI);t.SettingView=i});