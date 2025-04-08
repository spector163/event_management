import { type Response } from "express";

type ApiResponse<T> = {
	success: boolean;
	data?: T;
	error?: {
		message: string;
		details?: any;
	};
	meta?: {
		total?: number;
		limit?: number;
		offset?: number;
	};
};

export const sendSuccess = <T>(
	res: Response,
	data: T,
	statusCode = 200,
	meta?: any
) => {
	const response: ApiResponse<T> = {
		success: true,
		data,
	};
	if (meta) {
		response.meta = meta;
	}
	res.status(statusCode).json(response);
};

export const sendError = (
	res: Response,
	message: string,
	statusCode = 500,
	details?: any
) => {
	const response: ApiResponse<never> = {
		success: false,
		error: {
			message,
			details,
		},
	};
	res.status(statusCode).json(response);
};
