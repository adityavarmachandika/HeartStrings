import { Hono } from 'hono'
import admin from './routes/admin'
import user from './routes/user'
import { cors } from 'hono/cors'
const app = new Hono()
app.use('/*',cors())
app.get('/', (c) => {
  console.log(c.set)
  return c.text('Hello aditya!')

})

app.route('/api/admin',admin)
app.route('/api/user', user)
export default app
