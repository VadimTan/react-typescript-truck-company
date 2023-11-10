import nav_logo from '../../content/truck-logo-removebg-preview.png';
import { useState } from 'react';
// import BurgerMenu from '../BurgerMenu';

export const NavBar = () => {
	const [copied, setCopied] = useState(false);
	const text = 'Number copied to clipboard!';

	const handleCopy = () => {
		const textToCopy = '+1 (504) 123-553';
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				setCopied(true);
				setTimeout(() => {
					setCopied(false);
				}, 2000);
			})
			.catch((error) =>
				console.error('Error copying text to clipboard:', error)
			);
	};

	return (
		<div className="header-container">
			<div className="navbar-logo">
				<a href="/">
					<img
						src={nav_logo}
						alt=""
					/>
				</a>
			</div>
			{/* <BurgerMenu> */}
			<div className="navbar-menu">
				<a
					href="/"
					className="navbar-home-button">
					Home
				</a>
				<a
					href="/about"
					className="navbar-about-button">
					About
				</a>
				<a
					href="/services"
					className="navbar-services-button">
					Services
				</a>
				<a
					href="/contacts"
					className="navbar-contacts-button">
					Contacts
				</a>
				<a
					href="/careers"
					className="navbar-careers-button">
					Careers
				</a>
			</div>
			{/* </BurgerMenu> */}
			<div className="navbar-contact-apply">
				<span className="navbar-span-pn">
					<p
						className="navbar-pn"
						onClick={handleCopy}>
						+1 (504) 123-553
					</p>
					{<div className={`alert-msg ${copied ? 'show' : ''}`}>{text}</div>}
				</span>
				<span className="apply-button">
					<a
						href="/contacts"
						className="navbar-apply-link">
						Apply Now
					</a>
				</span>
			</div>
		</div>
	);
};
