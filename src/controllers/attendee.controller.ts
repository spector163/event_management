import { Request, Response } from "express";
import { getEventAttendees, joinEvent } from "../services/attendee.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.util.js";
import { eventIdParamsType } from "../types/event.type.js";

export const joinEventHandler = async (
	req: Request,
	res: Response<{}, { params: eventIdParamsType }>
) => {
	const { eventId } = res.locals.params;
	const attendee = await joinEvent(eventId, req.user?.id!);
	sendSuccess(res, attendee, 201);
};

export const getEventAttendeesHandler = async (
	req: Request,
	res: Response<{}, { params: eventIdParamsType }>
) => {
	const { eventId } = res.locals.params;
	const attendees = await getEventAttendees(eventId);
	sendSuccess(res, attendees);
};
