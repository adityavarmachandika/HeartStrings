import { Hono } from "hono";
import getpoems from "../controllers/getpoems";
import likepost from "../controllers/likepost";

const app=new Hono();

app.get("/getpoem",getpoems)
app.post("/likepost",likepost)
export default app