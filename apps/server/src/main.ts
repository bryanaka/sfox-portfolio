import { createAppServer } from "./server";

async function main() {
  const appServer = createAppServer();
  try {
    await appServer.listen(3000)
    console.log('Webserver started on port 3000');
  } catch(err) {
    console.error('Failed to start webserver on port 3000', err);
  }
}

main();