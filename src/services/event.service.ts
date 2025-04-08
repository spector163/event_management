import { prisma } from "../config/prisma.js";
import { CreateEventInput } from "../types/event.type.js";
// import { validateFutureDate } from "../utils/validation";

export const createEvent = async (input: CreateEventInput) => {
	const eventDate = new Date(input.date);
	// if (!validateFutureDate(eventDate)) {
	// 	throw new Error("Event date must be in the future");
	// }

	return prisma.event.create({
		data: {
			title: input.title,
			description: input.description,
			date: eventDate,
			createdBy: input.createdBy,
		},
		include: {
			creator: true,
		},
	});
};

export const getEvents = async (limit: number, offset: number) => {
	const [events, total] = await Promise.all([
		prisma.event.findMany({
			skip: offset,
			take: limit,
			include: {
				creator: true,
			},
			orderBy: {
				date: "asc",
			},
		}),
		prisma.event.count(),
	]);

	return { events, total };
};
