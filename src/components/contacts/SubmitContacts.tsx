import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const SubmitContacts = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: any) => {
		const text1 = 'service_xzkt0ve';
		const text2 = 'template_cnum5gj';

		emailjs.sendForm(text1, text2, form.current!, '0SkinJueGQAAAPzeL').then(
			(result) => {
				alert(
					`Your message was sent successfully! Status code: ${result.text}`
				);
			},
			(error) => {
				alert(`Try again! Status code: ${error.text}`);
			}
		);
	};

	return (
		<div className="submit-contacts-container">
			<form
				onSubmit={sendEmail}
				ref={form}>
				<div className="h1-contacts-block">
					<h1 className="h1-contacts">Send Us a Message</h1>
				</div>
				<div className="contacts-input-info">
					<input
						type="text"
						name="user_name"
						placeholder="Name"
					/>
					<input
						type="text"
						name="user_phone-number"
						placeholder="Phone Number"
					/>
					<input
						type="text"
						name="user_email"
						placeholder="Email"
					/>
					<input
						type="text"
						name="user_message"
						placeholder="Message"
					/>
				</div>
				<div className="submit-contacts-button">
					<button
						type="submit"
						className="submit-button-1">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
