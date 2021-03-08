import React from 'react'
import Link from 'next/link'

export default class AppHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPathName: null
        }
    }
    componentDidMount() {
        this.setState({
            currentPathName: window.location.pathname
        });
    }
    render() {/*
        let menuItems = [{
                href: '/',
                pathname: '/',
                label: 'Home',
                className: 'nav-item' + (this.state.currentPathName == '/' ? ' active' : '')
            }, {
                href: '/category.html',
                pathname: '/category.html',
                label: 'Category',
                className: 'nav-item' + (this.state.currentPathName == '/category.html' ? ' active' : '')
            }, {
                href: '/archive.html',
                pathname: '/archive.html',
                label: 'Archive',
                className: 'nav-item' + (this.state.currentPathName == '/archive.html' ? ' active' : '')
            }, {
                href: '#',
                pathname: '#',
                label: 'Submenus',
                className: 'nav-item submenu dropdown' + (this.state.currentPathName == 'single-blog.html' || this.state.currentPathName == 'elements.html' ? ' active' : ''),
                subs: [{
                        href: '/single-blog.html',
                        pathname: '/single-blog.html',
                        label: 'Blog Details',
                    }, {
                        href: '/elements.html',
                        pathname: '/elements.html',
                        label: 'Elements',
                    }
                ]
            }, {
                href: '/single-blog.html',
                pathname: '/single-blog.html',
                label: 'Blog Details',
                className: 'nav-item' + (this.state.currentPathName == '/single-blog.html' ? ' active' : '')
            }, {
                href: '/elements.html',
                pathname: '/elements.html',
                label: 'Elements',
                className: 'nav-item' + (this.state.currentPathName == '/elements.html' ? ' active' : '')
            }, {
                href: '/contact.html',
                pathname: '/contact.html',
                label: 'Contact',
                className: 'nav-item' + (this.state.currentPathName == '/contact.html' ? ' active' : '')
            }
        ];*/
        return (
            <header class="header header-transparent" id="header-main">
            <nav class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark bg-dark" id="navbar-main">
               <div class="container px-lg-0">
                  <a class="navbar-brand mr-lg-5" href="../static/assets/template/pages/landing/app.html">
                  <img alt="Image placeholder" src="../static/assets/template/assets/img/brand/logobeatact.png" id="navbar-logo" style={{height: '50px'}}></img>
                  </a>
                  <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbar-main-collapse">
                     <ul class="navbar-nav align-items-lg-center">
                        <li class="nav-item ">
                           <a class="nav-link" href="../static/assets/template/pages/landing/app.html">Home</a>
                        </li>
                        <li class="nav-item dropdown dropdown-animate" data-toggle="hover">
                           <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Overview</a>
                           <div class="dropdown-menu dropdown-menu-lg dropdown-menu-arrow p-0">
                              <ul class="list-group list-group-flush">
                                 <li class="#" data-toggle="hover">
                                    <a href="../static/assets/template/pages/Secondary/services.html" class="list-group-item list-group-item-action" role="button"  aria-haspopup="true" aria-expanded="false">
                                       <div class="media d-flex align-items-center">
                                          <div class="media-body ml-3">
                                             <h6 class="mb-1">Features</h6>
                                             <p class="mb-0">A great point to start from.</p>
                                          </div>
                                       </div>
                                    </a>
                                 </li>
                                 <li class="#" data-toggle="hover">
                                    <a href="../static/assets/template/pages/secondary/team.html" class="list-group-item list-group-item-action" role="button" aria-haspopup="true" aria-expanded="false">
                                       <div class="media d-flex align-items-center">
                                          <div class="media-body ml-3">
                                             <h6 class="mb-1">Our team</h6>
                                             <p class="mb-0">Get to know the people around Beatact</p>
                                          </div>
                                       </div>
                                    </a>
                                 </li>
                                 <li class="#" data-toggle="hover">
                                    <a href="../static/assets/template/pages/utility/faq.html" class="list-group-item list-group-item-action" role="button" aria-haspopup="true" aria-expanded="false">
                                       <div class="media d-flex align-items-center">
                                          <div class="media-body ml-3">
                                             <h6 class="mb-1">Faq</h6>
                                             <p class="mb-0">Examples for any scenario.</p>
                                          </div>
                                       </div>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                     <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item dropdown dropdown-animate" data-toggle="hover">
                           <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Organise events</a>
                           <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                              <ul class="list-group list-group-flush">
                                 <li>
                                    <a href="../static/assets/template/pages/landing/features.html" class="list-group-item list-group-item-action" role="button">
                                       <div class="media d-flex align-items-center">
                                          <div class="media-body ml-3">
                                             <h6 class="mb-1">Overview</h6>
                                             <p class="mb-0">Awesome section examples for any scenario.</p>
                                          </div>
                                       </div>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="../static/assets/template/pages/Secondary/pricing-charts.html" class="list-group-item list-group-item-action" role="button">
                                       <div class="media d-flex align-items-center">
                                          <div class="media-body ml-3">
                                             <h6 class="mb-1">Pricing</h6>
                                             <p class="mb-0">Awesome section examples for any scenario.</p>
                                          </div>
                                       </div>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="../static/assets/template/pages/Secondary/team.html" class="list-group-item list-group-item-action" role="button">
                                       <div class="media d-flex align-items-center">
                                          <div class="media-body ml-3">
                                             <h6 class="mb-1">Contact us</h6>
                                             <p class="mb-0">Awesome section examples for any scenario.</p>
                                          </div>
                                       </div>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </li>
                        <li class="nav-item d-lg-none d-xl-block">
                           <a class="nav-link" href="../static/assets/template/docs/changelog.html" target="_blank">Help</a>
                        </li>
                        <li class="nav-item mr-0">
                           <a href="https://themes.getbootstrap.com/product/purpose-website-ui-kit/" target="_blank" class="nav-link d-lg-none">Purchase now</a>
                           <a href="https://themes.getbootstrap.com/product/purpose-website-ui-kit/" target="_blank" class="btn btn-sm btn-white btn-icon rounded-pill d-none d-lg-inline-flex" data-toggle="tooltip" data-placement="left">
                           <span class="btn-inner--icon"><i class="fas fa-shopping-cart"></i></span>
                           <span class="btn-inner--text">Find events</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>
        )
    }
}
