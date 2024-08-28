export type THttpResponse<T> = {
	success: boolean
	statusCode: number
	message: string
	data: null | T
	meta: {
		ip?: string | null
		method: string
		url: string
	}
}
export type THttpError = {
	success: boolean
	statusCode: number
	message: string
	data: unknown
	meta: {
		ip?: string | null
		method: string
		url: string
	}
	trace?: object | null
}
