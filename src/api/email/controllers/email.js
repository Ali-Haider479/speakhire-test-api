import { sanitize } from '@strapi/utils';

export async function send(ctx) {
    try {
        const { to, subject, text } = ctx.request.body;

        await strapi.plugins['email'].services.email.send({
            to,
            subject,
            text,
            from: process.env.SMTP_USER,
        });

        ctx.send({ message: 'Email sent successfully!' });
    } catch (error) {
        ctx.send({ error: 'Failed to send email' }, 500);
    }
}
