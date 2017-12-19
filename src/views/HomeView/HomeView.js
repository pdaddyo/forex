/* @flow */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './homeView.css';

const currencies = [
	{name: 'GBP', startCount: 8},
	{name: 'EUR', startCount: 8},
	{name: 'USD', startCount: 8},
	{name: 'CHF', startCount: 8}
];

const CurrencyPanel = ({currency, onClickBuy, onClickSell}) => (
	<div>
		{currency.name} bank: {currency.bankCount} / players: {currency.playerCount}
		<button onClick={onClickBuy}>Buy</button>
		<button onClick={onClickSell}>Sell</button>
	</div>
);

// burn some start values
const howManyToBurn = 6;
for (let burnIndex = 0; burnIndex < howManyToBurn; burnIndex++) {
	const currencyIndex = Math.floor(Math.random() * currencies.length);
	currencies[currencyIndex].startCount--;
}

class HomeView extends Component {
	state = {
		currencies: currencies.map(currency => ({
			...currency,
			bankCount: currency.startCount,
			playerCount: 0
		}))
	};

	updateCurrency(currencyName, changeAmount) {
		this.setState({
			...this.state,
			currencies: this.state.currencies.map(currency => {
				if (currency.name === currencyName) {
					return {
						...currency,
						bankCount: currency.bankCount + changeAmount,
						playerCount: currency.playerCount - changeAmount
					};
				}
				return currency;
			})
		});
	}

	render() {
		const {currencies} = this.state;

		return (
			<div className={classes.container}>
				{currencies.map(currency => (
					<CurrencyPanel currency={currency}
								   onClickBuy={() => {
									   this.updateCurrency(currency.name, 1);
								   }}
								   onClickSell={() => {
									   this.updateCurrency(currency.name, -1);
								   }}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
