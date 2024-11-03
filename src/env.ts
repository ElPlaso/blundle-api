import 'dotenv/config'

import zod from 'zod'

const envSchema = zod.object({
    REDIS_URL: zod.string(),
})

export type Env = zod.infer<typeof envSchema>

export function getEnv(): Env {
    const result = envSchema.safeParse(process.env)

    if (result.success) {
        return result.data
    }

    console.error(result.error.issues)
    throw new Error('Failed to parse environment variables')
}