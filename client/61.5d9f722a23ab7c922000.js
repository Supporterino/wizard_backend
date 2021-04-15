(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{ekgB:function(t,e,o){"use strict";o.r(e),o.d(e,"GamePageModule",function(){return w});var i=o("ofXK"),n=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),c=o("mrSG"),a=o("vnCE"),l=function(t){return t[t.Joining=0]="Joining",t[t.Predicting=1]="Predicting",t[t.Playing=2]="Playing",t[t.End=3]="End",t}({}),b=o("0Q5v"),d=o("bKoj"),u=o("jifJ"),p=o("fXoL"),h=o("zrj0"),g=o("tk/3"),m=o("gzoS");let y=(()=>{class t{constructor(t,e){this.http=t,this.provider=e}getAllPlayers(t){return this.http.get(`${this.provider.getPlayers}/${t}`)}getState(t){return this.http.get(`${this.provider.getState}/${t}`)}getRounds(t){return this.http.get(`${this.provider.rounds}/${t}`)}getActivePlayer(t){return this.http.get(`${this.provider.aplayer}/${t}`)}getHand(t,e){return this.http.post(this.provider.hand,{gameID:t,playerID:e})}getDominantColor(t){return this.http.get(`${this.provider.dominant}/${t}`)}getScoreboard(t){return this.http.get(`${this.provider.score}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(p.Qb(g.a),p.Qb(m.a))},t.\u0275prov=p.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Db({type:t,selectors:[["app-card-item"]],inputs:{card:"card"},decls:2,vars:4,consts:[[1,"card"]],template:function(t,e){1&t&&(p.Mb(0,"div",0),p.gc(1),p.Lb()),2&t&&(p.ec("background-color: ",e.card.color,";"),p.zb(1),p.hc(e.card.char))},styles:[".card[_ngcontent-%COMP%]{width:12vw;height:16vw;border-radius:2vw;text-align:center;vertical-align:middle}"]}),t})();function f(t,e){if(1&t&&p.Kb(0,"app-card-item",10),2&t){const t=p.Wb();p.Zb("card",t.dominantColor)}}function C(t,e){if(1&t){const t=p.Nb();p.Mb(0,"ion-col",2),p.Mb(1,"ion-button",11),p.Ub("click",function(){return p.bc(t),p.Wb().play()}),p.gc(2,"Play"),p.Lb(),p.Lb()}if(2&t){const t=p.Wb();p.zb(1),p.Zb("disabled",t.activePlayer!=t.playerID)}}function D(t,e){if(1&t){const t=p.Nb();p.Mb(0,"ion-col",2),p.Mb(1,"ion-button",11),p.Ub("click",function(){return p.bc(t),p.Wb().predict()}),p.gc(2,"Predict"),p.Lb(),p.Lb()}if(2&t){const t=p.Wb();p.zb(1),p.Zb("disabled",t.activePlayer!=t.playerID)}}const P=[{path:"",component:(()=>{class t{constructor(t,e,o,i){this.local=t,this.statusService=e,this.modalController=o,this.provider=i,this.StateEnum=l,this.gameID=t.gameID,this.playerID=t.playerID,e.getAllPlayers(this.gameID).subscribe(t=>{this.playerCount=t.length})}ngOnInit(){this.statusService.getRounds(this.gameID).subscribe(t=>{this.roundCounter=t}),this.statusService.getActivePlayer(this.gameID).subscribe(t=>{this.activePlayer=t}),this.statusService.getScoreboard(this.gameID).subscribe(t=>{this.scoreboard=t}),this.statusService.getState(this.gameID).subscribe(t=>{this.gameState=t}),this.statusService.getDominantColor(this.gameID).subscribe(t=>{this.dominantColor=t}),this.socket=Object(u.io)(`${this.provider.url}/${this.gameID}`),this.socket.on("new-active-player",t=>{this.activePlayer=t}),this.socket.on("scoreboard-update",t=>{this.scoreboard=t}),this.socket.on("state-update",t=>{this.gameState=t}),this.socket.on("rc-update",t=>{this.roundCounter=t}),this.socket.on("dom-update",t=>{this.dominantColor=t})}predict(){return Object(c.a)(this,void 0,void 0,function*(){console.log("Predicting");const t=yield this.modalController.create({component:d.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{controller:this.modalController},backdropDismiss:!1});yield t.present();const{data:e}=yield t.onWillDismiss();this.socket.emit("prediction",{id:this.playerID,val:e})})}showHand(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const e=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0}});yield e.present()}))}play(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const e=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!0},backdropDismiss:!1});yield e.present();const{data:o}=yield e.onWillDismiss();this.socket.emit("play-card",{id:this.playerID,card:o})}))}showScoreboard(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:b.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{scoreboard:this.scoreboard,controller:this.modalController}});yield t.present(),yield t.onWillDismiss()})}}return t.\u0275fac=function(e){return new(e||t)(p.Jb(h.a),p.Jb(y),p.Jb(s.v),p.Jb(m.a))},t.\u0275cmp=p.Db({type:t,selectors:[["app-game"]],decls:30,vars:6,consts:[["expand","block"],["name","sync-outline"],["size","6"],["lines","none"],["name","people"],[3,"card",4,"ngIf"],["expand","block",3,"click"],["name","create-outline"],["size","6",4,"ngIf"],["name","id-card-outline"],[3,"card"],["expand","block",3,"disabled","click"]],template:function(t,e){1&t&&(p.Kb(0,"ion-header"),p.Mb(1,"ion-content"),p.Mb(2,"ion-grid"),p.Mb(3,"ion-row"),p.Mb(4,"ion-col"),p.Mb(5,"ion-button",0),p.Kb(6,"ion-icon",1),p.gc(7),p.Lb(),p.Lb(),p.Mb(8,"ion-col",2),p.Mb(9,"ion-item",3),p.gc(10),p.Lb(),p.Lb(),p.Mb(11,"ion-col"),p.Mb(12,"ion-button",0),p.Kb(13,"ion-icon",4),p.gc(14),p.Lb(),p.Lb(),p.Lb(),p.Mb(15,"ion-row"),p.Mb(16,"ion-col"),p.fc(17,f,1,1,"app-card-item",5),p.Lb(),p.Kb(18,"ion-col"),p.Kb(19,"ion-col"),p.Kb(20,"ion-col"),p.Lb(),p.Mb(21,"ion-row"),p.Mb(22,"ion-col"),p.Mb(23,"ion-button",6),p.Ub("click",function(){return e.showScoreboard()}),p.Kb(24,"ion-icon",7),p.Lb(),p.Lb(),p.fc(25,C,3,1,"ion-col",8),p.fc(26,D,3,1,"ion-col",8),p.Mb(27,"ion-col"),p.Mb(28,"ion-button",6),p.Ub("click",function(){return e.showHand()}),p.Kb(29,"ion-icon",9),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&t&&(p.zb(7),p.ic(" ",e.roundCounter,""),p.zb(3),p.ic("Playing: ",e.activePlayer,""),p.zb(4),p.ic(" ",e.playerCount,""),p.zb(3),p.Zb("ngIf",e.dominantColor),p.zb(8),p.Zb("ngIf",e.gameState===e.StateEnum.Playing),p.zb(1),p.Zb("ngIf",e.gameState===e.StateEnum.Predicting))},directives:[s.g,s.e,s.f,s.o,s.d,s.b,s.h,s.j,i.i,v],styles:[".my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}ion-item[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(P)],r.i]}),t})(),w=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[i.b,n.a,s.s,I]]}),t})()}}]);