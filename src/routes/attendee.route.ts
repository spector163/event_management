import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
	getEventAttendeesHandler,
	joinEventHandler,
} from "../controllers/attendee.controller.js";

const router = Router();

router.post("/:eventId/join", authenticate, joinEventHandler);
router.get("/:eventId/attendees", getEventAttendeesHandler);

export default router;
