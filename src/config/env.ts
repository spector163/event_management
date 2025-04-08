import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();
const envSchema = z.object({
	DATABASE_URL: z.string().url(),
	PORT: z.coerce.number().default(5000),
	NODE_ENV: z
		.enum(["production", "development", "test"])
		.default("development"),
});

const env = envSchema.safeParse(process.env);
if (!env.success) {
	console.error("Invalid environment variables:", env.error.format());
	process.exit(1);
}

export const { DATABASE_URL, PORT, NODE_ENV } = env.data;

console.log({ DATABASE_URL });
