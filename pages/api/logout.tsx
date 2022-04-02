// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

type Data = {
  message: string;
};

// Turn off body parser when forward the request from user to API server.
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' });
  }

  // Remove cookies
  const cookies = new Cookies(req, res);
  cookies.set('access_token');

  res.status(200).json({ message: 'logout successfully' });
}
