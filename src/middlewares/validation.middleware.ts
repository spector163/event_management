import { ZodError, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/apiResponse.util.js";

export const validate = (schema: ZodSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse({ body: req.body, params: req.params, query: req.query });
			next();
		} catch (e) {
			if (e instanceof ZodError) {
				return sendError(
					res,
					"Validation failed",
					400,
					e.errors.map((item) => ({
						path: item.path.join("."),
						message: item.message,
					}))
				);
			}
			next(e);
		}
	};
};
