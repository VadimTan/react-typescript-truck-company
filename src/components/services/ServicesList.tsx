import { useState } from 'react';
import { Modal } from '../Modal';
import servicesImg from '../../content/services-image.jpg';
import servicesImg2 from '../../content/truck-services-image.jpg';
import { SelectBar } from '../SelectBar';
import TextField from '@mui/material/TextField';

export const ServicesList = () => {
	const [modalActive, setModalActive] = useState(false);

	const handlerClick = () => {
		setModalActive(true); // show the modal
	};

	return (
		<>
			<Modal
				active={modalActive}
				setActive={setModalActive}>
				{
					<>
						<div className="modal-work-list">
							<li className="form-list-modal">
								<TextField
									required
									className="modal-textfield"
									id="outlined-required1"
									label="Name"
									placeholder="Enter your  first name..."
								/>
								<TextField
									required
									className="modal-textfield"
									id="outlined-required2"
									label="Second Name"
									placeholder="Enter your second name..."
								/>
								<TextField
									fullWidth
									required
									className="modal-textfield"
									id="outlined-required3"
									label="Email"
									placeholder="Enter your email..."
								/>
							</li>
							<SelectBar />
						</div>
						<button
							onClick={() => setModalActive(false)}
							className="modal-button-close">
							Close
						</button>
					</>
				}
			</Modal>
			<div className="services-list-container">
				<div className="services-list-info-block-1">
					<div className="services-list-info-text-1">
						<h2 className="services-info-h2">Order Tracking</h2>
						<p className="services-info-p">
							Our vehicle tracking system automates processes, maximize
							efficiency and enables visibility to make sure your freight is
							always delivered on time. The system delivers logistics updates in
							real time and significantly increases the movement of goods. This
							way we can create one of the most efficient transportation network
							in US and also integrate your supply chain from start to finish.
							<br /> <br /> We make it our mission to stay on top of your
							shipment and making sure your load gets to the destination at the
							right time.
						</p>
						<button
							className="services-request-quote"
							onClick={handlerClick}>
							Request a Quote
						</button>
					</div>
					<div className="services-list-image-1">
						<img
							src={servicesImg}
							alt=""
						/>
					</div>
				</div>
				<div className="services-list-info-block-2">
					<div className="services-list-image-2">
						<img
							src={servicesImg2}
							alt=""
						/>
					</div>
					<div className="services-list-info-text-2">
						<h2 className="services-info-h2">TL AND LTL</h2>
						<p className="services-info-p">
							Whatever your needs, ship TL (Truckload) and LTL
							(Less-than-Truckload) freight to and from any points in US.
							Whether your priority is to ship on time or save on cost, the GT
							Express trucking services will find the best solution for your
							freight. Simply tell us what kind of load you have and what’s your
							destination, and we’ll take care of the rest.
							<br /> <br /> Our Truckload (TL) services provide long-distance
							freight transportation, from point A to point B, in which all the
							goods are designated for one delivery point.
							<br /> <br />
							In addition to that, we offer the most flexible and cost-effective
							solution for Less-than-Truckload (LTL) freight. This service
							requires relatively small orders of freight from several shippers
							gathered in one common regional terminal, from where, the goods
							are moved and redistributed to other trailers until they reach
							their final destination.
						</p>
						<button
							className="services-request-quote"
							onClick={handlerClick}>
							Request a Quote
						</button>
					</div>
				</div>
				<div className="services-list-info-block-3">
					<div className="services-list-info-text-3"></div>
					<div className="services-list-image-3"></div>
				</div>
			</div>
		</>
	);
};
