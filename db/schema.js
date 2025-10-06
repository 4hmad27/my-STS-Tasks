import {pgTable,serial, varchar, text, integer } from "drizzle-orm/pg-core"
// import { password } from "pg/lib/defaults"

export const users = pgTable('users', {
 id: serial('id').primaryKey(),
 username: varchar('username', { length: 256}).notNull().unique(),
 password: varchar('password', {length: 256}).notNull()
});

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    note: text('note').notNull(),
    usersid: integer('user_id').references(() => users.id).notNull()
})