import env from '../config/env'
import { ApplicationEnvironment } from '../util/constants/common'
import { blue, green, magenta, red, yellow } from 'colorette'
import * as sourceMapSupport from 'source-map-support'
import util from 'util'
import { createLogger, format, transports } from 'winston'
import { ConsoleTransportInstance } from 'winston/lib/winston/transports'

// Linking Trace Support
sourceMapSupport.install()

const colorizeLevel = (level: string) => {
	switch (level) {
		case 'ERROR':
			return red(level)
		case 'INFO':
			return blue(level)
		case 'WARN':
			return yellow(level)
		default:
			return level
	}
}

const consoleLogFormat = format.printf((info) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { level, message, timestamp, meta = {} } = info

	const customLevel = colorizeLevel(level.toUpperCase())
	const customTimestamp = green(timestamp as string)

	const line = '----------------'

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const customMessage = message

	const customMeta = util.inspect(meta, {
		showHidden: false,
		depth: null,
		colors: true
	})

	const customLog = `${line}\n${customLevel} [${customTimestamp}] ${customMessage}\n${magenta('META')} ${customMeta}\n${line}`

	return customLog
})

const consoleTransport = (): Array<ConsoleTransportInstance> => {
	if (env.NODE_ENV === ApplicationEnvironment.DEVELOPMENT) {
		return [
			new transports.Console({
				level: 'info',
				format: format.combine(format.timestamp(), consoleLogFormat)
			})
		]
	}

	return []
}

export default createLogger({
	defaultMeta: {
		meta: {}
	},
	transports: [...consoleTransport()]
})
