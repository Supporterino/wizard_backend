import { customAlphabet } from 'nanoid';

const fiveCharID = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

export const gameID = (): string => {
    return fiveCharID();
}