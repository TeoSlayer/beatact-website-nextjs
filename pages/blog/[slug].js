import React from 'react';
import Link from 'next/link';
import { getAllPostsWithSlug, getPostAndMorePosts } from  '../../libs/fetch';
import { Article } from '../../components/article';
import { useRouter } from 'next/router';


export async function getStaticProps({ params, preview = false }) {
        const data = await getPostAndMorePosts(params.slug, preview)
        return {
          props: {
            preview,
            post: data.post,
            morePosts: data.morePosts
          },
          revalidate: 1000,
        };
}
      
export async function getStaticPaths() {
        const posts = await getAllPostsWithSlug()
        return {
          paths: posts.map(({ slug }) => ({
            params: { slug },
          })),
          fallback: true,
        }
}

export default function Home(props) {
        const router = useRouter();

        if(router.isFallback){
                return (
                        <>
                                <div class="main-content">
                                        <section className="slice slice-lg bg-gradient-primary">
                                        <div className="container pt-6">
                                                <div className="row justify-content-center">
                                                <div class="spinner-grow text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div>  
                                                </div>
                                        </div>
                                        </section>
                                </div>  
                        </>
                )
        }

        const post = props.post;
        const morePosts = props.morePosts


        return (
        <>
        <div className="main-content">
                <Article morePosts={morePosts} post={post}/>
        </div>
        </>
        )
}

