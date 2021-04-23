import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import { firestore, eventToJSON, organiserToJSON } from '../../libs/firebase';
import moment from 'moment';
export async function getStaticProps({ params, preview = false }) {
    const eventRef = firestore.collection("Events").doc(params.id)
    const event = eventToJSON((await eventRef.get()))
    const organiser = organiserToJSON(await firestore.collection("Organisers").doc(event.OrganiserId).get())
    
    console.log(organiser)
    try{
        return {
      props: {
        preview,
        event: event,
        organiser: organiser
      },
      revalidate: 1000,
      };
    }
    catch(err){
        throw(err)
    }
    
}
  
export async function getStaticPaths() {
    const eventsRef = firestore.collection("Events")
    const events = (await eventsRef.get()).docs.map(eventToJSON);
    return {
      paths: events.map((event) => ({
        params: {id: event.Id},
      })),
      fallback: true,
    }
}

export default function Home(props) {
        const router = useRouter();

        if(router.isFallback){
                return (
                        <>
                                <div className="main-content">
                                        <section className="slice slice-lg bg-gradient-primary">
                                        <div className="container pt-6">
                                                <div className="row justify-content-center">
                                                <div className="spinner-grow text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                                </div>  
                                                </div>
                                        </div>
                                        </section>
                                </div>  
                        </>
                )
        }

        const event = props.event;
        const organiser = props.organiser;

        return (
            <>
             <NextSeo
                title={event.Name}
                description={event.Headline}
                additionalMetaTags={[{
                    property: 'keywords',
                    content: event.Genre,
                  }, {
                    name: 'application-name',
                    content: 'Beatact'
                  }, {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                  }]}
                openGraph={{
                    title: event.Name,
                    description: event.Headline + " " + "Buy a ticket for " + event.Name + " on Beatact",
                    url: 'https://www.beatact.net/Events/' + event.Id,
                    type: 'Event',
                    article: {
                      tags: event.Genre,
                    },
                    images: [
                      {
                        url: event.Images[0],
                        width: 850,
                        height: 650,
                        alt: 'Event Image',
                      },
                    ],
                  }}
                
            />
            <div className="main-content">
                
                <section className="slice slice-lg bg-gradient-primary">
                    <div className="slice">
                        <div className="container">
                        
                        </div>
                    </div>
                </section>
                <section className="slice">
                    <div className="container">
                    <div className="row row-grid">
                        <div className="col-lg-6">
                        <div data-toggle="sticky" data-sticky-offset={30}>
                            
                     
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                           
                                {event.Images.map((image) => 
                                     <>
                                    <div className="carousel-item active">
                                        <img src={image} className="img-fluid" style={{borderRadius: '50px!important', width:"800px", height:"400px" , preserveAspectRatio:"xMidYMid slice"  }}  aria-label={image}/>
                                    </div>
                                    </>
                                )}
                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only ">Next</span>
                        </a>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="pl-lg-5">
                            {/* Product title */}
                            <h5 className="h4">{event.Name}</h5>
                            <h6 className="text-sm">{event.Headline}</h6>
                            {/* Rating */}
                            <div className="row align-items-center">
                            </div>
                            {/* Description */}
                            <div className="py-4 my-4 border-top border-bottom">
                            <h6 className="text-sm">Description:</h6>
                            <p className="text-sm mb-0">
                                {event.Description}
                            </p>
                            </div>
                            <dl className="row">
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Location</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{event.Venue}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Start Date</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{moment(event.StarDate).format('MMM d, YYYY - HH:mm')}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">End Date</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{moment(event.EndDate).format('MMM d, YYYY - HH:mm')}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Duration</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{moment(event.EndDate).diff(event.StarDate,'h',false)}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Genre</span></dt>
                            <dd className="col-sm-9"><span className="badge badge-pill badge-soft-primary">{event.Genre}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Event Type</span></dt>
                            <dd className="col-sm-9"><span className="badge badge-pill badge-soft-primary">{event.Type}</span></dd>
                            </dl>
                            {/* Size */}
                            <div className=" py-4 my-4 border-top">
                            {/* Processor */}
                            <h6>
                                <i className="fas fa-user-n mr-2 mb-4" />Artists
                            </h6>
                            {/* Skil badges */}
                            <div>
                                <>
                                     {event.Artists.map((artist) => <a href="#" className="badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2">{artist}</a>)}
                                </>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                <img alt="Image placeholder" src={organiser.ImageLink} className="avatar  rounded-circle avatar-lg" />
                                <h5 className=" mt-4 mb-0">{organiser.Name}</h5>
                                <a>
                                     <span className="d-block text-muted">@{organiser.Type} Organiser</span>
                                </a>
                                <p className="mt-4 lh-180">{organiser.Description}</p>
                                <button type="button" className="btn btn-outline-primary" onClick={() => {window.open(organiser.Link)}}>
                                Organiser's website
                                 </button>
                                </div>
                            </div>
                            </div>
                                           
                            <div className=" py-4 my-4 border-top border-bottom">
                            {/* Processor */}
                            <div className="row align-items-center">
                                <div className="col-sm-6 mb-4 mb-sm-0">
                                <span className="d-block h3 mb-0">RON {event.Price}</span>
                                </div>
                                <div className="col-sm-6 mb-4 mb-sm-0">
                                <a href="#">
                                    <span className="d-block h4 mb-0 text-primary">Buy now on Beatact!</span>
                                </a>  
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <div id="call-to-action-call-to-action-1" title="call-to-action/call-to-action-1.html">
                <section className="slice slice-lg bg-gradient-primary" data-spotlight style={{paddingTop: 100, paddingBottom: 150}}>
                    <span className="mask bg-gradient-primary opacity-5" />
                    <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 text-center">
                        <h3 className="h1 text-white">Wanna' go?</h3>
                        <p className="lead text-white">Download Beatact today, skip the queue!</p>
                        <div className="mt-5">
                                <a href="#" className="btn btn-app-store hover-translate-y-n3 mr-lg-4 mb-4">
                                    <i className="fab fa-apple"></i>
                                    <span className="btn-inner--text">Download on the</span>
                                    <span className="btn-inner--brand">App Store</span>
                                </a>
                                <a href="#" className="btn btn-app-store hover-translate-y-n3 mb-4">
                                    <i className="fab fa-google-play"></i>
                                    <span className="btn-inner--text">Download on the</span>
                                    <span className="btn-inner--brand">Play Store</span>
                                </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
            </div>

            </>
        )
}


