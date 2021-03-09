import React from 'react'
import Layout from '../../components/layout'


export default function Home({ events }) {
        return (
            <Layout>
            <div className="main-content">
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
                                <span className="countdown" data-countdown-date="12/01/2019" data-countdown-label="hide" />
                            </button>
                            <a href="#" className="btn btn-white rounded-right-pill text-uppercase" style={{fontFamily: '"Oswald", sans-serif', lineHeight: '2.2'}}>Buy Tickets On Beatact</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="slice slice-lg bg-bg-primary bg-cover bg-size--cover" style={{backgroundImage: 'url(../../static/assets/template/assets/img/backgrounds/img-6.jpg)'}}>
                    <span className="mask bg-primary opacity-7" />
                    <div className="container">
                    <div className="row row-grid">
                        <div className="col-lg-6">
                        <div className="mb-4">
                            <h3 className="heading h3 text-white text-uppercase mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>This month</h3>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">June</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>20</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#" className="font-weight-bold">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">June</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>22</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">June</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>25</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">June</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>27</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="mb-4">
                            <h3 className="heading h3 text-white text-uppercase mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>July</h3>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">July</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>03</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">July</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>05</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">July</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>13</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                <span className="d-block text-center text-uppercase text-warning">July</span>
                                <span className="d-block text-center h1 mb-0" style={{fontFamily: '"Oswald", sans-serif'}}>15</span>
                                </div>
                                <div className="col-md-10 text-center text-md-left">
                                <h3 className="h5 mb-0">Isle of Wight Festival</h3>
                                <p className="mb-0">Meet at United Kingdom on June 20th at 20:00</p>
                                <a href="#">View More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="slice slice-xl bg-primary bg-cover bg-size--cover" style={{backgroundImage: 'url("../../static/assets/template/assets/img/backgrounds/img-6.jpg")'}}>
                    <span className="mask bg-primary opacity-7" />
                    <div className="container py-6">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10 text-center">
                        <h3 className="display-1 font-weight-700 text-white text-uppercase" style={{fontFamily: '"Oswald", sans-serif'}}>You are one step away</h3>
                        </div>
                    </div>
                    </div>
                </section>
                </div>

            </Layout>
        )
}



