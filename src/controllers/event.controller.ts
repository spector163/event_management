import { Request, Response } from "express";
import { CreateEventInput } from "../types/event.type.js";
import { createEvent, getEvents } from "../services/event.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.util.js";

export const createEventHandler = async (req: Request, res: Response) => {
	try {
		const input: CreateEventInput = {
			...req.body,
			//@ts-ignore
			createdBy: req.user.id,
		};
		const event = await createEvent(input);
		sendSuccess(res, event, 201);
	} catch (err) {
		sendError(
			res,
			"Failed to create event",
			500,
			err instanceof Error ? err.message : undefined
		);
	}
};

export const getEventsHandler = async (req: Request, res: Response) => {
	try {
		const limit = parseInt(req.query.limit as string) || 10;
		const offset = parseInt(req.query.offset as string) || 0;
		const { events, total } = await getEvents(limit, offset);
		sendSuccess(res, events, 200, { total, limit, offset });
	} catch (err) {
		sendError(
			res,
			"Failed to get events",
			500,
			err instanceof Error ? err.message : undefined
		);
	}
};
