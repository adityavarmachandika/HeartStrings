import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/schema.ts",  // Path to the schema
  out: "./drizzle/migrations",  // Directory where migration files are stored
  dialect: "sqlite",  // D1 uses SQLite
} satisfies Config;
