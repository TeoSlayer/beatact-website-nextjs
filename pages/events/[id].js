import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import { firestore, eventToJSON, organiserToJSON } from '../../libs/firebase';
import moment from 'moment';
import { useState } from 'react';

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
        const [imageIndex, setImageIndex] = useState(0)

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
        const startDate = new moment(event.StartDate);
        console.log(startDate.toDate());
        const endDate = moment(event.EndDate);
        console.log(endDate.toDate());
        console.log(event);
        


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
                
                <section className="slice bg-gradient-primary">
                </section>
                <section className="slice">
                    <div className="container">
                        <div className="row">
                        <div className="card card-stats col-lg-6" style={{borderRadius: "30px"}}>
                        <div className="card-body">
                            <h6 className="card-title text-muted mb-2">Event availability</h6>
                            <div className="row align-items-center">
                            <div className="col">
                                <div className="row align-items-center no-gutters">
                                <div className="col-auto">
                                    <span className="h5  mr-2">{100-Math.floor(event.Ticket_Available/event.Ticket_No*100%100)}%</span>
                                </div>
                                <div className="col">
                                    <div className="progress progress-xs">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: `${100}%`}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: `${Math.floor(event.Ticket_Available/event.Ticket_No*100%100)}%`}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                    
                                    </div>
                                   
                                </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="icon text-dark icon-sm">
                                    <i className="fas fa-ticket-alt"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        

                        </div>
                        <div class="card card-stats col-lg-6 bg-success" style={{borderRadius: "30px"}}>
                                <div class="card-body">
                                   
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <span class="d-block h5  mr-2 mb-1 text-white">RON {event.Price}</span>
                                            <span class="text-white">Price per 1 Ticket</span>
                                        </div>
                                        <div className="col-6">
                                        <a href="#" className="btn btn-app-store" style={{borderRadius: "30px"}}>
                                            <img src="../../img/svg/shapes/logo.png" width="25%"/>
                                            <span className="btn-inner--text">Open in</span>
                                            <span className="btn-inner--brand">Beatact</span>
                                        </a>
                                        </div>
                                            
                                    </div>
                                </div>
                        </div>
                        </div>
                    <div className="row row-grid">
                        
                        <div className="col-lg-6">
                        <div className="pl-lg-5">
                            {/* Product title */}
                            <h1>{event.Name}</h1>
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
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Venue</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{event.Venue}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Address</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{event.Location[5]}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Start Date</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{startDate.format('MMM d, YYYY - HH:mm')}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">End Date</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{endDate.format('MMM d, YYYY - HH:mm')}</span></dd>
                            <dt className="col-sm-3"><span className="h6 text-sm mb-0">Duration</span></dt>
                            <dd className="col-sm-9"><span className="text-sm">{moment(endDate).diff(startDate,'h')} H</span><span className="badge badge-pill badge-soft-primary">{}</span></dd>
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
                            <div className="card" style={{borderRadius: "30px" }} >
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
                                           
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div data-toggle="sticky" data-sticky-offset={30}>
                            
                        <h4>Gallery</h4>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" style={{borderRadius: '30px!important' }}>
                           
                                {event.Images.map((image, index) => 
                                     <>
                                     { index == imageIndex && (
                                         <div className='carousel-item active'>
                                         <img src={image} className="img-fluid" style={{preserveAspectRatio:"xMidYMid slice"  }}  aria-label={index}/>
                                        </div>
                                     )
                                     }
                                    
                                    </>
                                )}
                                {event.Images.map((image, index) => 
                                     <>
                                     { index != imageIndex && (
                                         <div className='carousel-item'>
                                         <img src={image} className="img-fluid" style={{preserveAspectRatio:"xMidYMid slice"  }}  aria-label={index}/>
                                        </div>
                                     )
                                     }
                                    
                                    </>
                                )}
                            
                        </div>
                        <a className="carousel-control-prev" onClick={ () => {
                            if(imageIndex != 0){
                                setImageIndex(imageIndex - 1);
                            }
                        }}>
                            <span className="carousel-control-prev-icon" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" onClick={ () => {
                                if(imageIndex != (event.Images.length-1)){
                                    setImageIndex(imageIndex + 1);
                                }
                        }}>
                            <span className="carousel-control-next-icon" />
                            <span className="sr-only ">Next</span>
                        </a>
                        </div>
                        
                        <div style={{paddingTop: "20px"}}>
                        <h4>Map</h4>
                        <iframe width="100%" height="450" style={{borderRadius: "30px" }} loading="lazy" src={`https://www.google.com/maps/embed/v1/place?q=${event.Location[6]}%2C${event.Location[7]}&key=AIzaSyBHpXuR_GXbuFMDtesVkrxP4vOezsl4TqE`}></iframe>
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


