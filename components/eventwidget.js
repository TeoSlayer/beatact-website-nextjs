
import Link from 'next/link';
import moment from 'moment';

export function EventFeed({ events }) {
  return events ? events.map((event) => <EventItem data={event} />) : null;
}


function EventItem({ data }) {
        
        return (
            <>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <span className="d-block text-center text-uppercase text-warning">{moment(data.StartDate).format('MMM')}</span>
                            <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>{moment(data.StartDate).format('d')}</span>
                            </div>
                            <div className="col-md-10 text-center text-md-left">
                            <h3 className="h5 mb-0">{data.Name}</h3>
                            <p className="mb-0">{data.Headline}</p>
                            <a href={"events/" + data.Id} className="font-weight-bold">View More</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
}

