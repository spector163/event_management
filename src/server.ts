import dotenv from "dotenv";
import { app } from "./app.js";
import { type Express } from "express";
import { PORT } from "./config/env.js";
import { prisma } from "./config/prisma.js";

async function startServer(app: Express) {
	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
}

const events = ["SIGINT", "SIGTERM"];

events.forEach((event) => {
	process.on(event, async () => {
		await prisma.$disconnect();
	});
});

startServer(app);
