import { Context } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { poems } from "../schema/schema";
import { eq,sql } from "drizzle-orm";

interface Env{
  db:D1Database
}

const likepost = async (c: Context) => {
    const env = c.env as Env;
    const db = drizzle(env.db);

    try{
      const {poem_id}=await c.req.json();
      const likesCount= await db.update(poems)
      .set({ likes_count:  sql`${poems.likes_count} + 1`})
      .where(eq(poems.poem_id, poem_id))
      .returning({ likescount: poems.likes_count });
      console.log(likesCount)
      return c.json(likesCount)
    }
    catch(error){
      console.log(error)
      return c.text("error")
    }

  };

export default likepost