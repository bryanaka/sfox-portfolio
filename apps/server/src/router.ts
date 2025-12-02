import { Router } from 'hyper-express';
import { createV1Router } from './routes/actions/v1/router';


export function createAppRouter() {
  const router = new Router();
  const v1Router = createV1Router();
  
  // routes go here
  router.get('/hello', async (req, res) => {
    res.json({ world: true })
  })

  router.use('/v1', v1Router);

  return router;
}
