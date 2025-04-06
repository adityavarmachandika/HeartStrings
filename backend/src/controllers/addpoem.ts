    import { Context } from "hono";
    import { poems } from "../schema/schema";
    import { drizzle } from "drizzle-orm/d1";

    export interface Env {
        db: D1Database;
    }
    const addpoem=async (c: Context) => {
        const env=c.env as Env
        const db=drizzle(env.db)
        const poemData = await c.req.json();
        const result = await db.insert(poems).values({
            poem_title: poemData.poem_title,
            poem_text: poemData.poem_text
        }).returning()
        return c.json(result)
    }
    export default addpoem