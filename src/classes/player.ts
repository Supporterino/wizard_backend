import { removeElement } from '../utils/arrayLogic';
import { Card } from './card';
import { log } from '../index';

export class Player {
    private hand: Array<Card>;
    private id: string;
    private hit: number;

    constructor(inID: string) {
        this.id = inID;
        this.hand = new Array<Card>();
        this.hit = 0;
    }

    addHit(): void {
        log.debug(`[Player] Getting a hit.`);
        this.hit++;
    }

    pullHit(): number {
        log.debug(`[Player] Returning hits and resetting internal counter.`);
        const out = this.hit;
        this.hit = 0;
        return out;
    }

    getHitCounter(): number {
        log.silly(`[Player] Returning hits.`);
        return this.hit;
    }

    getHand(): Array<Card> {
        log.silly(`[Player] Returning hand.`);
        return this.hand;
    }

    receiveCard(card: Card): void {
        log.debug(`[Player] Adding ${card.toString()} to hand.`);
        this.hand.push(card);
    }

    playCard(card: Card): Card {
        log.debug(`[Player] Playing ${card.toString()} from hand.`);
        return removeElement(this.hand, card);
    }

    getID(): string {
        log.silly(`[Player] Returning ID.`);
        return this.id;
    }

    toString(): string {
        let output = `Player{id: ${this.id}, hit: ${this.hit}, hand:[ \n`;
        for (const card of this.hand) {
            output += `\t ${card.toString()} \n`;
        }
        output += ']}';
        return output;
    }
}
