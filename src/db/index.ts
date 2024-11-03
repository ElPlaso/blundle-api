import { Redis } from 'ioredis';

import { getEnv } from '../env.js';

const env = getEnv();

export interface PuzzleEntry {
    key: string;
    puzzle: string;
}

export async function getLatestPuzzle(): Promise<PuzzleEntry | null> {
    const redis = new Redis(env.REDIS_URL);

    const numKeys = await redis.dbsize();

    if (numKeys === 0) {
        return null;
    }

    const puzzle = await redis.get(numKeys.toString());

    if (!puzzle) {
        return null;
    }

    return { key: numKeys.toString(), puzzle };
}