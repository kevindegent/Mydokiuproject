import nodemailer from 'nodemailer';

export const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'degentkevin@gmail.com',       // 🔥 replace with your Gmail address
      pass: 'bwbetgijufragvdl',          // 🔥 your Gmail App Password (no spaces)
    },
  });

  await transporter.sendMail({
    from: 'My Dok', // 🔥 replace with your Gmail
    to,
    subject,
    html,
  });
};
