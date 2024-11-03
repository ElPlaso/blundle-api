import { Redis } from 'ioredis';

import { getEnv } from '../env.js';

const env = getEnv();

export interface PuzzleEntry {
    key: string;
    puzzle: string;
}

export async function getLatestPuzzle() {
    const redis = new Redis(env.REDIS_URL);

    const numKeys = await redis.dbsize();

    if (numKeys === 0) {
        return null;
    }

    const puzzle = await redis.get(numKeys.toString());

    return { key: numKeys.toString(), puzzle };
}