export const OurContacts = () => {
	return (
		<div className="our-contacts-container">
			<div className="contacts-phone-number">
				<h2 className="contacts-h2">Phone Number</h2>
				<span className="phone-number-company-span">
					General Inquiries (504) 900 1501
				</span>
			</div>
			<div className="contacts-email">
				<h2 className="contacts-h2">Email</h2>
				<span className="email-company-span">dispatch@moget.us</span>
				<span className="email-company-span">safety@moget.us</span>
			</div>
			<div className="our-work-time-container">
				<div className="work-time">
					<h2 className="contacts-h2">Business Hours</h2>
					<span className="work-time-company-span">
						Monday — Friday 8am – 5pm
					</span>
					<span className="work-time-company-span">Saturday — 8am – 1pm</span>
					<span className="work-time-company-span">Sunday — on shift</span>
				</div>
				<div className="border-bottom-our-contacts"></div>
			</div>
		</div>
	);
};
