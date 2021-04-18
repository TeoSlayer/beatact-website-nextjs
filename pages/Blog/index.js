import React from 'react'
import Link from 'next/link'

export default function Home() {
        return (
                <div className="main-content">
                {/* Header (v4) */}
                <section className="spotlight bg-cover bg-size--cover" data-spotlight="fullscreen" data-offset-top="#header-main" style={{backgroundImage: 'url("../../static/assets/template/assets/img/backgrounds/img-11.jpg")', paddingTop: "100px", paddingBottom: "140px"}}>
                <div className="spotlight-holder pt-5 pb-7 py-lg-0">
                    <span className="mask bg-gradient-primary opacity-6" />
                    <div className="container d-flex align-items-center">
                        <div className="col">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-md-9 col-lg-7 text-center">
                                <h1 className="text-white lh-150 mb-4">Keep your face always toward the sunshine - and shadows will fall behind you.</h1>
                                <ul className="list-inline">
                                    <li className="list-inline-item text-white">August 21, 2018</li>
                                    <li className="list-inline-item text-white">Written by Destiny Erykah</li>
                                </ul>
                                <span className="clearfix" />
                                <a href="/Blog/articles" className="btn btn-white rounded-pill btn-icon mt-5">
                                <span className="btn-inner--text">Continue reading</span>
                                <span className="btn-inner--icon"><i className="fas fa-angle-right" /></span>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                {/* Blog (v2) */}
                <section className="slice slice-lg">
                    <div className="container">
                        <div className="mt--200">
                            <div className="card-group">
                            <div className="card border-0 text-white hover-scale-110 hover-shadow-lg overflow-hidden">
                                <figure className="figure">
                                    <img alt="Image placeholder" className="img-fluid" src="../../static/assets/template/assets/img/theme/light/img-1-800x600.jpg" />
                                </figure>
                                <span className="mask hover-mask bg-dark opacity-7" />
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <div className="text-center">
                                        <div className="animate-item--visible opacity-10">
                                        <a href="#" className="h3 text-white mb-1 stretched-link">Technology</a>
                                        <p className="card-text text-white">25 articles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 text-white hover-scale-110 hover-shadow-lg overflow-hidden">
                                <figure className="figure">
                                    <img alt="Image placeholder" className="img-fluid" src="../../static/assets/template/assets/img/theme/light/img-2-800x600.jpg" />
                                </figure>
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <div className="text-center">
                                        <div className="animate-item--visible opacity-10">
                                        <a href="#" className="h3 text-white mb-1 stretched-link">Culture</a>
                                        <p className="card-text text-white">30 articles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 text-white hover-scale-110 hover-shadow-lg overflow-hidden">
                                <figure className="figure">
                                    <img alt="Image placeholder" className="img-fluid" src="../../static/assets/template/assets/img/theme/light/img-3-800x600.jpg" />
                                </figure>
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <div className="text-center">
                                        <div className="animate-item--visible opacity-10">
                                        <a href="#" className="h3 text-white mb-1 mb-1 stretched-link">Creativity</a>
                                        <p className="card-text text-white">45 articles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog (v3) */}
                <section className="slice slice-lg">
                    <div className="container">
                        <div className="row row-grid">
                            <div className="col-lg-3">
                            <h4 className="mt-3">Experience quality</h4>
                            <p className="lead mt-4">Purpose is a professional Bootstrap theme which includes over 150 ready to use layouts. From business and corporate to real estate, education, health and much more. It comes with three complete shop layouts.</p>
                            <a href="/Blog/articles" className="btn btn-primary btn-icon rounded-pill hover-scale-110 mt-4">
                            <span className="btn-inner--icon">
                            <i className="fas fa-angle-right" />
                            </span>
                            <span className="btn-inner--text">Read more</span>
                            </a>
                            </div>
                            <div className="col-lg-6">
                            <div className="px-4">
                                <img alt="Image placeholder" src="../../static/assets/template/assets/img/theme/light/img-1-600x800.jpg" className="img-fluid rounded shadow-lg hover-scale-110" />
                            </div>
                            </div>
                            <div className="col-lg-3 d-lg-flex flex-lg-column">
                            <div className="mt-lg-auto">
                                <p className="lead">When you purchase Purpose you also get free updates for life and dedicated support from our team. You can now relax because we will take care of everything else.</p>
                            </div>
                            <div className="mt-lg-auto">
                                <p className="lead mb-0">You can now relax because we will take care of everything else.</p>
                                <div className="row align-items-center mt-5">
                                    <div className="col-xl-4">
                                        <small className="d-block text-uppercase text-muted ls-1 font-weight-600">Share:</small>
                                    </div>
                                    <div className="col-xl-8">
                                        <ul className="nav ml-lg-auto mb-0">
                                        <li className="nav-item">
                                            <a className="nav-link pl-0" href="#"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fab fa-facebook" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fab fa-twitter" /></a>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog (v4) */}
                {/* Subscribe (v1) */}
                </div>
        )
}
