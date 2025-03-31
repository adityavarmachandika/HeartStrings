    import { timestamp } from "drizzle-orm/gel-core";
import { PgDateColumnBaseBuilder } from "drizzle-orm/pg-core/columns/date.common";
    import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

    export const poems = sqliteTable('poems', {
        poem_id: integer().primaryKey({"autoIncrement":true}),
        poem_title:text().notNull(),
        likes_count:integer().default(0),
        poem_text:text().notNull()
    });

    export const comments=sqliteTable('comments',{
        comment_id:integer().primaryKey({"autoIncrement":true}),
        user_name:text(),
        comment:text(),
        poem_id:integer().references(()=> poems.poem_id,{onDelete:"cascade"})
    })