
import React from 'react'
import Link from 'next/link'
export default class AppFooter extends React.Component {
    render() {
        return (
            <footer id="footer-main">
                <div class="footer footer-dark bg-gradient-primary">
                <div class="container">
                    <div class="row pt-md">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <Link href="/">
                                <img src="../static/assets/template/assets/img/brand/white.png" alt="Footer logo" style={{height: '70px'}} />
                        </Link>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Support</h6>
                        <ul class="list-unstyled">
                        <li>
                            <Link href="#">
                                 <a href="#">FAQ Organisers</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="#">
                             <a href="#">FAQ Customers</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">About</h6>
                        <ul class="list-unstyled">
                        <li>
                            <Link href="#">
                                 <a href="#">About Us</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="#">
                             <a href="#">Contact Us</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Company</h6>
                        <ul class="list-unstyled">
                        <li>
                            <Link href="/Legal/T&C">
                                 <a>Terms and Conditions</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="/Legal/PrivacyPolicy">
                                 <a>Privacy Policy</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
                    <div class="col-md-6">
                        <div class="copyright text-sm font-weight-bold text-center text-md-left">
                        &copy; 2021 <a href="#" class="font-weight-bold" target="_blank">Beatact</a>. All rights reserved.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#" target="_blank">
                            <i class="fab fa-dribbble"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" target="_blank">
                            <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" target="_blank">
                            <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" target="_blank">
                            <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}
