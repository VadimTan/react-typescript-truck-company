import { CareersForm } from '../components/careers/CareersForm';
import { JoinOurGroup } from '../components/careers/JoinOurGroup';
import { Footer } from '../components/home/Footer';
import { NavBar } from '../components/home/NavBar';

export const Careers = () => {
	return (
		<>
			<NavBar />
			<JoinOurGroup />
			<CareersForm />
			<Footer />
		</>
	);
};
