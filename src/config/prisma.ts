import { PrismaClient } from "@prisma/client";
import { NODE_ENV } from "./env.js";

const prisma = new PrismaClient({
	log:
		NODE_ENV === "development" ? ["query", "info", "warn", "error"] : ["error"],
});

export { prisma };
