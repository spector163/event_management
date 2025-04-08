import { Request, Response } from "express";
import { CreateEventInput, eventQueryParamsType } from "../types/event.type.js";
import { createEvent, getEvents } from "../services/event.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.util.js";

export const createEventHandler = async (req: Request, res: Response) => {
	const input: CreateEventInput = {
		...req.body,
		createdBy: req.user?.id!,
	};
	const event = await createEvent(input);
	sendSuccess(res, event, 201);
};

export const getEventsHandler = async (
	req: Request,
	res: Response<{}, { query: eventQueryParamsType }>
) => {
	const { limit, offset } = res.locals.query;
	const { events, total } = await getEvents(limit, offset);
	sendSuccess(res, events, 200, { total, limit, offset });
};
