'use server';
import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export async function checkSetup() {
    try {
        await readFile(".setup");
        return true;
    } catch {
        return false;
    }
}