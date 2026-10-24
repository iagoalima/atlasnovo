import "dotenv/config";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client.js";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL não foi definida. Configure, por exemplo, file:./prisma/atlas.db para SQLite.",
  );
}

if (!databaseUrl.startsWith("file:")) {
  throw new Error(
    "DATABASE_URL inválida: o Atlas está configurado para SQLite e espera uma URL iniciada por file:.",
  );
}

const adapter = new PrismaBetterSqlite3({
  url: databaseUrl,
});

export const prisma = new PrismaClient({
  adapter,
});