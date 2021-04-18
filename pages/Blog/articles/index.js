
import React from 'react'
import Link from 'next/link'

export default function Home() {
        return (
            <div className="main-content">
            {/* Cover (v3) */}
            <section className="spotlight bg-cover bg-size--cover" data-spotlight="fullscreen" style={{backgroundImage: 'url("../../../static/assets/template/assets/img/backgrounds/img-1-1920x800.jpg")', paddingTop: "100px", paddingBottom: "50px"}}>
            <div className="spotlight-holder">
                <span className="mask bg-gradient-primary opacity-6" />
                <div className="container d-flex align-items-center pt-9 pb-6 py-lg-0">
                    <div className="col py-4">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 col-lg-7 text-center">
                            <h1 className="text-white lh-150 mb-4">Keep your face always toward the sunshine - and shadows will fall behind you.</h1>
                            <ul className="list-inline">
                                <li className="list-inline-item text-white">August 21, 2018</li>
                                <li className="list-inline-item text-white">Written by Destiny Erykah</li>
                            </ul>
                            <span className="clearfix" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="slice slice-lg bg-section-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-1-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">Choose the best solution for your business</a>
                                <h6 className="text-muted mt-4 mb-0">20 Aug 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-2-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">How to find the right design for your specific product</a>
                                <h6 className="text-muted mt-4 mb-0">23 Aug 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-3-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">How to win buyers and influence sales with marketing</a>
                                <h6 className="text-muted mt-4 mb-0">27 Aug 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-4-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">7 facts about Purpose that will make you think twice</a>
                                <h6 className="text-muted mt-4 mb-0">19 Jul 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-5-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">Here are 15 ugly truths about design</a>
                                <h6 className="text-muted mt-4 mb-0">15 Jul 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-6-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">The real reason why everyone love Purpose</a>
                                <h6 className="text-muted mt-4 mb-0">30 Jun 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-7-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">It's time to get your idea ready for launch</a>
                                <h6 className="text-muted mt-4 mb-0">10 Jun 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-8-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">7 facts about Purpose that will make you think twice</a>
                                <h6 className="text-muted mt-4 mb-0">19 May 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n10">
                            <a href="#">
                            <img alt="Image placeholder" src="../../../static/assets/template/assets/img/theme/light/img-9-800x600.jpg" className="card-img-top" />
                            </a>
                            <div className="card-body py-5 text-center">
                                <a href="#" className="d-block h5 lh-150">Choose the best solution for your business</a>
                                <h6 className="text-muted mt-4 mb-0">17 May 2019</h6>
                            </div>
                            <div className="card-footer delimiter-top">
                                <div className="row">
                                    <div className="col text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-share mr-1 text-muted" /> 131</a>
                                        </li>
                                        <li className="list-inline-item pr-4">
                                            <a href="#" className="text-muted"><i className="fas fa-eye mr-1 text-muted" /> 255</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted"><i className="fas fa-comments mr-1 text-muted" /> 14</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Load more */}
                    <div className="mt-4 text-center">
                        <a href="#" className="btn btn-sm btn-neutral rounded-pill shadow hover-translate-y-n3">Load more</a>
                    </div>
                </div>
            </section>
            </div>
        )
}



