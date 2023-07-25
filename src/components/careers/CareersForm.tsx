export const CareersForm = () => {
	return (
		<div className="careers-form-container">
			<div className="join-our-team-background">
				<div className="join-background">
					<div className="join-our-team-title">
						<h1 className="jot-h1">JOIN OUR TEAM</h1>
						<div className="border-bottom-jot"></div>
					</div>
				</div>
				<div className="join-our-team-apply-text">
					<div className="apply-now-summon">
						<h2 className="apply-now-h2">Apply Now!</h2>
						<p className="apply-now-p">
							If you're interested in one of our open positions, start by
							applying here and attaching your resume. You may wish to attach a
							cover letter, but it is not required. If you feel you'd be an
							exceptional fit for a position not yet open, please feel free to
							send in your application anyways. Wellington is always on the
							lookout for quality people to join our team!
						</p>
					</div>
				</div>
			</div>
			<div className="join-our-team-align">
				<div className="jot-app-form">
					<h2 className="application-form-title">Application Form</h2>
					<div className="submit-contacts-container">
						<div className="align-center-submit">
							<div className="contacts-input-info">
								<input placeholder="Name"></input>
								<input placeholder="Phone Number"></input>
								<input placeholder="Email"></input>
								<input placeholder="Message"></input>
							</div>
						</div>
						<div className="submit-contacts-button">
							<button className="submit-button-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
