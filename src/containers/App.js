import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import { fetchWeatherRequest } from '../actions/actions'

class App extends Component {

  componentDidMount () {
    const { dispatch, list, city } = this.props
    dispatch(fetchWeatherRequest(list.city))
  }

  render() {
    const { list } = this.props

    return <div>
      <List weather = { list.weather } city = { list.city } />
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