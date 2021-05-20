(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{ekgB:function(t,e,o){"use strict";o.r(e),o.d(e,"GamePageModule",function(){return w});var i=o("ofXK"),n=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),c=o("mrSG"),a=o("vnCE"),l=function(t){return t[t.Joining=0]="Joining",t[t.Predicting=1]="Predicting",t[t.Playing=2]="Playing",t[t.End=3]="End",t}({}),b=o("0Q5v"),d=o("bKoj"),h=o("jifJ"),p=o("fXoL"),g=o("zrj0"),u=o("tk/3"),m=o("gzoS");let f=(()=>{class t{constructor(t,e){this.http=t,this.provider=e}getAllPlayers(t){return this.http.get(`${this.provider.getPlayers}/${t}`)}getState(t){return this.http.get(`${this.provider.getState}/${t}`)}getRounds(t){return this.http.get(`${this.provider.rounds}/${t}`)}getActivePlayer(t){return this.http.get(`${this.provider.aplayer}/${t}`)}getHand(t,e){return this.http.post(this.provider.hand,{gameID:t,playerID:e})}getDominantColor(t){return this.http.get(`${this.provider.dominant}/${t}`)}getScoreboard(t){return this.http.get(`${this.provider.score}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(p.Qb(u.a),p.Qb(m.a))},t.\u0275prov=p.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Db({type:t,selectors:[["app-card-item"]],inputs:{card:"card"},decls:8,vars:11,consts:[[1,"playing-card"],[1,"corner-detail"],[1,"square-small"],[1,"square-main"],[1,"corner-detail","bottom"]],template:function(t,e){1&t&&(p.Mb(0,"div",0),p.Mb(1,"div",1),p.gc(2),p.Kb(3,"div",2),p.Lb(),p.Kb(4,"div",3),p.Mb(5,"div",4),p.gc(6),p.Kb(7,"div",2),p.Lb(),p.Lb()),2&t&&(p.zb(2),p.ic(" ",e.card.char," "),p.zb(1),p.ec("background-color: ",e.card.color,";"),p.zb(1),p.ec("background-color: ",e.card.color,";"),p.zb(2),p.ic(" ",e.card.char," "),p.zb(1),p.ec("background-color: ",e.card.color,";"))},styles:[".card[_ngcontent-%COMP%]{width:12vmin;height:16vmin;border-radius:2vmin;text-align:center;vertical-align:middle}.playing-card[_ngcontent-%COMP%]{position:absolute;background:#3880ff;width:29vmin;height:39vmin;border:1px solid #000;border-radius:5%}.square-main[_ngcontent-%COMP%]{position:absolute;top:14vmin;left:9.5vmin;width:9vmin;height:9vmin;transform:rotate(45deg)}.corner-detail[_ngcontent-%COMP%]{position:absolute;left:2vmin;top:2vmin;font-family:sans-serif;font-size:3vmin;color:#000}.bottom[_ngcontent-%COMP%]{bottom:2vmin;right:2vmin;transform:rotate(180deg)}.square-small[_ngcontent-%COMP%]{position:absolute;top:4.2vmin;left:.5vmin;width:2vmin;height:2vmin;transform:rotate(45deg)}"]}),t})();function y(t,e){if(1&t&&p.Kb(0,"app-card-item",16),2&t){const t=p.Wb();p.Zb("card",t.dominantColor)}}function C(t,e){if(1&t&&p.Kb(0,"app-card-item",16),2&t){const t=e.$implicit;p.ec("transform: rotate(",10*e.index,"deg);"),p.Zb("card",t)}}function M(t,e){if(1&t){const t=p.Nb();p.Mb(0,"ion-col",2),p.Mb(1,"ion-button",17),p.Ub("click",function(){return p.bc(t),p.Wb().play()}),p.gc(2,"Play"),p.Lb(),p.Lb()}if(2&t){const t=p.Wb();p.zb(1),p.Zb("disabled",t.activePlayer!=t.playerID)}}function P(t,e){if(1&t){const t=p.Nb();p.Mb(0,"ion-col",2),p.Mb(1,"ion-button",17),p.Ub("click",function(){return p.bc(t),p.Wb().predict()}),p.gc(2,"Predict"),p.Lb(),p.Lb()}if(2&t){const t=p.Wb();p.zb(1),p.Zb("disabled",t.activePlayer!=t.playerID)}}const k=[{path:"",component:(()=>{class t{constructor(t,e,o,i){this.local=t,this.statusService=e,this.modalController=o,this.provider=i,this.StateEnum=l,this.gameID=t.gameID,this.playerID=t.playerID,e.getAllPlayers(this.gameID).subscribe(t=>{this.playerCount=t.length})}ngOnInit(){this.statusService.getRounds(this.gameID).subscribe(t=>{this.roundCounter=t}),this.statusService.getActivePlayer(this.gameID).subscribe(t=>{this.activePlayer=t}),this.statusService.getScoreboard(this.gameID).subscribe(t=>{this.scoreboard=t}),this.statusService.getState(this.gameID).subscribe(t=>{this.gameState=t}),this.statusService.getDominantColor(this.gameID).subscribe(t=>{this.dominantColor=t}),this.socket=Object(h.io)(`${this.provider.url}/${this.gameID}`),this.socket.on("new-active-player",t=>{this.activePlayer=t}),this.socket.on("scoreboard-update",t=>{this.scoreboard=t}),this.socket.on("state-update",t=>{this.gameState=t}),this.socket.on("rc-update",t=>{this.roundCounter=t}),this.socket.on("dom-update",t=>{this.dominantColor=t}),this.socket.on("pile-update",t=>{this.pile=t})}predict(){return Object(c.a)(this,void 0,void 0,function*(){console.log("Predicting");const t=yield this.modalController.create({component:d.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{controller:this.modalController},backdropDismiss:!1});yield t.present();const{data:e}=yield t.onWillDismiss();this.socket.emit("prediction",{id:this.playerID,val:e})})}showHand(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const e=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!1}});yield e.present()}))}play(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const e=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0},backdropDismiss:!1});yield e.present();const{data:o}=yield e.onWillDismiss();this.socket.emit("play-card",{id:this.playerID,card:o})}))}showScoreboard(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:b.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{scoreboard:this.scoreboard,controller:this.modalController}});yield t.present(),yield t.onWillDismiss()})}}return t.\u0275fac=function(e){return new(e||t)(p.Jb(g.a),p.Jb(f),p.Jb(r.x),p.Jb(m.a))},t.\u0275cmp=p.Db({type:t,selectors:[["app-game"]],decls:33,vars:7,consts:[["expand","block"],["name","sync-outline"],["size","6"],["lines","none",1,"ion-text-center"],["name","people"],[1,"top","left","ion-float-left"],[3,"card",4,"ngIf"],[1,"top","right","ion-float-right"],[1,"bottom","left","ion-float-left"],[1,"bottom","right","ion-float-right"],[1,"centering"],[3,"style","card",4,"ngFor","ngForOf"],["expand","block",3,"click"],["name","create-outline"],["size","6",4,"ngIf"],["name","id-card-outline"],[3,"card"],["expand","block",3,"disabled","click"]],template:function(t,e){1&t&&(p.Kb(0,"ion-header"),p.Mb(1,"ion-content"),p.Mb(2,"ion-grid"),p.Mb(3,"ion-row"),p.Mb(4,"ion-col"),p.Mb(5,"ion-button",0),p.Kb(6,"ion-icon",1),p.gc(7),p.Lb(),p.Lb(),p.Mb(8,"ion-col",2),p.Mb(9,"ion-item",3),p.gc(10),p.Lb(),p.Lb(),p.Mb(11,"ion-col"),p.Mb(12,"ion-button",0),p.Kb(13,"ion-icon",4),p.gc(14),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(15,"div",5),p.fc(16,y,1,1,"app-card-item",6),p.Lb(),p.Kb(17,"div",7),p.Kb(18,"div",8),p.Mb(19,"div",9),p.Mb(20,"div",10),p.fc(21,C,1,4,"app-card-item",11),p.Lb(),p.Lb(),p.Lb(),p.Mb(22,"ion-footer"),p.Mb(23,"ion-grid"),p.Mb(24,"ion-row"),p.Mb(25,"ion-col"),p.Mb(26,"ion-button",12),p.Ub("click",function(){return e.showScoreboard()}),p.Kb(27,"ion-icon",13),p.Lb(),p.Lb(),p.fc(28,M,3,1,"ion-col",14),p.fc(29,P,3,1,"ion-col",14),p.Mb(30,"ion-col"),p.Mb(31,"ion-button",12),p.Ub("click",function(){return e.showHand()}),p.Kb(32,"ion-icon",15),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&t&&(p.zb(7),p.ic(" ",e.roundCounter,""),p.zb(3),p.ic("Playing: ",e.activePlayer,""),p.zb(4),p.ic(" ",e.playerCount,""),p.zb(2),p.Zb("ngIf",e.dominantColor),p.zb(5),p.Zb("ngForOf",e.pile),p.zb(7),p.Zb("ngIf",e.gameState===e.StateEnum.Playing),p.zb(1),p.Zb("ngIf",e.gameState===e.StateEnum.Predicting))},directives:[r.i,r.f,r.h,r.q,r.e,r.b,r.j,r.l,i.i,i.h,r.g,v],styles:[".my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}ion-item[_ngcontent-%COMP%]{text-align:center}.centering[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.top[_ngcontent-%COMP%]{height:25%}.left[_ngcontent-%COMP%]{width:25%}.bottom[_ngcontent-%COMP%]{height:75%}.right[_ngcontent-%COMP%]{width:75%}"]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(k)],s.i]}),t})(),w=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[i.b,n.a,r.u,D]]}),t})()}}]);