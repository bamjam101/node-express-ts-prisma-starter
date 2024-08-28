import env from '../../config/env'
import { ApplicationEnvironment } from '../constants/common'
import message from '../constants/message'
import { THttpError, THttpResponse } from '../types'
import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express'

export const HttpResponse = <T>(
	req: Request,
	res: Response,
	_: NextFunction,
	statusCode: number,
	responseMessage: string,
	data: T | null = null
): void => {
	const response: THttpResponse<T> = {
		success: true,
		statusCode: statusCode,
		meta: {
			ip: req.ip || null,
			method: req.method,
			url: req.originalUrl
		},
		message: responseMessage,
		data: data
	}

	// Production Env check
	if (env.NODE_ENV === ApplicationEnvironment.PRODUCTION) {
		delete response.meta.ip
	}

	res.status(statusCode).json(response)
}

export const ErrorResponse = (req: Request, _: Response, next: NextFunction, statusCode: number = 500, err: unknown): void => {
	const errorObj: THttpError = {
		success: false,
		statusCode: statusCode,
		meta: {
			ip: req.ip || null,
			method: req.method,
			url: req.originalUrl
		},
		message: err instanceof Error ? err.message : message.SOMETHING_WENT_WRONG,
		data: null,
		trace: err instanceof Error ? { error: err.stack } : null
	}

	// Production Env check
	if (env.NODE_ENV === ApplicationEnvironment.PRODUCTION) {
		delete errorObj.meta.ip
		delete errorObj.trace
	}

	return next(errorObj)
}

export const NotFoundHandler: RequestHandler = (req: Request, _: Response, next: NextFunction) => {
	try {
		throw new Error(message.NOT_FOUND('Route'))
	} catch (err) {
		ErrorResponse(req, _, next, 404, err)
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GlobalErrorHandler: ErrorRequestHandler = (err: THttpError, _: Request, res: Response, __: NextFunction) => {
	res.status(err.statusCode).json(err)
}
