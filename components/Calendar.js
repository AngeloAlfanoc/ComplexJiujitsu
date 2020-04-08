import React, { Component } from 'react'
import Calendar from 'react_google_calendar'

const calendar_configuration = {
    api_key: 'AIzaSyA1pyuKbaSwUY8GAgJ7kpP_sbEJ8f6-q1M',
    calendars: [
      {
        name: 'Angelo Alfano',
        url: 'angelo.alfano.1992@gmail.com'
      }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

export default class MyApp extends Component {
    constructor(props) {
      super(props)
        this.state = {
          events: []
        }
    }

    render = () =>
      <div>
        <Calendar
          events={this.state.events}
          config={calendar_configuration} />
      </div>
}
   