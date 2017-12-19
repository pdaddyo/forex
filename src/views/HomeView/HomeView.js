/* @flow */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './homeView.css';

class HomeView extends Component {
	static propTypes = {};

	render() {
		return (
			<div className={classes.container}>
				HEMLIBRA
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
