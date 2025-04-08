import { User } from "@prisma/client";

export interface Attendee {
	id: string;
	eventId: string;
	userId: string;
	joinedAt: Date;
}

export interface AttendeeWithUser extends Attendee {
	user: User;
}
