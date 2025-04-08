import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { createEventSchema } from "../types/event.type.js";
import {
	createEventHandler,
	getEventsHandler,
} from "../controllers/event.controller.js";

const router = Router();

router.post("/", authenticate, validate(createEventSchema), createEventHandler);
router.get("/", getEventsHandler);

export default router;
