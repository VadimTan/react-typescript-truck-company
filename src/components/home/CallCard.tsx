import React from 'react';
import videoBg from '../../content/videoplayback.mp4';

export const CallCard = () => {
	return (
		<div className="movie-callcard-container">
			<video
				src={videoBg}
				autoPlay
				loop
				muted
				id="video-background"
			/>
		</div>
	);
};
