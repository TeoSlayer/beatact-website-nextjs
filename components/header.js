import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

export  function Header(){
    
        return (
        <>
          <header class="header header-transparent" id="header-main">
              <nav class="navbar navbar-main navbar-expand-lg navbar-dark bg-dark" id="navbar-main">
                <div class="container px-lg-0">
                    <img alt="Image placeholder" src="../static/assets/template/assets/img/brand/white.png" id="navbar-logo" style={{height: '50px'}} href="/" />
                    <button className="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbar-main-collapse">
                      <ul class="navbar-nav align-items-lg-center">
                          <li class="nav-item ">
                            <a class="nav-link" href="/">Home</a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link" href="/overview">Overview</a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link" href="/events">Events</a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link" href="/blog">Blog</a>
                          </li>
                      </ul>
                    </div>
                </div>
              </nav>
          </header>
        </>
    );
}


   