import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Routes } from 'react-router';
import { Contacts } from './pages/Contacts';
import { Careers } from './pages/Careers';
import { About } from './pages/About';

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/contacts"
					element={<Contacts />}
				/>
				<Route
					path="/careers"
					element={<Careers />}
				/>
			</Routes>
		</div>
	);
};

export default App;
