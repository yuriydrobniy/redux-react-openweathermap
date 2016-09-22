import fetch from 'isomorphic-fetch';
import { API_KEY } from '../constants/apiSettings';

import {
	FETCH_WEATHER_REQUEST,
	FETCH_WEATHER_SUCCESS,
	FETCH_WEATHER_FAILED
} from '../constants/actionTypes';

export function weatherRequest() {
	return {
		type: FETCH_WEATHER_REQUEST
	}
}
export function weatherSuccess(json) {
	return {
		type: FETCH_WEATHER_SUCCESS,
		payload: {
			json,
			receivedAt: Date.now()
		}
	}
}
export function requestWeatherFailed(error) {
	return {
		type: FETCH_WEATHER_FAILED,
		error
	};
}
export function fetchWeatherRequest(city) {
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=` + API_KEY;
	console.log(`${city}`);
	return function (dispatch) {
		dispatch(weatherRequest());
		console.log('1111' + url);
		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(weatherSuccess(json)))
			.catch(error => {
				console.log('error happened: ', error);
				dispatch(requestWeatherFailed(error.toString()))
			});
	};
}