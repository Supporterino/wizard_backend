(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{qyyb:function(t,e,o){"use strict";o.r(e),o.d(e,"StartPageModule",function(){return M});var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),s=o("mrSG"),c=o("XNiG"),l=o("HFLH"),b=o("jifJ"),d=o("fXoL"),m=o("gzoS"),u=o("tk/3");let h=(()=>{class t{constructor(t,e){this.provider=t,this.http=e}createGame(){return this.http.get(this.provider.createGame)}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(m.a),d.Qb(u.a))},t.\u0275prov=d.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=o("zrj0");const p=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i,r,a){this.modalController=t,this.loadingController=e,this.startService=o,this.local=n,this.router=i,this.toastController=r,this.provider=a,this.ender=new c.a}ngOnInit(){}joinGame(){return Object(s.a)(this,void 0,void 0,function*(){const t=Object(b.io)(`${this.provider.url}/${this.id}`);t.emit("user-add",this.name);const e=yield this.loadingController.create({cssClass:"my-custom-class",message:"Waiting for host..."});t.on("game-started",()=>{this.local.playerID=this.name,this.local.gameID=this.id,this.router.navigate(["game"]),e.dismiss()}),yield e.present()})}createGame(){return Object(s.a)(this,void 0,void 0,function*(){console.log(`Creating game. Owner: ${this.name}`),this.startService.createGame().subscribe(t=>Object(s.a)(this,void 0,void 0,function*(){this.id=t.gameID;const e=Object(b.io)(`${this.provider.url}/${this.id}`);e.on("game-started",()=>{this.router.navigate(["game"])}),e.emit("user-add",this.name),console.log("Poping up modal");const o=yield this.modalController.create({component:l.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{gameID:this.id,controller:this.modalController,socket:e}});yield o.present(),o.onWillDismiss().then(()=>{console.log("Starting game."),this.local.playerID=this.name,this.local.gameID=this.id,e.emit("start-game",this.name)})}))})}presentToast(t){return Object(s.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3})).present()})}}return t.\u0275fac=function(e){return new(e||t)(d.Jb(r.w),d.Jb(r.v),d.Jb(h),d.Jb(g.a),d.Jb(a.g),d.Jb(r.y),d.Jb(m.a))},t.\u0275cmp=d.Db({type:t,selectors:[["app-start"]],decls:21,vars:2,consts:[["position","fixed"],["clearInput","","placeholder","Your name",3,"ngModel","ngModelChange"],["clearInput","","placeholder","If joining a game",3,"ngModel","ngModelChange"],["expand","block",3,"click"]],template:function(t,e){1&t&&(d.Mb(0,"ion-header"),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-title"),d.gc(3,"Start"),d.Lb(),d.Lb(),d.Lb(),d.Mb(4,"ion-content"),d.Mb(5,"ion-item"),d.Mb(6,"ion-label",0),d.gc(7,"Name"),d.Lb(),d.Mb(8,"ion-input",1),d.Ub("ngModelChange",function(t){return e.name=t}),d.Lb(),d.Lb(),d.Mb(9,"ion-item"),d.Mb(10,"ion-label",0),d.gc(11,"Game ID"),d.Lb(),d.Mb(12,"ion-input",2),d.Ub("ngModelChange",function(t){return e.id=t}),d.Lb(),d.Lb(),d.Mb(13,"ion-grid"),d.Mb(14,"ion-row"),d.Mb(15,"ion-col"),d.Mb(16,"ion-button",3),d.Ub("click",function(){return e.joinGame()}),d.gc(17,"Join"),d.Lb(),d.Lb(),d.Mb(18,"ion-col"),d.Mb(19,"ion-button",3),d.Ub("click",function(){return e.createGame()}),d.gc(20,"Create"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.zb(8),d.Zb("ngModel",e.name),d.zb(4),d.Zb("ngModel",e.id))},directives:[r.h,r.s,r.r,r.e,r.k,r.l,r.j,r.x,i.d,i.e,r.g,r.p,r.d,r.b],styles:[".my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(p)],a.i]}),t})(),M=(()=>{class t{}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(e){return new(e||t)},imports:[[n.b,i.a,r.t,f]]}),t})()}}]);