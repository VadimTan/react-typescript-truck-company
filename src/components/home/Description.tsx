import React from 'react';
import descr_img from '../../content/trucks_description.jpg';
import descr_img1 from '../../content/truck_order.jpg';
import descr_img2 from '../../content/Red_truck_USA.jpg';

export const Description = () => {
	return (
		<div className="description-block-container">
			<div className="description-child-one">
				<div className="div-info-one">
					<div className="div-info-image-one">
						<img
							src={descr_img}
							alt=""
						/>
					</div>
					<div className="div-info-all-one">
						<h2 className="div-info-one-h2">Logistics</h2>
						<p className="div-info-one-text">
							At GT Express we handle the complex logistics so you will never
							have to worry about the storage, handling and transport of goods.
						</p>
					</div>
				</div>
			</div>
			<div className="description-child-second">
				<div className="div-info-second">
					<div className="div-info-image-second">
						<img
							src={descr_img1}
							alt=""
						/>
					</div>
					<div className="div-info-all-second">
						<h2 className="div-info-second-h2">Order Tracking</h2>
						<p className="div-info-second-text">
							Our vehicle tracking system automates processes, maximize
							efficiency and enables visibility to make sure your freight is
							always delivered on time.
						</p>
					</div>
				</div>
			</div>
			<div className="description-child-third">
				<div className="div-info-third">
					<div className="div-info-image-third">
						<img
							src={descr_img2}
							alt=""
						/>
					</div>
					<div className="div-info-all-third">
						<h2 className="div-info-third-h2">TL and LTL</h2>
						<p className="div-info-third-text">
							Whatever your needs, big or small, we ship it all! Ship TL
							(truckload) and LTL (less-than truckload) freight to and from any
							points in US.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
