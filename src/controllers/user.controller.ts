import { Request, Response } from "express";
import { createUser, getUserById } from "../services/user.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.util.js";

export const createUserHandler = async (req: Request, res: Response) => {
	const user = await createUser(req.body);
	sendSuccess(res, user, 201);
};

export const getUserByIdHandler = async (req: Request, res: Response) => {
	const user = await getUserById(req.params.id!);
	if (!user) {
		return sendError(res, "User not found", 404);
	}
	sendSuccess(res, user);
};
