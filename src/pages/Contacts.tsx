import { OurContacts } from '../components/contacts/OurContacts';
import { SubmitContacts } from '../components/contacts/SubmitContacts';
import { Footer } from '../components/home/Footer';
import { NavBar } from '../components/home/NavBar';

export const Contacts = () => {
	return (
		<>
			<NavBar />
			<div className="contacts-global-container">
				<OurContacts />
				<SubmitContacts />
			</div>
			<Footer />
		</>
	);
};
