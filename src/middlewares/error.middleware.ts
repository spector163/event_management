import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/apiResponse.util.js";

export const errorHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(error);
	// express 5 handles errror without explicitly call next(error)
	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		if (error.code == "P2002") {
			return sendError(
				res,
				"Duplicate entry - unique constraint voilation",
				409
			);
		}
		if (error.code === "P2025") {
			return sendError(res, "Record Not Found", 404);
		}
	}
	if (error.message.includes("ECONNREFUSED")) {
		return sendError(res, "database connection error", 503);
	}
	sendError(res, error.message, 500);
};
