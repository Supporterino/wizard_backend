import { Game } from "./classes/game";
import { Player } from "./classes/player";
import { Logger } from 'tslog';

export const log: Logger = new Logger({ name: 'Wizard Backend' });

const ply1 = new Player("Henry");
const ply2 = new Player("John");
const ply3 = new Player("Hayley");

const game = new Game();

game.addPlayer(ply1);
game.addPlayer(ply2);
game.addPlayer(ply3);

game.startGame();

game.givePrediction(ply1.getID(), 1);
game.givePrediction(ply2.getID(), 1);
game.givePrediction(ply3.getID(), 1);

game.playTurn(ply1.getID(), ply1.getHand()[0]);
game.playTurn(ply2.getID(), ply2.getHand()[0]);
game.playTurn(ply3.getID(), ply3.getHand()[0]);

game.givePrediction(ply1.getID(), 1);
game.givePrediction(ply2.getID(), 1);
game.givePrediction(ply3.getID(), 1);

game.playTurn(ply1.getID(), ply1.getHand()[0]);
game.playTurn(ply2.getID(), ply2.getHand()[0]);
game.playTurn(ply3.getID(), ply3.getHand()[0]);

game.playTurn(ply1.getID(), ply1.getHand()[0]);
game.playTurn(ply2.getID(), ply2.getHand()[0]);
game.playTurn(ply3.getID(), ply3.getHand()[0]);

console.log(game.printScoreboard())
//console.log(game.toString());
//console.log(ply1.toString());
//console.log(ply2.toString());