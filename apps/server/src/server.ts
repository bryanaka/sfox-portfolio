import { Server } from 'hyper-express'
import { createAppRouter } from './router';

export function createAppServer(): Server {
  const server = new Server();
  const router = createAppRouter();
  
  // Add middlewares here
  server.use(router)

  return server;
}