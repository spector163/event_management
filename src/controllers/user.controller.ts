import { Request, Response } from "express";
import { createUser, getUserById } from "../services/user.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.util.js";
import { CreateUserInput, getUserParamsType } from "../types/user.type.js";

export const createUserHandler = async (
	req: Request,
	res: Response<{}, { body: CreateUserInput }>
) => {
	const body = res.locals.body;
	const user = await createUser(body);
	sendSuccess(res, user, 201);
};

export const getUserByIdHandler = async (
	req: Request,
	res: Response<{}, { params: getUserParamsType }>
) => {
	const { id } = res.locals.params;
	const user = await getUserById(id);
	if (!user) {
		return sendError(res, "User not found", 404);
	}
	sendSuccess(res, user);
};
