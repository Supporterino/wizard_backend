import { Card } from '../classes/card';

export const removeElement = (arr: Array<Card>, ele: Card): Card | undefined => {
    const index = arr.findIndex((x) => {
        return x.getChar() === ele.getChar() && x.getColor() === ele.getColor();
    });
    if (index > -1) return arr.splice(index, 1)[0];
    else return undefined;
};
