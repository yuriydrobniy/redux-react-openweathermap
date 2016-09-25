import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import MyAwesomeReactComponent from '../components/MaterialTest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fetchWeatherRequest } from '../actions/actions';

class App extends Component {

  componentDidMount () {
    const { dispatch, list, city } = this.props
    dispatch(fetchWeatherRequest(list.city))
  }

  render() {
    const { list } = this.props

    return <div>
      <List weather = { list.weather } city = { list.city } />
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    list: state.list,
    city: state.city
  }
}

export default connect(mapStateToProps)(App)