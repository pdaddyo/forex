import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {hideAlert} from '../../redux/modules/alert';

import classes from './layout.css';
import Modal from '../../components/modal/modal';

class CoreLayout extends Component {
	static propTypes = {
		children: PropTypes.element,
		hideAlert: PropTypes.func,
		alert: PropTypes.object
	};

	static contextTypes = {
		router: PropTypes.object
	};

	componentDidMount() {
		// if this mounts, the app is starting for the first time
		//	this.startup();
	}

	startup() {
		//	this.props.initialLogin();
	}

	handleAlertClickOk = (evt) => {
		const {hideAlert} = this.props;
		hideAlert();
	};

	render() {
		const {children, alert} = this.props;
		return (
			<div className={classes.outerContainer}>
				<div className={classes.container}>
					{children}

					{alert.visible && <Modal isActive={alert.visible}
											 headerText={alert.header}
											 onClick={this.handleAlertClickOk}>{alert.content}</Modal>}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	alert: state.alert
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	hideAlert: () => {
		dispatch(hideAlert());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
