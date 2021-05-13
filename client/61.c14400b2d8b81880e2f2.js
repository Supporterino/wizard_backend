(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{ekgB:function(t,o,e){"use strict";e.r(o),e.d(o,"GamePageModule",function(){return O});var n=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),c=e("mrSG"),a=e("vnCE"),l=function(t){return t[t.Joining=0]="Joining",t[t.Predicting=1]="Predicting",t[t.Playing=2]="Playing",t[t.End=3]="End",t}({}),d=e("0Q5v"),b=e("bKoj"),p=e("jifJ"),g=e("fXoL"),h=e("zrj0"),u=e("tk/3"),m=e("gzoS");let f=(()=>{class t{constructor(t,o){this.http=t,this.provider=o}getAllPlayers(t){return this.http.get(`${this.provider.getPlayers}/${t}`)}getState(t){return this.http.get(`${this.provider.getState}/${t}`)}getRounds(t){return this.http.get(`${this.provider.rounds}/${t}`)}getActivePlayer(t){return this.http.get(`${this.provider.aplayer}/${t}`)}getHand(t,o){return this.http.post(this.provider.hand,{gameID:t,playerID:o})}getDominantColor(t){return this.http.get(`${this.provider.dominant}/${t}`)}getScoreboard(t){return this.http.get(`${this.provider.score}/${t}`)}}return t.\u0275fac=function(o){return new(o||t)(g.Qb(u.a),g.Qb(m.a))},t.\u0275prov=g.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g.Db({type:t,selectors:[["app-card-item"]],inputs:{card:"card"},decls:8,vars:11,consts:[[1,"playing-card"],[1,"corner-detail"],[1,"spade-small"],[1,"spade-main"],[1,"corner-detail","bottom"]],template:function(t,o){1&t&&(g.Mb(0,"div",0),g.Mb(1,"div",1),g.gc(2),g.Kb(3,"div",2),g.Lb(),g.Kb(4,"div",3),g.Mb(5,"div",4),g.gc(6),g.Kb(7,"div",2),g.Lb(),g.Lb()),2&t&&(g.zb(2),g.ic(" ",o.card.char," "),g.zb(1),g.ec("background-color: ",o.card.color,";"),g.zb(1),g.ec("background-color: ",o.card.color,";"),g.zb(2),g.ic(" ",o.card.char," "),g.zb(1),g.ec("background-color: ",o.card.color,";"))},styles:['.card[_ngcontent-%COMP%]{width:12vw;height:16vw;border-radius:2vw;text-align:center;vertical-align:middle}.playing-card[_ngcontent-%COMP%]{position:absolute;background:#3880ff;width:180px;height:250px;border:1px solid #000;border-radius:5%}.spade-main[_ngcontent-%COMP%]{position:absolute;top:110px;left:50px;width:50px;height:50px;border-radius:50%}.spade-main[_ngcontent-%COMP%]:after{content:"";position:absolute;left:18px;top:-20px;width:50px;height:54px;background:inherit;transform:rotate(45deg)}.corner-detail[_ngcontent-%COMP%]{position:absolute;left:9px;top:10px;font-family:sans-serif;font-size:22px;color:#000}.bottom[_ngcontent-%COMP%]{bottom:10px;right:9px;transform:rotate(180deg)}.spade-small[_ngcontent-%COMP%]{top:45px;left:10px;border-radius:50%}.spade-small[_ngcontent-%COMP%], .spade-small[_ngcontent-%COMP%]:after{position:absolute;width:14px;height:14px}.spade-small[_ngcontent-%COMP%]:after{content:"";left:5px;top:-5px;background:inherit;transform:rotate(45deg)}']}),t})();function v(t,o){if(1&t&&g.Kb(0,"app-card-item",15),2&t){const t=g.Wb();g.Zb("card",t.dominantColor)}}function C(t,o){if(1&t&&(g.Mb(0,"div"),g.Kb(1,"app-card-item",16),g.Lb()),2&t){const t=o.$implicit;g.zb(1),g.Zb("card",t)}}function M(t,o){if(1&t){const t=g.Nb();g.Mb(0,"ion-col",2),g.Mb(1,"ion-button",17),g.Ub("click",function(){return g.bc(t),g.Wb().play()}),g.gc(2,"Play"),g.Lb(),g.Lb()}if(2&t){const t=g.Wb();g.zb(1),g.Zb("disabled",t.activePlayer!=t.playerID)}}function P(t,o){if(1&t){const t=g.Nb();g.Mb(0,"ion-col",2),g.Mb(1,"ion-button",17),g.Ub("click",function(){return g.bc(t),g.Wb().predict()}),g.gc(2,"Predict"),g.Lb(),g.Lb()}if(2&t){const t=g.Wb();g.zb(1),g.Zb("disabled",t.activePlayer!=t.playerID)}}const w=[{path:"",component:(()=>{class t{constructor(t,o,e,n){this.local=t,this.statusService=o,this.modalController=e,this.provider=n,this.StateEnum=l,this.gameID=t.gameID,this.playerID=t.playerID,o.getAllPlayers(this.gameID).subscribe(t=>{this.playerCount=t.length})}ngOnInit(){this.statusService.getRounds(this.gameID).subscribe(t=>{this.roundCounter=t}),this.statusService.getActivePlayer(this.gameID).subscribe(t=>{this.activePlayer=t}),this.statusService.getScoreboard(this.gameID).subscribe(t=>{this.scoreboard=t}),this.statusService.getState(this.gameID).subscribe(t=>{this.gameState=t}),this.statusService.getDominantColor(this.gameID).subscribe(t=>{this.dominantColor=t}),this.socket=Object(p.io)(`${this.provider.url}/${this.gameID}`),this.socket.on("new-active-player",t=>{this.activePlayer=t}),this.socket.on("scoreboard-update",t=>{this.scoreboard=t}),this.socket.on("state-update",t=>{this.gameState=t}),this.socket.on("rc-update",t=>{this.roundCounter=t}),this.socket.on("dom-update",t=>{this.dominantColor=t}),this.socket.on("pile-update",t=>{this.pile=t})}predict(){return Object(c.a)(this,void 0,void 0,function*(){console.log("Predicting");const t=yield this.modalController.create({component:b.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{controller:this.modalController},backdropDismiss:!1});yield t.present();const{data:o}=yield t.onWillDismiss();this.socket.emit("prediction",{id:this.playerID,val:o})})}showHand(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const o=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0}});yield o.present()}))}play(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const o=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0},backdropDismiss:!1});yield o.present();const{data:e}=yield o.onWillDismiss();this.socket.emit("play-card",{id:this.playerID,card:e})}))}showScoreboard(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:d.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{scoreboard:this.scoreboard,controller:this.modalController}});yield t.present(),yield t.onWillDismiss()})}}return t.\u0275fac=function(o){return new(o||t)(g.Jb(h.a),g.Jb(f),g.Jb(r.w),g.Jb(m.a))},t.\u0275cmp=g.Db({type:t,selectors:[["app-game"]],decls:32,vars:7,consts:[["expand","block"],["name","sync-outline"],["size","6"],["lines","none"],["name","people"],[1,"top","left","ion-float-left"],[3,"card",4,"ngIf"],[1,"top","right","ion-float-right"],[1,"bottom","left","ion-float-left"],[1,"bottom","right","ion-float-right"],[4,"ngFor","ngForOf"],["expand","block",3,"click"],["name","create-outline"],["size","6",4,"ngIf"],["name","id-card-outline"],[3,"card"],[1,"piling",3,"card"],["expand","block",3,"disabled","click"]],template:function(t,o){1&t&&(g.Kb(0,"ion-header"),g.Mb(1,"ion-content"),g.Mb(2,"ion-grid"),g.Mb(3,"ion-row"),g.Mb(4,"ion-col"),g.Mb(5,"ion-button",0),g.Kb(6,"ion-icon",1),g.gc(7),g.Lb(),g.Lb(),g.Mb(8,"ion-col",2),g.Mb(9,"ion-item",3),g.gc(10),g.Lb(),g.Lb(),g.Mb(11,"ion-col"),g.Mb(12,"ion-button",0),g.Kb(13,"ion-icon",4),g.gc(14),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(15,"div",5),g.fc(16,v,1,1,"app-card-item",6),g.Lb(),g.Kb(17,"div",7),g.Kb(18,"div",8),g.Mb(19,"div",9),g.fc(20,C,2,1,"div",10),g.Lb(),g.Lb(),g.Mb(21,"ion-footer"),g.Mb(22,"ion-grid"),g.Mb(23,"ion-row"),g.Mb(24,"ion-col"),g.Mb(25,"ion-button",11),g.Ub("click",function(){return o.showScoreboard()}),g.Kb(26,"ion-icon",12),g.Lb(),g.Lb(),g.fc(27,M,3,1,"ion-col",13),g.fc(28,P,3,1,"ion-col",13),g.Mb(29,"ion-col"),g.Mb(30,"ion-button",11),g.Ub("click",function(){return o.showHand()}),g.Kb(31,"ion-icon",14),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Lb()),2&t&&(g.zb(7),g.ic(" ",o.roundCounter,""),g.zb(3),g.ic("Playing: ",o.activePlayer,""),g.zb(4),g.ic(" ",o.playerCount,""),g.zb(2),g.Zb("ngIf",o.dominantColor),g.zb(4),g.Zb("ngForOf",o.pile),g.zb(7),g.Zb("ngIf",o.gameState===o.StateEnum.Playing),g.zb(1),g.Zb("ngIf",o.gameState===o.StateEnum.Predicting))},directives:[r.h,r.e,r.g,r.p,r.d,r.b,r.i,r.k,n.i,n.h,r.f,y],styles:[".my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}ion-item[_ngcontent-%COMP%]{text-align:center}.centering[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.piling[_ngcontent-%COMP%]:first-child{position:absolute;transform:rotate(17deg)}.piling[_ngcontent-%COMP%]:nth-child(2){position:absolute;transform:rotate(26deg)}.piling[_ngcontent-%COMP%]:nth-child(3){position:absolute;transform:rotate(10deg)}.piling[_ngcontent-%COMP%]:nth-child(4){position:absolute;transform:rotate(25deg)}.piling[_ngcontent-%COMP%]:nth-child(5){position:absolute;transform:rotate(18deg)}.piling[_ngcontent-%COMP%]:nth-child(6){position:absolute;transform:rotate(13deg)}.top[_ngcontent-%COMP%]{height:25%}.left[_ngcontent-%COMP%]{width:25%}.bottom[_ngcontent-%COMP%]{height:75%}.right[_ngcontent-%COMP%]{width:75%}"]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(o){return new(o||t)},imports:[[s.i.forChild(w)],s.i]}),t})(),O=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(o){return new(o||t)},imports:[[n.b,i.a,r.t,k]]}),t})()}}]);