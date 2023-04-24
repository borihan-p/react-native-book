import errorHandler from 'errorhandler';
import { getApp } from './app';

(async () => {
  try {
    const app = await getApp();
    if (process.env.NODE_ENV !== 'prod') {
      app.use(errorHandler());
    }
    const port = app.get('port') || 8888;

    const server = app.listen(port, () => {
      console.log('  App is running at http://localhost:%d in %s mode', port, app.get('env'));
      console.log('  Press CTRL-C to stop\n');
    });
  } catch (e) {
    console.error(e);
  }
})();
