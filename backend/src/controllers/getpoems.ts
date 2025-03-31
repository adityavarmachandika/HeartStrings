import { drizzle } from "drizzle-orm/d1"
import { Context } from "hono"
import { poems } from "../schema/schema"

 interface Env{
    db:D1Database
}
const getpoems=async (c:Context)=>{
    const env=c.env as Env
    const db=drizzle(env.db)
    const res=  await db.select({
        title:poems.poem_title,
        text:poems.poem_text,
      }).from(poems)
    return c.json(res)
}

export default getpoems