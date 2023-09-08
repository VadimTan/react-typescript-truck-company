import React, { FC, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BurgerMenu: FC<Props> = ({ children }) => {
	return (
		<div className="burger-menu">
			<div className="burger-btn">
				<span />
			</div>
			<div className="burger-content">{children}</div>
		</div>
	);
};

export default BurgerMenu;
