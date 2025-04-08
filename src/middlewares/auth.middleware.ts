import { NextFunction, Request, Response } from "express";
import { sendError } from "../utils/apiResponse.util.js";

export const authenticate = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userId = req.headers["x-user-id"] as string;

	if (!userId) {
		return sendError(res, "Authentication Required", 401);
	}
	//@ts-ignore
	req.user = { id: userId };
	next();
};
