import { matchRequestUrl, MockedRequest, DefaultBodyType } from 'msw';
import { SetupServerApi } from 'msw/lib/node';

export default <T extends DefaultBodyType>(
  server: SetupServerApi,
  method: string,
  url: string,
) => {
  let requestId = '';
  return new Promise<MockedRequest<T>>((resolve, reject) => {
    server.events.on('request:start', (req) => {
      const matchesMethod = req.method.toLowerCase() === method.toLowerCase();
      const matchesUrl = matchRequestUrl(req.url, url).matches;

      if (matchesMethod && matchesUrl) {
        requestId = req.id;
      }
    });
    server.events.on('request:match', (req) => {
      if (req.id === requestId) {
        resolve(req as MockedRequest<T>);
      }
    });
    server.events.on('request:unhandled', (req) => {
      if (req.id === requestId) {
        reject(
          new Error(`The ${req.method} ${req.url.href} request was unhandled.`),
        );
      }
    });
  });
};
