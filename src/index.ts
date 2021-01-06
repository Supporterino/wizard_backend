import { Game } from "./classes/game";
import { Player } from "./classes/player";

const ply1 = new Player("Henry");
const ply2 = new Player("John");

const game = new Game();

game.addPlayer(ply1);
game.addPlayer(ply2);
game.startNewRound();

console.log(ply1.toString());
console.log(ply2.toString());