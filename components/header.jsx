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
        
         <nav class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark" id="navbar-main">
           <div class="container px-lg-0">
          
            <Link href="/">
              <a class="navbar-brand mr-lg-5" href="">
               <img alt="Image placeholder" src="../static/assets/template/assets/img/brand/white.png" id="navbar-logo" style={{height: '50px'}} />
              </a>
            </Link>
             
           
             <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
             
             <div class="collapse navbar-collapse" id="navbar-main-collapse">
               <ul class="navbar-nav align-items-lg-center">
                 <li class="nav-item ">
                   <Link class="nav-link" href="/">
                      <a href="#" class="nav-link">Home</a>
                   </Link>
                 </li>
                 <li class="nav-item ">
                   <Link href="/Events">
                     <a href="#" class="nav-link">Events</a>
                   </Link>
                 </li>
                 <li class="nav-item ">
                   <Link class="nav-link" href="/Features">
                      <a href="#" class="nav-link">Features</a>
                   </Link>
                 </li>
     
               </ul>
             </div>
           </div>
         </nav>
       </header>
        )
    }
}
