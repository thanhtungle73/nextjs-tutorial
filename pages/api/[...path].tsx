// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
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
  return new Promise((resolve) => {
    //convert cookies to header Authorization.
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Don't send cookies to API server.
    req.headers.cookie = '';

    // User call will be -> /api/students
    // Proxy server forward will be -> https://js-post-api.herokuapp.com/api/students
    // Url is the same, path params will be changes -> changeOrigin: true.
    // selfHandleResponse: false -> proxy will handle the response.
    // selfHandleResponse: true -> we will handle the response.
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });
    //   res.status(200).json({ name: 'Learn NextJs' })

    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
}
