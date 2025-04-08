import { Router } from "express";
import userRoutes from "./user.route.js";
import eventRoutes from "./event.route.js";
import attendeeRoutes from "./attendee.route.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/events", attendeeRoutes);

export default router;
