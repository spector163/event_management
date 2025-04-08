import { Request, Response } from "express";
import { getEventAttendees, joinEvent } from "../services/attendee.service.js";
import { sendError, sendSuccess } from "../utils/apiResponse.util.js";

export const joinEventHandler = async (req: Request, res: Response) => {
	try {
		//@ts-ignore
		const attendee = await joinEvent(req.params.eventId!, req.user.id);
		sendSuccess(res, attendee, 201);
	} catch (err) {
		sendError(
			res,
			"Failed to join event",
			500,
			err instanceof Error ? err.message : undefined
		);
	}
};

export const getEventAttendeesHandler = async (req: Request, res: Response) => {
	try {
		const attendees = await getEventAttendees(req.params.eventId!);
		sendSuccess(res, attendees);
	} catch (err) {
		sendError(
			res,
			"Failed to get attendees",
			500,
			err instanceof Error ? err.message : undefined
		);
	}
};
