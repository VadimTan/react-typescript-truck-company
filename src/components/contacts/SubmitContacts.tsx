export const SubmitContacts = () => {
	return (
		<div className="submit-contacts-container">
			<div className="h1-contacts-block">
				<h1 className="h1-contacts">Send Us a Message</h1>
			</div>
			<div className="contacts-input-info">
				<input placeholder="Name"></input>
				<input placeholder="Phone Number"></input>
				<input placeholder="Email"></input>
				<input placeholder="Message"></input>
			</div>
			<div className="submit-contacts-button">
				<button className="submit-button-1">Submit</button>
			</div>
		</div>
	);
};
