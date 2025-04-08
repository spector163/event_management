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

export const getEventQuerySchema = z.object({
	query: z.object({
		limit: z.coerce.number().optional().default(10),
		offset: z.coerce.number().optional().default(0),
	}),
});
export const eventIdParamsSchema = z.object({
	params: z.object({
		eventId: z.string().uuid(),
	}),
});
export type eventIdParamsType = z.infer<typeof eventIdParamsSchema>["params"];
export type eventQueryParamsType = z.infer<typeof getEventQuerySchema>["query"];
export type CreateEventInput = z.infer<typeof createEventSchema>["body"] & {
	createdBy: string;
};
