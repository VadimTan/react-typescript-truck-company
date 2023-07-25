import joinTeam from '../../content/join-team-image.jpg';
import { Fade, Flip, Slide } from 'react-awesome-reveal';

export const JoinTeam = () => {
	return (
		<div className="join-our-team-container">
			<Slide triggerOnce>
				<h1 className="join-our-team-h1">Join Our Team</h1>
			</Slide>
			<div className="join-our-team-info">
				<div className="join-our-team-img">
					<img
						src={joinTeam}
						alt=""
					/>
				</div>
				<div className="join-our-team-career">
					<Fade
						triggerOnce
						delay={1e1}
						cascade
						damping={1e-1}
						duration={2000}>
						<h4 className="join-our-team-h4">
							Take the next step in your career by joining our dedicated and
							rapidly growing team of transportation experts. We have various
							open positions and we’re always looking for the best of the best.
						</h4>
						<ul className="join-our-team-list">
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
								Competitive wages & bonuses
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
								Weekly payment
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
								Driver onboarding program
							</li>
						</ul>
					</Fade>
					<div className="join-our-team-button-block">
						<a href="/contacts">
							<Flip
								triggerOnce
								duration={800}>
								<button className="join-our-team-button">Find a Career</button>
							</Flip>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
