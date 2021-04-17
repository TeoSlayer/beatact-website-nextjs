import React from 'react'
import Link from 'next/link'

export default function Home() {
        return (
                <div className="main-content">
                <title>Features</title>
                <meta name="description" content="View all the features of Beatact."/>
                <section className="slice slice-xl bg-gradient-primary" style={{paddingBottom: 150}}>
                    <div className="bg-absolute-cover bg-size--contain d-flex align-items-center">
                    </div>
                    <div className="container py-5 position-relative zindex-100">
                    <div className="row row-grid justify-content-around align-items-center">
                        <div className="col-lg-5">
                        <div className="text-center text-lg-left">
                            <h1 className="text-white mt-4 mb-3">Unleash your creativity</h1>
                            <p className="lead lh-180 text-white">Big or small, funky or chill you can turn your Party Idea into a Party Reality.</p>
                            <div className="mt-6">
                            <Link href="" className="btn btn-white btn-icon rounded-pill hover-translate-y-n3">
                                    <button className="btn btn-white btn-icon rounded-pill hover-translate-y-n3 btn-inner--text">Sign Up as a Beatact Organiser</button>
                             </Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                        <div className="card bg-section-secondary mt-7 mb-0 py-5 px-4 shadow-lg perspective-right hover-scale-110">
                            <div className="card-body">
                            <h2 className="heading h2">
                                Organise your events, just like we're in <strong>2021</strong>.
                            </h2>
                            <p className="lead lh-180 mt-4">Tired of all the bureaucracy? Tired of all the complicated procedures? Tired of all the hidden fees when organising an event? Bring 2021 into your ticketing experience with Beatact!</p>
                            <ul className="list-unstyled mt-4">
                                <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                    <div className="icon icon-shape icon-primary icon-sm rounded-circle mr-3">
                                        <i className="fas fa-store-alt" />
                                    </div>
                                    </div>
                                    <div>
                                    <span className="h6 mb-0">Built for everyone</span>
                                    </div>
                                </div>
                                </li>
                                <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                    <div className="icon icon-shape icon-warning icon-sm rounded-circle mr-3">
                                        <i className="fas fa-palette" />
                                    </div>
                                    </div>
                                    <div>
                                    <span className="h6 mb-0">Built with ease-of-use at its core</span>
                                    </div>
                                </div>
                                </li>
                                <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                    <div className="icon icon-shape icon-success icon-sm rounded-circle mr-3">
                                        <i className="fas fa-cog" />
                                    </div>
                                    </div>
                                    <div>
                                    <span className="h6 mb-0">Awesome tools for you and your customers</span>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* SVG shape */}
                </section>
                {/* Features (v20) */}
                <section className="slice slice-lg">
                    <div className="container">
                    <div className="row row-grid">
                        <div className="col-lg-4">
                        <div className="text-center">
                            <div className="px-4 py-5">
                            <a href="#">
                                <img alt="Image placeholder" src="../static/assets/template/assets/img/svg/illustrations/financial-data.svg" className="img-fluid" style={{height: 190}} />
                            </a>
                            </div>
                            <div className="px-4 pb-4">
                            <h5>
                                <a href="#">Easy to use</a>
                            </h5>
                            <p className="text-muted">All the tools and functions you would ever need in the process of planning an Event.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="text-center">
                            <div className="px-4 py-5">
                            <a href="#">
                                <img alt="Image placeholder" src="../static/assets/template/assets/img/svg/illustrations/following.svg" className="img-fluid" style={{height: 190}} />
                            </a>
                            </div>
                            <div className="px-4 pb-4">
                            <h5>
                                <a href="#">Intuitive Anlaytics</a>
                            </h5>
                            <p className="text-muted">View statistics at a touch of a button. Determine how successful your event is before it happens.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="text-center">
                            <div className="px-4 py-5">
                            <a href="#">
                                <img alt="Image placeholder" src="../static/assets/template/assets/img/svg/illustrations/teaching.svg" className="img-fluid" style={{height: 190}} />
                            </a>
                            </div>
                            <div className="px-4 pb-4">
                            <h5>
                                <a href="#">Up-to-Date Technologies</a>
                            </h5>
                            <p className="text-muted">We use the latest and greatest technologies for digital-ticketing in order to make your customers more involved in your events.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Features (v21) */}
                <section className="slice slice-lg bg-cover bg-size--cover" style={{backgroundImage: 'url("../static/assets/template/assets/img/backgrounds/img-5.jpg")'}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="card py-5 px-4 box-shadow-3">
                            <div className="card-body">
                            <h6 className="h2">
                                <strong>Design</strong> is thinking made visual.
                            </h6>
                            <p className="lead lh-180 mt-4">Everyone likes having a good experience while interacting with an online marketplace. A bad user experience means less user engagement. Drop the 2000-era style ticketing websites, use Beatact! Make your customers more engaged, sell more tickets, no contracts needed.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Features (v10) */}
                <section className="slice slice-lg">
                    <div className="container">
                    <div className="mb-5 text-center">
                        <h3 className=" mt-4">Reasons to sell tickets with us</h3>
                        <div className="fluid-paragraph mt-3">
                        <p className="lead lh-180">Always looking to innovate and help you achieve your Event's targets.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="card hover-shadow-lg hover-scale-110">
                            <div className="card-body py-4">
                            <div className="d-flex align-items-start">
                                <div className="icon text-primary rounded-circle">
                                <i className="fas fa-tasks" />
                                </div>
                                <div className="icon-text pl-4">
                                <h5 className="ma-0 ">Full control</h5>
                                <p className="mb-0">Easy to create, edit and manage events. All under your fingertips in an easy to use Dashboard(*OMD). No e-mailing or calling any geeks to fix that title for you required. Have full control over your tickets 24/7.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="card hover-shadow-lg hover-scale-110">
                            <div className="card-body py-4">
                            <div className="d-flex align-items-start">
                                <div className="icon text-primary rounded-circle">
                                <i className="fas fa-mobile-alt" />
                                </div>
                                <div className="icon-text pl-4">
                                <h5 className="ma-0 ">Modern mobile app</h5>
                                <p className="mb-0">Your customers will enjoy using our app, built with all the new cool toys on the block. Apple Pay and Google Pay for payments, Passes for Wallet and Google Pay, App Clips for People that are in a hurry. Rave on! 😉</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="card hover-shadow-lg hover-scale-110">
                            <div className="card-body py-4">
                            <div className="d-flex align-items-start">
                                <div className="icon text-primary rounded-circle">
                                <i className="fab fa-stripe" />
                                </div>
                                <div className="icon-text pl-4">
                                <h5 className="ma-0 ">Payments Dashboard</h5>
                                <p className="mb-0">Easily view your orders, send invoices, refund tickets, set payouts and <a href="https://stripe.com/en-ro/connect/features#manage-your-platform-or-marketplace">much more</a>. Export and view reports in Real-Time! It's so intuitive that you won't even need training!</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="card hover-shadow-lg hover-scale-110">
                            <div className="card-body py-4">
                            <div className="d-flex align-items-start">
                                <div className="icon text-primary rounded-circle">
                                <i className="fas fa-thumbs-up" />
                                </div>
                                <div className="icon-text pl-4">
                                <h5 className="ma-0 ">Great support</h5>
                                <p className="mb-0">We're always here to help! Every organiser will have their own assigned Beatact Helper. The main contact you'll correspond with when having any questions or encounter any problems.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p className="mb-0">*OMD = Organiser Management Dashboard</p>
                    </div>
                </section>
                {/* Features (v15) */}
                <section className="slice slice-lg bg-gradient-primary" data-offset-top="#header-main">
                    <div className="container py-6 py-lg-0 d-flex align-items-center position-relative zindex-100">
                    <div className="col">
                        <div className="row">
                        <div className="col-xl-5 col-lg-6 align-self-center">
                            <div className="text-center text-lg-left pb-5">
                            <h2 className="h1 text-white mb-4"><span className="text-info typed" id="type-example-1" data-type-this="Sell, Buy" /> tickets is minutes.</h2>
                            <p className="lead lh-180 text-white">It only takes 1 minute to buy a ticket on Beatact and only 5 minutes to create an event!</p>
                            <h6 style={{color: 'white'}}>*Tested on an iPhone 7*</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Pricing (v1) */}
                <section className="slice slice-lg">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                        <div className="mb-5 text-center">
                            <h3 className=" mt-4">Pricing Plans</h3>
                            <div className="fluid-paragraph mt-3">
                            <p className="lead lh-180">Unfortunately, running an app is not that cheap! In order to pay the bills we take a small commision. You get a great ticketing experience and we get a small cut. Everybody wins!</p>
                            </div>
                        </div>
                        <div className="pricing-container">
                            <div className="text-center mb-7">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary active" data-pricing="monthly">New Organisers</button>
                                <button type="button" className="btn btn-secondary" data-pricing="yearly">Established Organisers</button>
                            </div>
                            </div>
                            <div className="pricing card-group flex-column flex-lg-row mb-3 shadow-none">
                            <div className="card card-pricing text-center border shadow-none hover-shadow">
                                <div className="card-header py-5 border-0 delimiter-bottom">
                                <span className="d-block h5 mb-4">NGOs</span>
                                <div className="h1 text-primary text-center mb-0" data-pricing-value={0}><span className="price">0</span>%</div>
                                <span className="h6 text-muted">Commision</span>
                                </div>
                                <div className="card-body">
                                <ul className="list-unstyled mb-4">
                                    <li>Organiser Management Dashboard</li>
                                    <li>Payment Management Dashboard</li>
                                    <li>On-Site Ticket Scanning</li>
                                    <li>Standard Features</li>
                                    <li>Email Support</li>
                                </ul>
                                <a href="#" className="btn btn-sm btn-primary btn-icon rounded-pill">
                                    <span className="btn-inner--text">Get Started</span>
                                    <span className="btn-inner--icon"><i className="fas fa-angle-right" /></span>
                                </a>
                                </div>
                            </div>
                            <div className="card card-pricing text-center popular scale-110">
                                <div className="card-header py-5 border-0 delimiter-bottom">
                                <span className="d-block h5 mb-4">Standard</span>
                                <div className="h1 text-primary text-center mb-0" data-pricing-value={4}><span className="price">5</span>%</div>
                                <span className="h6 text-muted">Commision</span>
                                </div>
                                <div className="card-body">
                                <ul className="list-unstyled mb-4">
                                    <li>Organiser Management Dashboard</li>
                                    <li>Payment Management Dashboard</li>
                                    <li>On-Site Ticket Scanning</li>
                                    <li>Standard Features</li>
                                    <li>Email &amp; Phone Support</li>
                                </ul>
                                <a href="#" className="btn btn-sm btn-primary btn-icon rounded-pill">
                                    <span className="btn-inner--text">Get Started</span>
                                    <span className="btn-inner--icon"><i className="fas fa-angle-right" /></span>
                                </a>
                                </div>
                            </div>
                            <div className="card card-pricing text-center border shadow-none hover-shadow">
                                <div className="card-header py-5 border-0 delimiter-bottom">
                                <span className="d-block h5 mb-4">Enterprise</span>
                                <div className="h1 text-primary text-center mb-0" data-pricing-value=""><span className="price" />Negotiable</div>
                                <span className="h6 text-muted">Commision</span>
                                </div>
                                <div className="card-body">
                                <ul className="list-unstyled mb-4">
                                    <li>Organiser Management Dashboard</li>
                                    <li>Payment Management Dashboard</li>
                                    <li>On-Site Ticket Scanning &amp; On-Site Physical Payments</li>
                                    <li>Custom Implementations</li>
                                    <li>24/7 Email &amp; Phone Support</li>
                                </ul>
                                <a href="#" className="btn btn-sm btn-primary btn-icon rounded-pill">
                                    <span className="btn-inner--text">Get Started</span>
                                    <span className="btn-inner--icon"><i className="fas fa-angle-right" /></span>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
        )
}



