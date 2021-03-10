import React from 'react'

export default function eventwidget({ event }) {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <span className="d-block text-center text-uppercase text-warning">{event.month}</span>
                            <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>{event.day}</span>
                            </div>
                            <div className="col-md-10 text-center text-md-left">
                            <h3 className="h5 mb-0">{event.name}</h3>
                            <p className="mb-0">Meet at {event.city} on {event.date} at {event.time}</p>
                            <a href="#" className="font-weight-bold">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
}
