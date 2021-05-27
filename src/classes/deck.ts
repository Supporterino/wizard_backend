import { Card } from './card';
import { Player } from './player';
import { log } from '../index';

export class Deck {
    private cards: Array<Card>;

    constructor() {
        this.cards = new Array<Card>();
    }

    getTopCard(): Card | undefined {
        log.debug(`[Deck] Returning top card of deck.`);
        log.silly(`[Deck] Returning top card of deck:`, this.cards);
        return this.cards.shift();
    }

    dealCard(player: Player): void {
        log.debug(`[Deck] Dealing card to ${player.getID()}`);
        const element = this.getTopCard();
        if (element) player.receiveCard(element);
        else log.warn(`[Deck] Didn't deal card to ${player.getID()} since no card was returned from the deck.`);
    }

    getCards(): Array<Card> {
        return this.cards;
    }

    setNewDeck(): void {
        log.debug(`[Deck] Creating new Deck.`);
        this.cards = new Array<Card>();
        this.fillDeck();
        this.cards = this.shuffle(this.cards);
    }

    toString(): string {
        let output = 'Deck{cards:[ \n';
        for (const card of this.cards) {
            output += `\t ${card.toString()} \n`;
        }
        output += ']}';
        return output;
    }

    private fillDeck(): void {
        const colors = ['yellow', 'green', 'blue', 'red'];
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (const color of colors) {
            for (const num of nums) {
                log.debug(`[Deck] Adding (${color}, ${num.toString()}) to deck.`);
                this.cards.push(new Card(color, num.toString()));
            }
        }

        for (let index = 0; index < 4; index++) {
            log.debug(`[Deck] Adding special cards to deck.`);
            this.cards.push(new Card('white', 'Sorcerer'));
            this.cards.push(new Card('white', 'Fool'));
        }
    }

    private shuffle(arr: Array<Card>): Array<Card> {
        let currentIndex = this.cards.length;
        let temporaryValue: Card;
        let randomIndex: number;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;
    }
}
