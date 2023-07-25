import '../App.css';
import { NavBar } from '../components/home/NavBar';
import { Footer } from '../components/home/Footer';
import { ServicesInfo } from '../components/services/ServicesInfo';
import { ServicesList } from '../components/services/ServicesList';

export const Services = () => {
	return (
		<>
			<NavBar />
			<ServicesInfo />
			<ServicesList />
			<Footer />
		</>
	);
};

export {};
