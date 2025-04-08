// import { User } from "@prisma/client";
import { CreateUserInput } from "../types/user.type.js";
import { prisma } from "../config/prisma.js";

export const createUser = async (input: CreateUserInput) => {
	return prisma.user.create({
		data: input,
	});
};

export const getUserById = async (userId: string) => {
	return prisma.user.findUnique({
		where: { id: userId },
	});
};

export const getUserByEmail = async (email: string) => {
	return prisma.user.findUnique({
		where: { email },
	});
};
