import { Hono } from "hono";
import addpoem from "../controllers/addpoem";

const app = new Hono();



app.post('/add', addpoem)

export default app;