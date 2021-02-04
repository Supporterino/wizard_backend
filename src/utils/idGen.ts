import { customAlphabet, nanoid } from 'nanoid';

const fiveCharID = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

export const gameID = (): string => {
    return fiveCharID();
}

export const controllerID = (): string => {
    return nanoid(6);
}