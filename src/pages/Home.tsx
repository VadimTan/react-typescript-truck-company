import '../App.css';
import { CallCard } from '../components/home/CallCard';
import { Description } from '../components/home/Description';
import { Footer } from '../components/home/Footer';
import { JoinTeam } from '../components/home/JoinTeam';
import { NavBar } from '../components/home/NavBar';
import { TruckInfo } from '../components/home/TruckInfo';
import { TruckInfoBenefit } from '../components/home/TruckInfoBenefit';

export const Home = () => {
	return (
		<>
			<NavBar />
			<CallCard />
			<TruckInfo />
			<TruckInfoBenefit />
			<Description />
			<JoinTeam />
			<Footer />
		</>
	);
};

export {};
