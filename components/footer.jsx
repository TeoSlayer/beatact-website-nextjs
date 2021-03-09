import React from 'react'

export default class AppFooter extends React.Component {
    render() {
        return (
            <footer id="footer-main">
                <div class="footer footer-dark bg-gradient-primary">
                <div class="container">
                    <div class="row pt-md">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <a href="index.html">
                        <img src="../static/assets/template/assets/img/brand/white.png" alt="Footer logo" style={{height: '70px'}} />
                        </a>
                        <p></p>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Support</h6>
                        <ul class="list-unstyled">
                        <li><a href="#">FAQ Organisers</a></li>
                        <li><a href="#">FAQ Customers</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">About</h6>
                        <ul class="list-unstyled text-small">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Company</h6>
                        <ul class="list-unstyled">
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
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
