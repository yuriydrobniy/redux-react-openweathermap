import React, { PropTypes, Component } from 'react'

export default class List extends Component {
	render () {
		const {weather, city} = this.props;
		return <div>
			<p> Город: { city } </p>
			<p> Погода: { weather.temp } </p>
			<p> Влажность: { weather.humidity } </p>
			<p> Атмосферное давление: { weather.pressure } </p>
		</div>
	}
}

List.propTypes = {
	weather: PropTypes.string.isArray,
	city: PropTypes.string.isArray,
}