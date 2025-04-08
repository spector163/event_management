import { ZodError, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/apiResponse.util.js";

export const validate = (schema: ZodSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = schema.parse({
				body: req.body,
				params: req.params,
				query: req.query,
			});
			res.locals.body = result.body;
			res.locals.query = result.query;
			res.locals.params = result.params;
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
