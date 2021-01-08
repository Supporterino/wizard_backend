import { Game } from "./classes/game";
import { Player } from "./classes/player";

const ply1 = new Player("Henry");
const ply2 = new Player("John");

const game = new Game();

game.addPlayer(ply1);
game.addPlayer(ply2);
game.startGame();
game.playTurn(ply1.getID(), ply1.getHand()[0]);
game.playTurn(ply2.getID(), ply2.getHand()[0]);

game.playTurn(ply1.getID(), ply1.getHand()[0]);
game.playTurn(ply2.getID(), ply2.getHand()[0]);

game.playTurn(ply1.getID(), ply1.getHand()[0]);
game.playTurn(ply2.getID(), ply2.getHand()[0]);

console.log(game.toString());
//console.log(ply1.toString());
//console.log(ply2.toString());