// types/express.d.ts

declare global {
	namespace Express {
		// Extend the Request interface
		interface Request {
			user?: { id: string };
		}
	}
}
