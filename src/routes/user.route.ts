import { Router } from "express";
import { validate } from "../middlewares/validation.middleware.js";
import { createUserSchema, getUserParamsSchema } from "../types/user.type.js";
import {
	createUserHandler,
	getUserByIdHandler,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/", validate(createUserSchema), createUserHandler);
router.get("/:id", validate(getUserParamsSchema), getUserByIdHandler);

export default router;
