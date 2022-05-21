import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

type Data = {
    error?: string;
    message?: string;
    session?: Session;
  }

const handler = async (  req: NextApiRequest,
    res: NextApiResponse<Data>) => {
    const session = await getSession({req})
    if (!session) {
        res.status(401).json({error: 'Unauthenticated user'})
    } else {
        res.status(200).json({message: 'Success', session})
    }
}

export default handler;