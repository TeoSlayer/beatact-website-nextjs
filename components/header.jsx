import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
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
    <nav class="navbar navbar-main navbar-expand-lg navbar-dark bg-dark" id="navbar-main">
      <div class="container px-lg-0">
        <a class="navbar-brand mr-lg-5">
          <img alt="Image placeholder" src="../static/assets/template/assets/img/brand/white.png" id="navbar-logo" style={{height: '50px'}} href="/"/>
        </a>
        <button className="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbar-main-collapse">
               <ul class="navbar-nav align-items-lg-center">
                 <li class="nav-item ">
                      <a class="nav-link" href="/">Home</a>
                 </li>
                 <li class="nav-item ">
                      <a class="nav-link" href="/Overview">Overview</a>                
                 </li>
                 <li class="nav-item ">
                     <a class="nav-link" href="/Events">Events</a>
                 </li>
                 <li class="nav-item ">
                      <a class="nav-link" href="/Blog">Blog</a>                
                 </li>
               </ul>
             </div>
      </div>
    </nav>
      </header>
    )
    }
}


   