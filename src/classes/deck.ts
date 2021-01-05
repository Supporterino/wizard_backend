import { Card } from './card';

export class Deck {
    private cards: Array<Card>;

    constructor() {
        this.cards = new Array<Card>();
        this.construct_deck();
    }

    getCards() {
        return this.cards;
    }

    private construct_deck() {
        const colors = ["yellow", "green", "blue", "red"];
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        for (const color of colors) {
            for (const num of nums) {
                this.cards.push(new Card(color, num.toString()));
            }
        }

        this.cards = this.shuffle(this.cards);
    }

    private shuffle(arr: Array<Card>) {
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

    toString() {
        return `Deck{card:[${this.cards.forEach(e => e.toString())}]}`
    }
}
