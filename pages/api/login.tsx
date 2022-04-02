// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

// type Data = {
//   name: string
// }

// Turn off body parser when forward the request from user to API server.
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ name: 'method not supported' });
  }

  return new Promise((resolve) => {
    // Don't send cookies to API server.
    req.headers.cookie = '';

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';

      proxyRes.on('data', function (chunk) {
        body += chunk;
      });

      proxyRes.on('end', function () {
        // Cath the error when the api call failed with try catch.
        try {
          const { accessToken, expiredAt } = JSON.parse(body);
          console.log({ accessToken, expiredAt });

          // Convert token to cookies.
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });

          // res.end({ message: 'success' }); -> error and fix by below:
          (res as NextApiResponse).status(200).json({ message: 'Login Successfully' });
        } catch (error) {
          (res as NextApiResponse).status(500).json({ message: 'Something went wrong' });
        }

        // Complete handle request.
        resolve(true);
      });
    };

    proxy.once('proxyRes', handleLoginResponse);
    // selfHandleResponse: true -> we will handle the response.
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
