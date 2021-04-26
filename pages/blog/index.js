
import React from 'react'
import Link from 'next/link'
import { TopicList } from '../../components/topics';
import { getAllPostsForHome } from '../../libs/fetch';
import { NextSeo } from 'next-seo';

export async function getServerSideProps({ preview = false }) {
    const posts = (await getAllPostsForHome(preview)) || []
    return {
      props: { posts, preview },
    }
  }

export default function Home({ posts }) {
        return (
            <>
            <NextSeo
                title="Blog - A convenient place to find information you wouldn't find anywhere else."
                description="View news, stories and information about what's going on today on the rave scene"
            />
            <div className="main-content">
            {/* Cover (v3) */}
            <section className="spotlight bg-cover bg-size--cover" data-spotlight="fullscreen" style={{backgroundImage: 'url("../../../img/backgrounds/img-1-1920x800.jpg")'}}>
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
                <div className="mb-5 text-center">
                    <h3 className=" mt-4">Latest from the blog</h3>
                    <div className="fluid-paragraph mt-3">
                        <p className="lead lh-180">Some content that you may or may not find interesting, but definitely not stuff that you'll find in the news.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <TopicList posts={posts}></TopicList>
                    </div>
                </div>
            </section>
            </div>
            </>
        )
}




