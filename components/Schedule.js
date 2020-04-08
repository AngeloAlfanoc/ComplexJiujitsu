import React, { Component } from 'react'
import Calendar from './Calendar'

export class Schedule extends Component {
    render() {
        return (
            <section>
                <div className="schedule d-flex justify-content-center align-items-center">
                    <h2 className="text-white">Schedule</h2>
                </div>
                <div className="container">
                <Calendar/>
                </div>

            </section>
        )
    }
}
export default Schedule
