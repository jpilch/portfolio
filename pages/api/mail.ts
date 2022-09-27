import type { NextApiRequest, NextApiResponse } from 'next'
import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY!;
const DOMAIN = process.env.MAILGUN_API_DOMAIN!;

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body: {
        name: string,
        email: string,
        content: string
    } = req.body;
    const messageData = {
        from: 'Jan Pilch <jan@portfolio.com>',
        to: 'pilch.jan.kontakt@gmail.com',
        subject: 'portfolio: new message',
        text: `from: ${body.name} <${body.email}>\ncontent: ${body.content}`
    };

    client.messages.create(DOMAIN, messageData)
        .then((res: any) => {
            console.log({ res });
        })
        .catch((err: any) => {
            console.error({ err });
        });
    return res.status(200).end();
}
