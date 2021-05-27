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
        log.debug(`[Player (${this.id})] Getting a hit.`);
        this.hit++;
    }

    pullHit(): number {
        log.debug(`[Player (${this.id})] Returning hits and resetting internal counter.`);
        const out = this.hit;
        this.hit = 0;
        return out;
    }

    getHitCounter(): number {
        log.silly(`[Player (${this.id})] Returning hits.`);
        return this.hit;
    }

    getHand(): Array<Card> {
        log.silly(`[Player (${this.id})] Returning hand.`);
        return this.hand;
    }

    receiveCard(card: Card): void {
        log.debug(`[Player (${this.id})] Adding ${card.toString()} to hand.`);
        this.hand.push(card);
    }

    playCard(card: Card): Card {
        log.debug(`[Player (${this.id})] Playing ${card.toString()} from hand.`);
        const out = removeElement(this.hand, card);
        if (out) {
            return out;
        } else {
            log.warn(`[Player (${this.id})] No card to play retrieved from hand`);
            return new Card('', '');
        }
    }

    getID(): string {
        log.silly(`[Player (${this.id})] Returning ID.`);
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
