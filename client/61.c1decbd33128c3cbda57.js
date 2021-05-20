(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{ekgB:function(t,e,o){"use strict";o.r(e),o.d(e,"GamePageModule",function(){return k});var i=o("ofXK"),n=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),c=o("mrSG"),a=o("vnCE"),l=function(t){return t[t.Joining=0]="Joining",t[t.Predicting=1]="Predicting",t[t.Playing=2]="Playing",t[t.End=3]="End",t}({}),b=o("0Q5v"),d=o("bKoj"),h=o("jifJ"),u=o("fXoL"),g=o("zrj0"),p=o("tk/3"),m=o("gzoS");let f=(()=>{class t{constructor(t,e){this.http=t,this.provider=e}getAllPlayers(t){return this.http.get(`${this.provider.getPlayers}/${t}`)}getState(t){return this.http.get(`${this.provider.getState}/${t}`)}getRounds(t){return this.http.get(`${this.provider.rounds}/${t}`)}getMaxRounds(t){return this.http.get(`${this.provider.maxRounds}/${t}`)}getActivePlayer(t){return this.http.get(`${this.provider.aplayer}/${t}`)}getHand(t,e){return this.http.post(this.provider.hand,{gameID:t,playerID:e})}getDominantColor(t){return this.http.get(`${this.provider.dominant}/${t}`)}getScoreboard(t){return this.http.get(`${this.provider.score}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(p.a),u.Qb(m.a))},t.\u0275prov=u.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Db({type:t,selectors:[["app-card-item"]],inputs:{card:"card"},decls:8,vars:11,consts:[[1,"playing-card"],[1,"corner-detail"],[1,"square-small"],[1,"square-main"],[1,"corner-detail","bottom"]],template:function(t,e){1&t&&(u.Mb(0,"div",0),u.Mb(1,"div",1),u.gc(2),u.Kb(3,"div",2),u.Lb(),u.Kb(4,"div",3),u.Mb(5,"div",4),u.gc(6),u.Kb(7,"div",2),u.Lb(),u.Lb()),2&t&&(u.zb(2),u.ic(" ",e.card.char," "),u.zb(1),u.ec("background-color: ",e.card.color,";"),u.zb(1),u.ec("background-color: ",e.card.color,";"),u.zb(2),u.ic(" ",e.card.char," "),u.zb(1),u.ec("background-color: ",e.card.color,";"))},styles:[".card[_ngcontent-%COMP%]{width:12vmin;height:16vmin;border-radius:2vmin;text-align:center;vertical-align:middle}.playing-card[_ngcontent-%COMP%]{position:absolute;background:#3880ff;width:29vmin;height:39vmin;border:1px solid #000;border-radius:5%}.square-main[_ngcontent-%COMP%]{position:absolute;top:14vmin;left:9.5vmin;width:9vmin;height:9vmin;transform:rotate(45deg)}.corner-detail[_ngcontent-%COMP%]{position:absolute;left:2vmin;top:2vmin;font-family:sans-serif;font-size:3vmin;color:#000}.bottom[_ngcontent-%COMP%]{bottom:2vmin;right:2vmin;transform:rotate(180deg)}.square-small[_ngcontent-%COMP%]{position:absolute;top:4.2vmin;left:.5vmin;width:2vmin;height:2vmin;transform:rotate(45deg)}"]}),t})();function y(t,e){if(1&t&&u.Kb(0,"app-card-item",16),2&t){const t=u.Wb();u.Zb("card",t.dominantColor)}}function C(t,e){if(1&t&&u.Kb(0,"app-card-item",16),2&t){const t=e.$implicit;u.ec("transform: rotate(",10*e.index,"deg);"),u.Zb("card",t)}}function M(t,e){if(1&t){const t=u.Nb();u.Mb(0,"ion-col",2),u.Mb(1,"ion-button",17),u.Ub("click",function(){return u.bc(t),u.Wb().play()}),u.gc(2,"Play"),u.Lb(),u.Lb()}if(2&t){const t=u.Wb();u.zb(1),u.Zb("disabled",t.activePlayer!=t.playerID)}}function P(t,e){if(1&t){const t=u.Nb();u.Mb(0,"ion-col",2),u.Mb(1,"ion-button",17),u.Ub("click",function(){return u.bc(t),u.Wb().predict()}),u.gc(2,"Predict"),u.Lb(),u.Lb()}if(2&t){const t=u.Wb();u.zb(1),u.Zb("disabled",t.activePlayer!=t.playerID)}}const w=[{path:"",component:(()=>{class t{constructor(t,e,o,i){this.local=t,this.statusService=e,this.modalController=o,this.provider=i,this.StateEnum=l,this.gameID=t.gameID,this.playerID=t.playerID,e.getAllPlayers(this.gameID).subscribe(t=>{this.playerCount=t.length})}ngOnInit(){this.statusService.getRounds(this.gameID).subscribe(t=>{this.roundCounter=t}),this.statusService.getActivePlayer(this.gameID).subscribe(t=>{this.activePlayer=t}),this.statusService.getScoreboard(this.gameID).subscribe(t=>{this.scoreboard=t}),this.statusService.getState(this.gameID).subscribe(t=>{this.gameState=t}),this.statusService.getDominantColor(this.gameID).subscribe(t=>{this.dominantColor=t}),this.statusService.getMaxRounds(this.gameID).subscribe(t=>{this.maxRounds=t}),this.socket=Object(h.io)(`${this.provider.url}/${this.gameID}`),this.socket.on("new-active-player",t=>{this.activePlayer=t}),this.socket.on("scoreboard-update",t=>{this.scoreboard=t}),this.socket.on("state-update",t=>{this.gameState=t}),this.socket.on("rc-update",t=>{this.roundCounter=t}),this.socket.on("dom-update",t=>{this.dominantColor=t}),this.socket.on("pile-update",t=>{this.pile=t})}predict(){return Object(c.a)(this,void 0,void 0,function*(){console.log("Predicting");const t=yield this.modalController.create({component:d.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{controller:this.modalController},backdropDismiss:!1});yield t.present();const{data:e}=yield t.onWillDismiss();this.socket.emit("prediction",{id:this.playerID,val:e})})}showHand(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){console.log(t);const e=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:t,controller:this.modalController,playing:!1}});yield e.present()}))}getPlayableCards(t){let e=[];return this.pile&&this.pile.length>0&&(e=e.concat(t.filter((t,e,o)=>t.color===this.pile[0].color))),0==e.length&&(e=e.concat(t.filter((t,e,o)=>"white"!==t.color))),e=e.concat(t.filter((t,e,o)=>"white"===t.color)),e}play(){this.statusService.getHand(this.gameID,this.playerID).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){const e=this.getPlayableCards(t),o=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{cards:e,controller:this.modalController,playing:!0},backdropDismiss:!1});yield o.present();const{data:i}=yield o.onWillDismiss();this.socket.emit("play-card",{id:this.playerID,card:i})}))}showScoreboard(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:b.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{scoreboard:this.scoreboard,controller:this.modalController}});yield t.present(),yield t.onWillDismiss()})}}return t.\u0275fac=function(e){return new(e||t)(u.Jb(g.a),u.Jb(f),u.Jb(r.x),u.Jb(m.a))},t.\u0275cmp=u.Db({type:t,selectors:[["app-game"]],decls:33,vars:8,consts:[["expand","block"],["name","sync-outline"],["size","6"],["lines","none",1,"ion-text-center"],["name","people"],[1,"top","left","ion-float-left"],[3,"card",4,"ngIf"],[1,"top","right","ion-float-right"],[1,"bottom","left","ion-float-left"],[1,"bottom","right","ion-float-right"],[1,"centering"],[3,"style","card",4,"ngFor","ngForOf"],["expand","block",3,"click"],["name","create-outline"],["size","6",4,"ngIf"],["name","id-card-outline"],[3,"card"],["expand","block",3,"disabled","click"]],template:function(t,e){1&t&&(u.Kb(0,"ion-header"),u.Mb(1,"ion-content"),u.Mb(2,"ion-grid"),u.Mb(3,"ion-row"),u.Mb(4,"ion-col"),u.Mb(5,"ion-button",0),u.Kb(6,"ion-icon",1),u.gc(7),u.Lb(),u.Lb(),u.Mb(8,"ion-col",2),u.Mb(9,"ion-item",3),u.gc(10),u.Lb(),u.Lb(),u.Mb(11,"ion-col"),u.Mb(12,"ion-button",0),u.Kb(13,"ion-icon",4),u.gc(14),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(15,"div",5),u.fc(16,y,1,1,"app-card-item",6),u.Lb(),u.Kb(17,"div",7),u.Kb(18,"div",8),u.Mb(19,"div",9),u.Mb(20,"div",10),u.fc(21,C,1,4,"app-card-item",11),u.Lb(),u.Lb(),u.Lb(),u.Mb(22,"ion-footer"),u.Mb(23,"ion-grid"),u.Mb(24,"ion-row"),u.Mb(25,"ion-col"),u.Mb(26,"ion-button",12),u.Ub("click",function(){return e.showScoreboard()}),u.Kb(27,"ion-icon",13),u.Lb(),u.Lb(),u.fc(28,M,3,1,"ion-col",14),u.fc(29,P,3,1,"ion-col",14),u.Mb(30,"ion-col"),u.Mb(31,"ion-button",12),u.Ub("click",function(){return e.showHand()}),u.Kb(32,"ion-icon",15),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb()),2&t&&(u.zb(7),u.jc(" ",e.roundCounter," / ",e.maxRounds,""),u.zb(3),u.ic("Playing: ",e.activePlayer,""),u.zb(4),u.ic(" ",e.playerCount,""),u.zb(2),u.Zb("ngIf",e.dominantColor),u.zb(5),u.Zb("ngForOf",e.pile),u.zb(7),u.Zb("ngIf",e.gameState===e.StateEnum.Playing),u.zb(1),u.Zb("ngIf",e.gameState===e.StateEnum.Predicting))},directives:[r.i,r.f,r.h,r.q,r.e,r.b,r.j,r.l,i.i,i.h,r.g,v],styles:[".my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}ion-item[_ngcontent-%COMP%]{text-align:center}.centering[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.top[_ngcontent-%COMP%]{height:21%}.left[_ngcontent-%COMP%]{width:30%}.bottom[_ngcontent-%COMP%]{height:70%}.right[_ngcontent-%COMP%]{width:70%}"]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(w)],s.i]}),t})(),k=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[i.b,n.a,r.u,D]]}),t})()}}]);