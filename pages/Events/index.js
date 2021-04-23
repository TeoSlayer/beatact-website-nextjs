import React from 'react'
import { NextSeo } from 'next-seo';
import { firestore, eventToJSON } from '../../libs/firebase';
import moment, { months } from 'moment';
import { EventFeed } from '../../components/eventwidget';

export async function getServerSideProps({ preview = false }) {
    const eventQuery1 = firestore.collection("Events").orderBy("StartDate", 'desc').where("StartDate",">=",moment().startOf('month').toDate()).where("StartDate","<=",moment().startOf('month').add('1','month').toDate()).limit(4)
    const eventQuery2 = firestore.collection("Events").orderBy("StartDate", 'desc').where("StartDate",">=",moment().startOf('month').add('1','month').toDate()).where("StartDate","<=",moment().startOf('month').add('2','month').toDate()).limit(4)
    const eventsThisMonth = (await eventQuery1.get()).docs.map(eventToJSON);
    const eventsNextMonth = (await eventQuery2.get()).docs.map(eventToJSON);
    return {
      props: { eventsThisMonth, eventsNextMonth, preview },
    }
  }


export default function Home({ eventsThisMonth, eventsNextMonth }) {
        
        return (
        <>
            <NextSeo
                title="Events - View the most engaging events of today and tommorow."
                description="Interested to go to an event? Download Beatact today from your preffered app store and rave on."
            />
            <div className="main-content">
                <title>Events</title>
                <meta name="description" content="View the latest events shown on Beatact. Download the app today and get a ticket."/>
                <section className="slice slice-xl bg-cover bg-size--cover" data-offset-top="#header-main" style={{backgroundImage: 'url(../../static/assets/template/assets/img/backgrounds/img-5.jpg)', width: '100%',backgroundSize: 'cover'}}>
                    <span className="mask bg-gradient-primary opacity-6" />
                    <div className="container-fluid py-6 py-lg-9">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="text-center">
                            <h4 className="text-white text-uppercase font-weight-400 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>Parties of <span className="font-weight-700">2021</span></h4>
                            <h2 className="display-1 font-weight-600 text-white text-uppercase mb-2" style={{fontFamily: '"Oswald", sans-serif'}}>Good music only</h2>
                            <div className="btn-group mt-4">
                            <button type="button" className="btn btn-dark rounded-left-pill" disabled style={{cursor: 'default'}}>
                                <span className="countdown" data-countdown-date="12/01/2019"/>
                            </button>
                            <a href="#" className="btn btn-white rounded-right-pill text-uppercase" style={{fontFamily: '"Oswald", sans-serif', lineHeight: '2.2'}}>Buy Tickets On Beatact</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="slice slice-lg bg-bg-primary bg-primary" >
                    <span className="mask bg-primary opacity-7" />
                    <div className="container">
                    <div className="row row-grid">
                        <div className="col-lg-6">
                        <div className="mb-4">
                            <h3 className="heading h3 text-white text-uppercase mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>This month</h3>
                        </div>
                        { !eventsThisMonth.length > 0 && (
                            <div className="card mb-4">
                                <div className="card-body">
                                <div className="row">
                                    <div>
                                    <span className="align-center text-center text-uppercase text-primary">Nothing here yet...</span>
                                    </div> 
                                </div>
                                </div>
                            </div>
                        )
                        }
                        
                        
                        </div>
                        
                        <div className="col-lg-6">
                        <div className="mb-4">
                            <h3 className="heading h3 text-white text-uppercase mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>{moment().add('1', 'month').startOf('month').format('MMM')}</h3>
                        </div>
                        { !eventsNextMonth.length > 0 ? (
                            <div className="card mb-4">
                                <div className="card-body">
                                <div className="row">
                                    <div>
                                    <span className="align-center text-center text-uppercase text-primary">Nothing here yet...</span>
                                    </div> 
                                </div>
                                </div>
                            </div>
                        ) : (
                            <>
                            <EventFeed events={eventsNextMonth}/>
                            </>
                        )
                        }
                        </div>
                    </div>
                    </div>
                </section>
                <section className="slice slice-xl bg-primary">
                    <span className="mask bg-primary opacity-7" />
                    <div className="container py-6">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10 text-center">
                        <h3 className="display-1 font-weight-700 text-white text-uppercase" style={{fontFamily: '"Oswald", sans-serif'}}>You are one step away</h3>
                        </div>
                        <div class="mt-5">
                                <a href="#" class="btn btn-app-store hover-translate-y-n3 mr-lg-4 mb-4">
                                    <i class="fab fa-apple"></i>
                                    <span class="btn-inner--text">Download on the</span>
                                    <span class="btn-inner--brand">App Store</span>
                                </a>
                                <a href="#" class="btn btn-app-store hover-translate-y-n3 mb-4">
                                    <i class="fab fa-google-play"></i>
                                    <span class="btn-inner--text">Download on the</span>
                                    <span class="btn-inner--brand">Play Store</span>
                                </a>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
        </>
        )
}





