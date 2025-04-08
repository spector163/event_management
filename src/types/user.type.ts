import { z } from "zod";

export interface User {
	id: string;
	name: string;
	email: string;
	mobile?: string | null;
	createdAt: Date;
}

export const createUserSchema = z.object({
	body: z.object({
		name: z.string().min(1),
		email: z.string().email(),
		mobile: z.string().optional(),
	}),
});

export type CreateUserInput = z.infer<typeof createUserSchema>["body"];
