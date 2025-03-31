import { Hono } from "hono";
import getpoems from "../controllers/getpoems";

const app=new Hono();

app.get("/getpoem",getpoems)

export default app