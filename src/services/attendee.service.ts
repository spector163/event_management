import { prisma } from "../config/prisma.js";

export const joinEvent = async (eventId: string, userId: string) => {
	return prisma.$transaction(async (tx) => {
		const existingAttendee = await tx.attendee.findFirst({
			where: {
				eventId,
				userId,
			},
		});
		if (existingAttendee) {
			throw new Error("User is already attending this event");
		}

		return tx.attendee.create({
			data: {
				eventId,
				userId,
			},
			include: {
				user: true,
			},
		});
	});
};

export const getEventAttendees = async (eventId: string) => {
	return prisma.attendee.findMany({
		where: { eventId },
		include: { user: true },
		orderBy: {
			joinedAt: "asc",
		},
	});
};
