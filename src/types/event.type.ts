import { z } from "zod";
import { User } from "./user.type.js";

export interface Event {
	id: string;
	title: string;
	description?: string | null;
	date: Date;
	createdBy: string;
	createdAt: Date;
}

export interface EventWithCreator extends Event {
	creator: User;
}

export const createEventSchema = z.object({
	body: z.object({
		title: z.string().min(1),
		description: z.string().optional(),
		date: z
			.string()
			.datetime()
			.refine((arg) => new Date(arg) > new Date(), {
				message: "Date should be in future",
				path: ["date"],
			}),
	}),
});

export type CreateEventInput = z.infer<typeof createEventSchema>["body"] & {
	createdBy: string;
};
