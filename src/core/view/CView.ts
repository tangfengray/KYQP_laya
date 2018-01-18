module core.view{
    /*
    可显示对象
    */
    export class CView{
        // private static _dic_show:{[key:string]:{[key:string]:any}} = {};
        private _event_manager:core.event.EventManager;
        constructor(vm:core.viewmodel.ViewModel){
            this._event_manager = core.event.EventManager.ins;
            this._vm = vm;
        }

        protected regist(type:string,listener:Function):void{
            this._event_manager.on(type,listener,this);
        }

        protected  _vm:core.viewmodel.ViewModel;
        protected  _parent:laya.display.Node = null;
        protected  _class:any = null;
        protected  _atlas_url:string = null;//需要多个不同资源，用逗号隔开
        protected  _is_show:boolean = false;
        protected  _is_need_show:boolean = false;
        protected  _is_on_parent:boolean = false;
        protected  _is_load_complete:boolean = false;
        protected  _display:core.view.ComView;
        /*
            设置资源路径
        */
        public setAtlasName(arg_params:string) {
            this._atlas_url = arg_params;
        }

        public setParent(val:laya.display.Node){
            this._parent = val;
        }

        public get vm():core.viewmodel.ViewModel{
            if(!this._vm) core.CFun.throw("CView中_vm还未初始化！");
            return this._vm;
        }

        /*
          设置显示类型
        */
        public setClass(arg_class:any){
            this._class = arg_class;
        }

        private onLoaded(){
            this._is_load_complete = true;   

            if(!this._class) {
                core.CFun.throw("VisibleView的_class为空！");
            }

            this._display = new (this._class)(this.vm);
            if(this._parent == null){
                if(this.display.viewType == ComView.WINDOW){
                    this._parent = Layer.WINDOW_LAYER;
                }
                else if(this.display.viewType == ComView.TOP){
                    this._parent = Layer.TOP_LAYER;
                }
                else if(this.display.viewType == ComView.SCENE){
                    this._parent = Layer.SCENE_LAYER;
                }
                else{
                    this._parent = Layer.SCENE_LAYER;
                }
            }

            if(this._is_need_show){
                this.showNow();
            }
        }

        protected onLoadResource(){
            if(!this._atlas_url) {
                core.CFun.throw("VisibleView的_atlas_url为空！");
            }
            let tmp_arrAtlas = [];
            let arr_atlas = this._atlas_url.split(",");
            let len = arr_atlas.length;
            
            for(let i = 0;i < len;i++){
                if(arr_atlas[i] == "") continue;
                tmp_arrAtlas.push({url:arr_atlas[i],type:Loader.ATLAS});
            }
            tmp_arrAtlas.push({url:this.parsingPath(),type:Loader.JSON});
            if(tmp_arrAtlas.length > 0){
                Laya.loader.load(tmp_arrAtlas, Handler.create(this, this.onLoaded));
            }
        }

        private parsingPath(){
            let c:string = this._class.toString();
            let c_s = this._class.name + " extends ui.";
            let s_i = c.indexOf(c_s) + c_s.length;
            let e_i = c.indexOf(this._class.__proto__.name) + this._class.__proto__.name.length - 2;
            let t_c = c.substring(s_i,e_i);

            let d_i = t_c.indexOf(".");
            if(d_i != -1){
                t_c = t_c.replace(".","/")
            }

            return t_c + ".json";
        }

        protected addToParent(){
            if(!this._parent) {
                core.CFun.throw("VisibleView的addToParent中的_parent为空！");
            }
            
            this._parent.addChild(this.display);
            if(Layer.WINDOW_LAYER == this._parent){
                Layer.WINDOW_LAYER.mouseEnabled = true;
            }
            if(Layer.TOP_LAYER == this._parent){
                Layer.TOP_LAYER.mouseEnabled = true;
            }
            
            this._is_on_parent = true;
        }

        protected removeFromParent(){
            if(!this._parent) {
                core.CFun.throw("VisibleView的removeFromParent中的_parent为空！");
            }
            this._parent.removeChild(this.display);
            if(this._parent.numChildren <= 0){
                if(Layer.WINDOW_LAYER == this._parent){
                    Layer.WINDOW_LAYER.mouseEnabled = false;
                }
                if(Layer.TOP_LAYER == this._parent){
                    Layer.TOP_LAYER.mouseEnabled = false;
                }
            }
            
            this._is_on_parent = false;
            this._is_show = false;
        }

        public get display():core.view.ComView{
            if(!this._display) {
                core.CFun.throw("VisibleView的_display为空！");
            }
            return this._display;
        }

        //请求显示，内部重写，调用
        protected showNow(){
            this.vm.preShow();
            this._is_need_show = false;
            this.addToParent();
            this.setVisible(true);
            this.vm.afterShow();
        }

        //请求关闭，内部重写，调用
        protected closeNow(){
            this.vm.preClose();
            this.removeFromParent();
            this.setVisible(false);
            this.vm.afterClose();
        }

        /*
        是否添加在父显示对象上
        */
        public isOnParent():boolean{
            return this._is_on_parent;
        }

        /*
          是否已经显示
        */
        public isShow():boolean{
            return this._is_show;
        }

        //关闭，外部调用
        public closeME(){
            if(!this._is_load_complete) return;

            this.closeNow();
        }

        /*
          开始显示，外部调用
        */
        public showME(){
            if(this._is_need_show) return;
            this._is_need_show = true;
            if(this._is_load_complete){
                this.showNow();
            }
            else{
                this.onLoadResource();
            }
        }
        
        /*
        设置显示对象的visible属性
        */
        public setVisible(visible:boolean){
            this.display.visible = visible;
            if(this.isOnParent()) this._is_show = visible;
        }
    }
}