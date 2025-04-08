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

export const getUserParamsSchema = z.object({
	params: z.object({
		id: z.string().uuid(),
	}),
});

export type getUserParamsType = z.infer<typeof getUserParamsSchema>["params"];
export type CreateUserInput = z.infer<typeof createUserSchema>["body"];
