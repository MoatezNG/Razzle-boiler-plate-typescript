/* eslint-disable no-console */
import app from 'server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;
const port = process.env.PORT || 3000;
try {
  server.listen(port, () => {
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
