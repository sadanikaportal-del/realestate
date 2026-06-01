import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const userPackagesTable = pgTable("user_packages", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  packageId: integer("package_id").notNull(),
  startDate: timestamp("start_date", { withTimezone: true }).notNull().defaultNow(),
  endDate: timestamp("end_date", { withTimezone: true }).notNull(),
  status: text("status").notNull().default("active"),
  listingsUsed: integer("listings_used").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertUserPackageSchema = createInsertSchema(userPackagesTable).omit({ id: true, createdAt: true });
export type InsertUserPackage = z.infer<typeof insertUserPackageSchema>;
export type UserPackage = typeof userPackagesTable.$inferSelect;
