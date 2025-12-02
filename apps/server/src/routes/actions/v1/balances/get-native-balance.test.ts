import { expect, describe, it, beforeAll, afterAll } from 'vitest'
import { createAppServer } from '../../../../server';
import type { Server } from 'hyper-express';

let app: Server;

beforeAll(async () => {
  app = createAppServer()
  try {
    await app.listen(3000)
    console.log('Webserver started on port 3000');
  } catch(err) {
    console.error('Failed to start webserver on port 3000', err);
  }
});

afterAll(() => {
  app.close();
});

describe('GET /v1/balance', () => {
  it('returns balance', async() => {
    const res = await fetch('http://localhost:3000/v1/balance');
    expect(res.status).toBe(200);
  })
})