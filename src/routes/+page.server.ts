import type { Action } from '@sveltejs/kit';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const actions: Record<string, Action> = {
	message: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;

		if (!name || !email || !message) {
			return { status: 400, body: 'Missing required fields' };
		}

		try {
			await sgMail.send({
				to: process.env.RECEIVER_EMAIL!,
				from: process.env.SENDER_EMAIL!,
				replyTo: email,
				subject: `New Message from ${name}`,
				text: `${name} (${email}) sent the following message from the contact form:\n\n${message}`
			});
			return { success: true };
		} catch (err) {
			console.error(err);
		}
	}
};
