import React from 'react'
import { Head, Main, NextScript, Html } from 'next/document'
import { NextSeo } from 'next-seo';


export default function Home() {
         if (process.browser) {
            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                    "background": "#edeff5",
                    "text": "#838391"
                    },
                    "button": {
                    "background": "#7653db"
                    }
                },
                "content": {
                    "message": "This website uses cookies. We know that many of you don't really take that into account but unfortunately the law tells us that we have to specify it in our website.",
                    "dismiss": "Sure!",
                    "link": "Privacy Policy",
                    "href": "www.beatact.net/Legal/PrivacyPolicy"
                }
             });
         }
        return (
            <>
                <NextSeo
                title="Beatact - The first app for ravers made by ravers"
                description="The first app made specificaly for electronic music parties or events."
                />
                <div class="main-content">
                    <section class="slice slice-lg bg-gradient-primary" data-offset-top="#header-main">
                    <div class="container py-6 py-lg-0 d-flex align-items-center position-relative zindex-100">
                        <div class="col">
                        <div class="row">
                            <div class="col-xl-5 col-lg-6 align-self-center">
                            <div class="text-center text-lg-left pb-5">
                                <h2 class="h1 text-white mb-4">Here you can find new <span class="text-info typed" id="type-example-1" data-type-this="parties., houseparties., festivals., experiences.">experiences.</span></h2>
                                <p class="lead lh-180 text-white">Now you know what you're doing this friday night.</p>
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
                            <div class="col-lg-6 ml-lg-auto align-self-end">
                            <div class="position-relative">
                                <img alt="Image placeholder" src="../static/assets/template/assets/img/theme/light/iphone.png" class="img-fluid img-center"/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section class="slice slice-lg">
                    <div class="container">
                        <div class="text-center">
                        <h1>It's time to change the game</h1>
                        <div class="fluid-paragraph mt-4">
                            <p class="lead text-muted lh-180">
                            Do you have a great idea for an event? Are you already an established organiser? Are you looking for a more immersive ticketing experience? Become a Beatact Organiser today !
                            </p>
                            <a href="Features" class="btn btn-dark btn-icon rounded-pill hover-scale-110 mt-5" target="_blank">
                            <span class="btn-inner--text">Join us today</span>
                            <span class="btn-inner--icon"><i class="fas fa-angle-right"></i></span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section class="slice slice-lg bg-gradient-primary">
                    <div class="container">
                        <div class="mb-5 text-center">
                        <h3 class="text-white mt-4">Powerful features</h3>
                        <div class="fluid-paragraph mt-3">
                            <p class="lead lh-180 text-white">Tools and Functions that you'll love! Raving like never before!</p>
                        </div>
                        </div>
                        <div class="row row-grid align-items-center">
                        <div class="col-lg-4">
                            <div class="d-flex align-items-start mb-5">
                            <div class="pr-4">
                                <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                                <i class="fas fa-thumbs-up"></i>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5 class="h5 text-white">Easy to use</h5>
                                <p class="mb-0 text-white">Raving was never this easy before.</p>
                            </div>
                            </div>
                            <div class="d-flex align-items-start mb-5">
                            <div class="pr-4">
                                <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                                <i class="fas fa-credit-card"></i>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5 class="text-white">International Payments</h5>
                                <p class="mb-0 text-white">Pay for tickets using Credit Cards, Apple Pay and Google Pay.</p>
                            </div>
                            </div>
                            <div class="d-flex align-items-start">
                            <div class="pr-4">
                                <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                                <i class="fas fa-star"></i>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5 class="text-white">Rating System</h5>
                                <p class="mb-0 text-white">Know what to expect before attending an event.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="position-relative">
                            <img alt="Image placeholder" src="../static/assets/template/assets/img/theme/light/iphone.png" class="img-center img-fluid"/>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-start mb-5">
                            <div class="pr-4">
                                <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                                <i class="fas fa-tools"></i>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5 class="text-white">Loaded with features</h5>
                                <p class="mb-0 text-white">Widgets, App Clips, Passes for Apple Wallet and Google Pay Wallet and much more!</p>
                            </div>
                            </div>
                            <div class="d-flex align-items-start mb-5">
                            <div class="pr-4">
                                <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                                <i class="fas fa-gamepad"></i>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5 class="text-white">Gamified feel</h5>
                                <p class="mb-0 text-white">Compete with users locally to win Tickets to your preffered events.</p>
                            </div>
                            </div>
                            <div class="d-flex align-items-start">
                            <div class="pr-4">
                                <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                                <i class="fas fa-search"></i>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5 class="text-white">Party lookup</h5>
                                <p class="mb-0 text-white">Find your favorite parties and events.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section class="slice slice-lg bg-section-secondary">
                    <div class="container">
                        <div class="mb-5 text-center">
                        <h3 class=" mt-4">Helpful answers</h3>
                        <div class="fluid-paragraph mt-3">
                            <p class="lead lh-180">Definitely not all of them but it's better than nothing for a start. You can find more answers in the FAQ or by emailing us directly at: help@beatact.net.</p>
                        </div>
                        </div>
                            <div id="accordion-2" class="accordion accordion-spaced">
                            <div class="card">
                                <div class="card-header py-4" id="heading-2-1" data-toggle="collapse" role="button" data-target="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                                <h6 class="mb-0"><i class="fas fa-user-plus mr-3"></i>Do I need an account to use Beatact?</h6>
                                </div>
                                <div id="collapse-2-1" class="collapse" aria-labelledby="heading-2-1" data-parent="#accordion-2">
                                <div class="card-body">
                                    <p>Yes, In order for business to be conducted between the organisers and yourself you have to be registered as a Beatact User.</p>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header py-4" id="heading-2-2" data-toggle="collapse" role="button" data-target="#collapse-2-2" aria-expanded="false" aria-controls="collapse-2-2">
                                <h6 class="mb-0"><i class="fas fa-question-circle mr-3"></i>I have a question about an event. Who do I speak to?</h6>
                                </div>
                                <div id="collapse-2-2" class="collapse" aria-labelledby="heading-2-2" data-parent="#accordion-2">
                                <div class="card-body">
                                    <p>In order to receive more information about a specific event, your best bet is to get in contact with the event organiser, due to the fact that Beactact doesn't have direct implication with the events.</p>
                                    <p>You can get in direct contact with an organiser by clicking on the Contact button on the specified event, which will forward you to the organisers profile, where you can find all the contact information.</p>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header py-4" id="heading-2-3" data-toggle="collapse" role="button" data-target="#collapse-2-3" aria-expanded="false" aria-controls="collapse-2-3">
                                <h6 class="mb-0"><i class="fas fa-credit-card mr-3"></i>How do I buy a ticket on Beatact?</h6>
                                </div>
                                <div id="collapse-2-3" class="collapse" aria-labelledby="heading-2-3" data-parent="#accordion-2">
                                <div class="card-body">
                                    <p>In order to buy a ticket you have to have the following:</p>
                                    <li>
                                    A Beatact Account.                                    </li>
                                    <li>
                                    A Valid Payment Method(Credit Card, Apple Pay or Google Pay).
                                    </li>
                                    <li>
                                    A minute to spare.
                                    </li>
                                    <p>When you found the desired event you can either directly press “Buy” or “View More”. If you pressed “View More”, in order to continue with the payment, you have to press on the “Order” button. Then, when you’re on the “Order Ticket” Page you will be able to access the Organiser’s Terms of Service. In order to continue with the payment you will have to agree to those terms.</p>
                                    <p><strong>Important Note:</strong> The organiser’s terms of service is a legally binding contract. By checking the “I agree to the Terms of Service” you hereby agree with the organiser’s terms for that specific event. This may include but is not limited to: Refund Policy, General Rules of the event.</p>
                                    <p>Then you can press on either “Select Payment” or “Order with Apple Pay”/”Order with Google Pay”. If you pressed on “Select Payment” you will either have to select the desired payment method(if you have one already existing) or add a new payment method by pressing “Add payment method”. </p>
                                    <p>Then you can press on “Pay Now” and your order will be placed. You will receive a confirmation message if the payment was successful or an error message if it wasn’t.</p>
                                    <p>Your ticket will be available within the “Orders” tab, you will receive a confirmation and an invoice on your email.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    </section>
                </div>
            </>
        )
}
