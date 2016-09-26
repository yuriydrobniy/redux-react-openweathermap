import React, { PropTypes, Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class List extends Component {
	render () {
		const {weather, city} = this.props;
		return <div>
			<Card
				className="weather-card"
			>
				<CardHeader
					title={ city }
					subtitle="Погода в городе"
				/>
				<CardText>
					<p> Город: { city } </p>
					<p> Погода: { weather.temp } </p>
					<p> Влажность: { weather.humidity } </p>
					<p> Атмосферное давление: { weather.pressure } </p>
				</CardText>
				<CardActions>
					<FlatButton label="Закрыть" />
				</CardActions>
			</Card>
		</div>
	}
}

List.propTypes = {
	weather: PropTypes.string.isArray,
	city: PropTypes.string.isArray,
}