import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
	getEventAttendeesHandler,
	joinEventHandler,
} from "../controllers/attendee.controller.js";
import { eventIdParamsSchema } from "../types/event.type.js";
import { validate } from "../middlewares/validation.middleware.js";

const router = Router();

router.post(
	"/:eventId/join",
	validate(eventIdParamsSchema),
	authenticate,
	joinEventHandler
);
router.get(
	"/:eventId/attendees",
	validate(eventIdParamsSchema),
	getEventAttendeesHandler
);

export default router;
