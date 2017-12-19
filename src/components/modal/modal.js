import React, {Component, PropTypes} from 'react';

import classes from './modal.css';

export default class Modal extends Component {
	static displayName = 'Modal';

	static propTypes = {
		headerText: PropTypes.string.isRequired,
		children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
		buttonType: PropTypes.oneOf(['agree', 'close', 'none']),
		buttonText: PropTypes.string.isRequired,
		isActive: PropTypes.bool.isRequired,
		showHeaderIcon: PropTypes.bool.isRequired,
		onClick: PropTypes.func
	};

	static defaultProps = {
		headerText: 'Disclaimer',
		buttonType: 'agree',
		buttonText: 'OK',
		isActive: true,
		showHeaderIcon: true
	};

	buttonClick = (e) => {
		//	close disclaimer // Active=false
	};

	render() {
		let {children, headerText, buttonType, buttonText, isActive, showHeaderIcon, onClick} = this.props;

		let modal = isActive ? <div className={classes.container}>

			<div className={classes.bg}></div>

			<div className={classes.modal}>

				<div className={classes.header}>
					<div className={classes.headerText}>{headerText}
						{showHeaderIcon ? <span className={classes.headerIcon}></span> : null}
					</div>

				</div>

				<div className={classes.body}>
					{children}
				</div>

				{buttonType !== 'none' &&
				<div className={classes.buttonContainer}>
					<button onClick={onClick}>{buttonText}</button>
				</div>}

			</div>

		</div> : null;

		return <div>{modal}</div>;
	}
}
