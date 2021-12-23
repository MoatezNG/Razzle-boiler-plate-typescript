/* eslint-disable no-console */
import app from 'server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const host = '0.0.0.0';
try {
  server.listen(port, host, () => {
    console.log(`> Server started on port ${port}.`);
  });
} catch (error) {
  if (error) console.log(error);
}

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
