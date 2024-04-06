import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import ResponseData from "@/interfaces/ResponseData";
// import nodemailer, { SendMailOptions } from "nodemailer";
import mailjet from "node-mailjet";

export const POST = async (
  req: NextRequest,
  // res: NextApiResponse<Response>
  res: NextResponse
) => {
  const reqBody = await req.json();
  const { email, message } = reqBody;

  if (req) {
    try {
      const mailJetApi = mailjet.apiConnect(
        //@ts-ignore
        process.env.MAILJET_API_KEY,
        process.env.MAILJET_SECRET_KEY
      );

      const sendMailJet = await mailJetApi
        .post("send", { version: "v3.1" })
        .request({
          Messages: [
            {
              From: {
                Email: process.env.ARNOLIO_EMAIL,
                Name: "Arnolio",
              },
              To: [
                {
                  Email: process.env.PERSONAL_EMAIL,
                },
              ],
              Subject: `Arnolio Contact ${email}`,
              TextPart: message,
              HTMLPart: `
              <h2 style="color: #4F76F6">Contact request from email: ${email}</h2>
              <br />
              <p style="white-space: pre-wrap">${message}</p>
              `,
            },
          ],
        });
      // console.log(sendMailJet.body);
      return NextResponse.json(
        {
          response: sendMailJet.body,
          from: email,
          to: process.env.PERSONAL_EMAIL,
        },
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        {
          response: "Email failed",
        },
        { status: 404 }
      );
    }
  }
};
