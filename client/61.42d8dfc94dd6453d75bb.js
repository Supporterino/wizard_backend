(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{ekgB:function(t,e,o){"use strict";o.r(e),o.d(e,"GamePageModule",function(){return k});var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),c=o("mrSG"),a=o("vnCE"),l=function(t){return t[t.Joining=0]="Joining",t[t.Predicting=1]="Predicting",t[t.Playing=2]="Playing",t[t.End=3]="End",t}({}),d=o("0Q5v"),b=o("bKoj"),p=o("jifJ"),g=o("fXoL"),h=o("zrj0"),u=o("tk/3"),m=o("gzoS");let f=(()=>{class t{constructor(t,e){this.http=t,this.provider=e}getAllPlayers(t){return this.http.get(`${this.provider.getPlayers}/${t}`)}getState(t){return this.http.get(`${this.provider.getState}/${t}`)}getRounds(t){return this.http.get(`${this.provider.rounds}/${t}`)}getActivePlayer(t){return this.http.get(`${this.provider.aplayer}/${t}`)}getHand(t,e){return this.http.post(this.provider.hand,{gameID:t,playerID:e})}getDominantColor(t){return this.http.get(`${this.provider.dominant}/${t}`)}getScoreboard(t){return this.http.get(`${this.provider.score}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(g.Qb(u.a),g.Qb(m.a))},t.\u0275prov=g.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Db({type:t,selectors:[["app-card-item"]],inputs:{card:"card"},decls:10,vars:6,consts:[[1,"card"],[1,"playing-card"],[1,"corner-detail"],[1,"spade-small"],[1,"spade-main"],[1,"corner-detail","bottom"]],template:function(t,e){1&t&&(g.Mb(0,"div",0),g.gc(1),g.Lb(),g.Mb(2,"div",1),g.Mb(3,"div",2),g.gc(4),g.Kb(5,"div",3),g.Lb(),g.Kb(6,"div",4),g.Mb(7,"div",5),g.gc(8),g.Kb(9,"div",3),g.Lb(),g.Lb()),2&t&&(g.ec("background-color: ",e.card.color,";"),g.zb(1),g.hc(e.card.char),g.zb(3),g.ic(" ",e.card.char," "),g.zb(4),g.ic(" ",e.card.char," "))},styles:['.card[_ngcontent-%COMP%]{width:12vw;height:16vw;border-radius:2vw;text-align:center;vertical-align:middle}.playing-card[_ngcontent-%COMP%]{position:absolute;background:#fff;width:180px;height:250px;border:1px solid #000;border-radius:5%}.spade-main[_ngcontent-%COMP%]{top:110px;left:50px;height:50px;border-radius:50%}.spade-main[_ngcontent-%COMP%], .spade-main[_ngcontent-%COMP%]:after{position:absolute;width:50px;background:#000}.spade-main[_ngcontent-%COMP%]:after{content:"";left:18px;top:-20px;height:54px;transform:rotate(45deg)}.corner-detail[_ngcontent-%COMP%]{position:absolute;left:9px;top:10px;font-family:sans-serif;font-size:22px;color:#000}.bottom[_ngcontent-%COMP%]{bottom:0;right:0;transform:rotate(180deg)}.spade-small[_ngcontent-%COMP%]{top:45px;left:10px;border-radius:50%}.spade-small[_ngcontent-%COMP%], .spade-small[_ngcontent-%COMP%]:after{position:absolute;width:14px;height:14px;background:#000}.spade-small[_ngcontent-%COMP%]:after{content:"";left:5px;top:-5px;transform:rotate(45deg)}']}),t})();function v(t,e){if(1&t&&g.Kb(0,"app-card-item",11),2&t){const t=g.Wb();g.Zb("card",t.dominantColor)}}function C(t,e){if(1&t&&(g.Mb(0,"ion-row",12),g.Kb(1,"app-card-item",13),g.Lb()),2&t){const t=e.$implicit;g.zb(1),g.Zb("card",t)}}function M(t,e){if(1&t){const t=g.Nb();g.Mb(0,"ion-col",2),g.Mb(1,"ion-button",14),g.Ub("click",function(){return g.bc(t),g.Wb().play()}),g.gc(2,"Play"),g.Lb(),g.Lb()}if(2&t){const t=g.Wb();g.zb(1),g.Zb("disabled",t.activePlayer!=t.playerID)}}function P(t,e){if(1&t){const t=g.Nb();g.Mb(0,"ion-col",2),g.Mb(1,"ion-button",14),g.Ub("click",function(){return g.bc(t),g.Wb().predict()}),g.gc(2,"Predict"),g.Lb(),g.Lb()}if(2&t){const t=g.Wb();g.zb(1),g.Zb("disabled",t.activePlayer!=t.playerID)}}const w=[{path:"",component:(()=>{class t{constructor(t,e,o,n){this.local=t,this.statusService=e,this.modalController=o,this.provider=n,this.StateEnum=l,this.gameID=t.gameID,this.playerID=t.playerID,e.getAllPlayers(this.gameID).subscribe(t=>{this.playerCount=t.length})}ngOnInit(){this.statusService.getRounds(this.gameID).subscribe(t=>{this.roundCounter=t}),this.statusService.getActivePlayer(this.gameID).subscribe(t=>{this.activePlayer=t}),this.statusService.getScoreboard(this.gameID).subscribe(t=>{this.scoreboard=t}),this.statusService.getState(this.gameID).subscribe(t=>{this.gameState=t}),this.statusService.getDominantColor(this.gameID).subscribe(t=>{this.dominantColor=t}),this.socket=Object(p.io)(`${this.provider.url}/${this.gameID}`),this.socket.on("new-active-player",t=>{this.activePlayer=t}),this.socket.on("scoreboard-update",t=>{this.scoreboard=t}),this.socket.on("state-update",t=>{this.gameState=t}),this.socket.on("rc-update",t=>{this.roundCounter=t}),this.socket.on("dom-update",t=>{this.dominantColor=t}),this.socket.on("pile-update",t=>{this.pile=t})}predict(){return Object(c.a)(this,void 0,void 0,function*(){console.log("Predicting");const t=yield this.modalController.create({component:b.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{controller:this.modalController},backdropDismiss:!1});yield t.present();const{data:e}=yield t.onWillDismiss();this.socket.emit("prediction",{id:this.playerID,val:e})})}showHand(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const e=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0}});yield e.present()}))}play(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const e=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0},backdropDismiss:!1});yield e.present();const{data:o}=yield e.onWillDismiss();this.socket.emit("play-card",{id:this.playerID,card:o})}))}showScoreboard(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:d.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{scoreboard:this.scoreboard,controller:this.modalController}});yield t.present(),yield t.onWillDismiss()})}}return t.\u0275fac=function(e){return new(e||t)(g.Jb(h.a),g.Jb(f),g.Jb(r.v),g.Jb(m.a))},t.\u0275cmp=g.Db({type:t,selectors:[["app-game"]],decls:30,vars:7,consts:[["expand","block"],["name","sync-outline"],["size","6"],["lines","none"],["name","people"],[3,"card",4,"ngIf"],["class","centering",4,"ngFor","ngForOf"],["expand","block",3,"click"],["name","create-outline"],["size","6",4,"ngIf"],["name","id-card-outline"],[3,"card"],[1,"centering"],[1,"piling",3,"card"],["expand","block",3,"disabled","click"]],template:function(t,e){1&t&&(g.Kb(0,"ion-header"),g.Mb(1,"ion-content"),g.Mb(2,"ion-grid"),g.Mb(3,"ion-row"),g.Mb(4,"ion-col"),g.Mb(5,"ion-button",0),g.Kb(6,"ion-icon",1),g.gc(7),g.Lb(),g.Lb(),g.Mb(8,"ion-col",2),g.Mb(9,"ion-item",3),g.gc(10),g.Lb(),g.Lb(),g.Mb(11,"ion-col"),g.Mb(12,"ion-button",0),g.Kb(13,"ion-icon",4),g.gc(14),g.Lb(),g.Lb(),g.Lb(),g.Mb(15,"ion-row"),g.Mb(16,"ion-col"),g.fc(17,v,1,1,"app-card-item",5),g.Lb(),g.Mb(18,"ion-col",2),g.fc(19,C,2,1,"ion-row",6),g.Lb(),g.Kb(20,"ion-col"),g.Lb(),g.Mb(21,"ion-row"),g.Mb(22,"ion-col"),g.Mb(23,"ion-button",7),g.Ub("click",function(){return e.showScoreboard()}),g.Kb(24,"ion-icon",8),g.Lb(),g.Lb(),g.fc(25,M,3,1,"ion-col",9),g.fc(26,P,3,1,"ion-col",9),g.Mb(27,"ion-col"),g.Mb(28,"ion-button",7),g.Ub("click",function(){return e.showHand()}),g.Kb(29,"ion-icon",10),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Lb()),2&t&&(g.zb(7),g.ic(" ",e.roundCounter,""),g.zb(3),g.ic("Playing: ",e.activePlayer,""),g.zb(4),g.ic(" ",e.playerCount,""),g.zb(3),g.Zb("ngIf",e.dominantColor),g.zb(2),g.Zb("ngForOf",e.pile),g.zb(6),g.Zb("ngIf",e.gameState===e.StateEnum.Playing),g.zb(1),g.Zb("ngIf",e.gameState===e.StateEnum.Predicting))},directives:[r.g,r.e,r.f,r.o,r.d,r.b,r.h,r.j,n.i,n.h,y],styles:[".my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}ion-item[_ngcontent-%COMP%]{text-align:center}.centering[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.piling[_ngcontent-%COMP%]:first-child{position:absolute;transform:rotate(19deg)}.piling[_ngcontent-%COMP%]:nth-child(2){position:absolute;transform:rotate(28deg)}.piling[_ngcontent-%COMP%]:nth-child(3){position:absolute;transform:rotate(12deg)}.piling[_ngcontent-%COMP%]:nth-child(4){position:absolute;transform:rotate(10deg)}.piling[_ngcontent-%COMP%]:nth-child(5){position:absolute;transform:rotate(30deg)}.piling[_ngcontent-%COMP%]:nth-child(6){position:absolute;transform:rotate(6deg)}"]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(w)],s.i]}),t})(),k=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(e){return new(e||t)},imports:[[n.b,i.a,r.s,O]]}),t})()}}]);