import { ApplicationEnvironment } from '../util/constants/common'
import env from './env'
import { CorsOptions } from 'cors'

// Configurations
export const CORS_CONFIG: CorsOptions = {
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
	origin: env.NODE_ENV === ApplicationEnvironment.DEVELOPMENT ? ['*'] : ['https://bartergram.network']
}
