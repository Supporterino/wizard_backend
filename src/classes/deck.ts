import { Card } from './card';

export class Deck {
    private cards: Array<Card>;

    constructor() {
        this.cards = new Array<Card>();
    }

    getCards(): Array<Card> {
        return this.cards;
    }

    setNewDeck(): void {
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
        const colors = ["yellow", "green", "blue", "red"];
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        for (const color of colors) {
            for (const num of nums) {
                this.cards.push(new Card(color, num.toString()));
            }
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
