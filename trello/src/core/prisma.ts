// import { PrismaClient } from "@prisma/client";

// export const prisma = new PrismaClient();

import { PrismaClient } from "../../generated/prisma"; // шлях до згенерованого клієнта

let prisma: PrismaClient;

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient();
}

prisma = globalThis.prisma;

export { prisma };
