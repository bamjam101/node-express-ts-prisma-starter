// No import eidts
import app from './app'
import './config/env'
import env from './config/env'
import logger from './util/logger'

const server = app.listen(env.PORT)

// "// eslint-disable-next-line @typescript-eslint/no-floating-promises"
;(() => {
	try {
		logger.info(`APPLICATION_STARTED`, {
			meta: {
				PORT: env.NODE_ENV,
				SERVER_URL: `http://localhost:${env.PORT}`
			}
		})
	} catch (error: unknown) {
		logger.error(`APPLICATION_ERROR`, { meta: error })

		server.close((error) => {
			if (error) {
				logger.error(`APPLICATION_ERROR`, { meta: error })
			}

			process.exit(1)
		})
	}
})()
