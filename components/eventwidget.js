
import Link from 'next/link';


export default function EventFeed({ events }) {
  return events ? events.map((event) => <eventItem event={event} />) : null;
}


function eventItem({ event }) {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <span className="d-block text-center text-uppercase text-warning">TestMonth</span>
                            <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>TestDay</span>
                            </div>
                            <div className="col-md-10 text-center text-md-left">
                            <h3 className="h5 mb-0">{event.Name}</h3>
                            <p className="mb-0">Meet at Test on TestDate at TestTime</p>
                            <a href="#" className="font-weight-bold">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
}

