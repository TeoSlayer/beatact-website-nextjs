import { TopicList } from './topics';
import { NextSeo } from 'next-seo';

export  function Article({ post, morePosts }) {

    const keywords = post.seo.keywords.join()
    const tags = post.tags

    return (
        <>
            <NextSeo
                title={post.seo.title}
                description={post.seo.description}
                additionalMetaTags={[{
                    property: 'keywords',
                    content: keywords,
                  }, {
                    name: 'application-name',
                    content: 'Beatact'
                  }, {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                  }]}
                openGraph={{
                    title: post.title,
                    description: post.description,
                    url: 'https://www.beatact.net/Blog/' + post.slug,
                    type: 'Article',
                    article: {
                      tags: tags,
                    },
                    images: [
                      {
                        url: post.coverImage.url,
                        width: 850,
                        height: 650,
                        alt: 'Article Photo',
                      },
                    ],
                  }}
                
            />
            <section className="slice slice-lg bg-gradient-primary">
            <div className="container pt-6">
                    <div className="row justify-content-center">
                    <div className="col-md-9">
                    <h1 className="lh-150 mb-3 text-light">{post.title}</h1>
                    <div className="media align-items-center mt-5">
                            <div>
                            <a className="avatar rounded-circle mr-3">
                            <img alt="Image placeholder" src={post.author.picture.url} />
                            </a>
                            </div>
                            <div className="media-body">
                            <span className="d-block h6 mb-0 text-white">{post.author.name}</span>
                            <span className="text-sm text-white">{post.date}</span>
                            </div>
                    </div>
                    </div>
                    </div>
            </div>
            </section>
            <section className="bg-cover bg-size--cover" style={{height: '600px', backgroundImage: `url(${post.coverImage.url})`, backgroundPosition: 'center'}} />
            <section className="slice">
            <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-9">
                    {/* Article body */}
                    <article>
                    <div dangerouslySetInnerHTML={{ __html: post.content?.html }} />
                    </article>
                    <div className="d-flex align-items-center mt-4">
                        <li class="list-inline-item pr-3">
                        <h6>Tags:</h6>
                        <>
                            {post.tags.slice(0,3).map((tag) => { return <span class="badge badge-pill badge-soft-primary">{tag}</span>})}
                        </>
                        </li>
                    </div>
                    </div>
                    </div>
            </div>
            </section>
            <section className="slice slice-lg bg-section-secondary delimiter-top delimiter-bottom">
            <div className="container">
                <div className="mb-5 text-center">
                    <h3 className=" mt-4">Latest from the blog</h3>
                    <div className="fluid-paragraph mt-3">
                        <p className="lead lh-180">Some content that you may or may not find interesting, but definitely not stuff that you'll find in the news.</p>
                    </div>
                </div>
                <div className="row">
                    <TopicList posts={morePosts}/>
                </div>
            </div>
            </section>
        </>
    )
}

