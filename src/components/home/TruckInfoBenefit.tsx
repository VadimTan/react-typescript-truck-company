import React from 'react';
import truckAlbum from '../../content/moget-truck-images.jpg';
import { Fade, Slide } from 'react-awesome-reveal';

export const TruckInfoBenefit = () => {
	return (
		<div className="truck-info-benefit-container">
			<div className="truck-info-benefit-album">
				<Slide
					triggerOnce
					duration={1500}>
					<img
						src={truckAlbum}
						alt=""
					/>
				</Slide>
			</div>
			<Fade
				triggerOnce
				delay={1e1}
				cascade
				damping={1e-1}
				duration={2000}>
				<div className="truck-info-benefit-description">
					<p className="truck-info-benefit-text">
						We know transportation since 2012. We have the knowledge,
						technology, personnel and equipment needed to move your business
						forward.
					</p>
					<h4 className="truck-info-benefit-h4">Our Benefits</h4>
					<ul className="truck-info-benefit-list">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-check"
								viewBox="0 2 16 8">
								<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
							</svg>
							Nationwide, by Truck
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-check"
								viewBox="0 2 16 8">
								<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
							</svg>
							Liability Insurance $1Million
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-check"
								viewBox="0 2 16 8">
								<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
							</svg>
							Cargo Insurance $250K
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-check"
								viewBox="0 2 16 8">
								<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
							</svg>
							Solo & Team Drivers
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-check"
								viewBox="0 2 16 8">
								<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
							</svg>
							TWIC Driver Holders
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-check"
								viewBox="0 2 16 8">
								<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
							</svg>
							GPS Tracking
						</li>
					</ul>
				</div>
			</Fade>
		</div>
	);
};
