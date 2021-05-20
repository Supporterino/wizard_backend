(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{ekgB:function(t,o,e){"use strict";e.r(o),e.d(o,"GamePageModule",function(){return D});var n=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),c=e("mrSG"),a=e("vnCE"),l=function(t){return t[t.Joining=0]="Joining",t[t.Predicting=1]="Predicting",t[t.Playing=2]="Playing",t[t.End=3]="End",t}({}),b=e("0Q5v"),d=e("bKoj"),g=e("jifJ"),h=e("fXoL"),p=e("zrj0"),u=e("tk/3"),m=e("gzoS");let f=(()=>{class t{constructor(t,o){this.http=t,this.provider=o}getAllPlayers(t){return this.http.get(`${this.provider.getPlayers}/${t}`)}getState(t){return this.http.get(`${this.provider.getState}/${t}`)}getRounds(t){return this.http.get(`${this.provider.rounds}/${t}`)}getActivePlayer(t){return this.http.get(`${this.provider.aplayer}/${t}`)}getHand(t,o){return this.http.post(this.provider.hand,{gameID:t,playerID:o})}getDominantColor(t){return this.http.get(`${this.provider.dominant}/${t}`)}getScoreboard(t){return this.http.get(`${this.provider.score}/${t}`)}}return t.\u0275fac=function(o){return new(o||t)(h.Qb(u.a),h.Qb(m.a))},t.\u0275prov=h.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=h.Db({type:t,selectors:[["app-card-item"]],inputs:{card:"card"},decls:8,vars:11,consts:[[1,"playing-card"],[1,"corner-detail"],[1,"square-small"],[1,"square-main"],[1,"corner-detail","bottom"]],template:function(t,o){1&t&&(h.Mb(0,"div",0),h.Mb(1,"div",1),h.gc(2),h.Kb(3,"div",2),h.Lb(),h.Kb(4,"div",3),h.Mb(5,"div",4),h.gc(6),h.Kb(7,"div",2),h.Lb(),h.Lb()),2&t&&(h.zb(2),h.ic(" ",o.card.char," "),h.zb(1),h.ec("background-color: ",o.card.color,";"),h.zb(1),h.ec("background-color: ",o.card.color,";"),h.zb(2),h.ic(" ",o.card.char," "),h.zb(1),h.ec("background-color: ",o.card.color,";"))},styles:[".card[_ngcontent-%COMP%]{width:12vw;height:16vw;border-radius:2vw;text-align:center;vertical-align:middle}.playing-card[_ngcontent-%COMP%]{position:absolute;background:#3880ff;width:29vw;height:39vw;border:1px solid #000;border-radius:5%}.square-main[_ngcontent-%COMP%]{position:absolute;top:14vw;left:9.5vw;width:9vw;height:9vw;transform:rotate(45deg)}.corner-detail[_ngcontent-%COMP%]{position:absolute;left:2vw;top:2vw;font-family:sans-serif;font-size:3vw;color:#000}.bottom[_ngcontent-%COMP%]{bottom:2vw;right:2vw;transform:rotate(180deg)}.square-small[_ngcontent-%COMP%]{position:absolute;top:4.2vw;left:.5vw;width:2vw;height:2vw;transform:rotate(45deg)}"]}),t})();function y(t,o){if(1&t&&h.Kb(0,"app-card-item",15),2&t){const t=h.Wb();h.Zb("card",t.dominantColor)}}function C(t,o){if(1&t&&(h.Mb(0,"div",16),h.Kb(1,"app-card-item",17),h.Lb()),2&t){const t=o.$implicit;h.zb(1),h.Zb("card",t)}}function w(t,o){if(1&t){const t=h.Nb();h.Mb(0,"ion-col",2),h.Mb(1,"ion-button",18),h.Ub("click",function(){return h.bc(t),h.Wb().play()}),h.gc(2,"Play"),h.Lb(),h.Lb()}if(2&t){const t=h.Wb();h.zb(1),h.Zb("disabled",t.activePlayer!=t.playerID)}}function M(t,o){if(1&t){const t=h.Nb();h.Mb(0,"ion-col",2),h.Mb(1,"ion-button",18),h.Ub("click",function(){return h.bc(t),h.Wb().predict()}),h.gc(2,"Predict"),h.Lb(),h.Lb()}if(2&t){const t=h.Wb();h.zb(1),h.Zb("disabled",t.activePlayer!=t.playerID)}}const P=[{path:"",component:(()=>{class t{constructor(t,o,e,n){this.local=t,this.statusService=o,this.modalController=e,this.provider=n,this.StateEnum=l,this.gameID=t.gameID,this.playerID=t.playerID,o.getAllPlayers(this.gameID).subscribe(t=>{this.playerCount=t.length})}ngOnInit(){this.statusService.getRounds(this.gameID).subscribe(t=>{this.roundCounter=t}),this.statusService.getActivePlayer(this.gameID).subscribe(t=>{this.activePlayer=t}),this.statusService.getScoreboard(this.gameID).subscribe(t=>{this.scoreboard=t}),this.statusService.getState(this.gameID).subscribe(t=>{this.gameState=t}),this.statusService.getDominantColor(this.gameID).subscribe(t=>{this.dominantColor=t}),this.socket=Object(g.io)(`${this.provider.url}/${this.gameID}`),this.socket.on("new-active-player",t=>{this.activePlayer=t}),this.socket.on("scoreboard-update",t=>{this.scoreboard=t}),this.socket.on("state-update",t=>{this.gameState=t}),this.socket.on("rc-update",t=>{this.roundCounter=t}),this.socket.on("dom-update",t=>{this.dominantColor=t}),this.socket.on("pile-update",t=>{this.pile=t})}predict(){return Object(c.a)(this,void 0,void 0,function*(){console.log("Predicting");const t=yield this.modalController.create({component:d.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{controller:this.modalController},backdropDismiss:!1});yield t.present();const{data:o}=yield t.onWillDismiss();this.socket.emit("prediction",{id:this.playerID,val:o})})}showHand(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const o=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!1}});yield o.present()}))}play(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const o=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0},backdropDismiss:!1});yield o.present();const{data:e}=yield o.onWillDismiss();this.socket.emit("play-card",{id:this.playerID,card:e})}))}showScoreboard(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:b.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{scoreboard:this.scoreboard,controller:this.modalController}});yield t.present(),yield t.onWillDismiss()})}}return t.\u0275fac=function(o){return new(o||t)(h.Jb(p.a),h.Jb(f),h.Jb(r.x),h.Jb(m.a))},t.\u0275cmp=h.Db({type:t,selectors:[["app-game"]],decls:32,vars:7,consts:[["expand","block"],["name","sync-outline"],["size","6"],["lines","none"],["name","people"],[1,"top","left","ion-float-left"],[3,"card",4,"ngIf"],[1,"top","right","ion-float-right"],[1,"bottom","left","ion-float-left"],[1,"bottom","right","ion-float-right"],["class","centering",4,"ngFor","ngForOf"],["expand","block",3,"click"],["name","create-outline"],["size","6",4,"ngIf"],["name","id-card-outline"],[3,"card"],[1,"centering"],[1,"piling",3,"card"],["expand","block",3,"disabled","click"]],template:function(t,o){1&t&&(h.Kb(0,"ion-header"),h.Mb(1,"ion-content"),h.Mb(2,"ion-grid"),h.Mb(3,"ion-row"),h.Mb(4,"ion-col"),h.Mb(5,"ion-button",0),h.Kb(6,"ion-icon",1),h.gc(7),h.Lb(),h.Lb(),h.Mb(8,"ion-col",2),h.Mb(9,"ion-item",3),h.gc(10),h.Lb(),h.Lb(),h.Mb(11,"ion-col"),h.Mb(12,"ion-button",0),h.Kb(13,"ion-icon",4),h.gc(14),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(15,"div",5),h.fc(16,y,1,1,"app-card-item",6),h.Lb(),h.Kb(17,"div",7),h.Kb(18,"div",8),h.Mb(19,"div",9),h.fc(20,C,2,1,"div",10),h.Lb(),h.Lb(),h.Mb(21,"ion-footer"),h.Mb(22,"ion-grid"),h.Mb(23,"ion-row"),h.Mb(24,"ion-col"),h.Mb(25,"ion-button",11),h.Ub("click",function(){return o.showScoreboard()}),h.Kb(26,"ion-icon",12),h.Lb(),h.Lb(),h.fc(27,w,3,1,"ion-col",13),h.fc(28,M,3,1,"ion-col",13),h.Mb(29,"ion-col"),h.Mb(30,"ion-button",11),h.Ub("click",function(){return o.showHand()}),h.Kb(31,"ion-icon",14),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.zb(7),h.ic(" ",o.roundCounter,""),h.zb(3),h.ic("Playing: ",o.activePlayer,""),h.zb(4),h.ic(" ",o.playerCount,""),h.zb(2),h.Zb("ngIf",o.dominantColor),h.zb(4),h.Zb("ngForOf",o.pile),h.zb(7),h.Zb("ngIf",o.gameState===o.StateEnum.Playing),h.zb(1),h.Zb("ngIf",o.gameState===o.StateEnum.Predicting))},directives:[r.i,r.f,r.h,r.q,r.e,r.b,r.j,r.l,n.i,n.h,r.g,v],styles:[".my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}ion-item[_ngcontent-%COMP%]{text-align:center}.centering[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.piling[_ngcontent-%COMP%]:first-child{position:absolute;transform:rotate(8deg)}.piling[_ngcontent-%COMP%]:nth-child(2){position:absolute;transform:rotate(3deg)}.piling[_ngcontent-%COMP%]:nth-child(3){position:absolute;transform:rotate(18deg)}.piling[_ngcontent-%COMP%]:nth-child(4){position:absolute;transform:rotate(1deg)}.piling[_ngcontent-%COMP%]:nth-child(5){position:absolute;transform:rotate(25deg)}.piling[_ngcontent-%COMP%]:nth-child(6){position:absolute;transform:rotate(3deg)}.top[_ngcontent-%COMP%]{height:25%}.left[_ngcontent-%COMP%]{width:25%}.bottom[_ngcontent-%COMP%]{height:75%}.right[_ngcontent-%COMP%]{width:75%}"]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=h.Hb({type:t}),t.\u0275inj=h.Gb({factory:function(o){return new(o||t)},imports:[[s.i.forChild(P)],s.i]}),t})(),D=(()=>{class t{}return t.\u0275mod=h.Hb({type:t}),t.\u0275inj=h.Gb({factory:function(o){return new(o||t)},imports:[[n.b,i.a,r.u,k]]}),t})()}}]);