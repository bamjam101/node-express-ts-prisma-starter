import { ApplicationEnvironment } from '../util/constants/common'
import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

function parseEnv(key: keyof typeof process.env, defaultValue?: string) {
	const value = process.env[key]
	if (value !== undefined && typeof value === 'string') {
		return value
	}

	if (defaultValue) {
		return defaultValue
	}

	throw new Error(`Environment variable ${key.toString()} is not set`)
}

export default {
	PORT: parseEnv('PORT'),
	NODE_ENV: parseEnv('NODE_ENV') as ApplicationEnvironment
}
