import app from './app'
import './config/env'
import env from './config/env'

const server = app.listen(env.PORT)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
	try {
		const dummy = await new Promise(() => {})

		console.log(dummy)
	} catch (error: unknown) {
		console.error(error)
		server.close()
	}
})()
