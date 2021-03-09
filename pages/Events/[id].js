import React from 'react'
import { useRouter } from 'next/router'

export default function Home({event}) {
        const router = useRouter()
        const { id } = router.query
        return (
            <h1>{event.Id}</h1>
        )
}



export async function getStaticProps({ params }) {

    const req = await fetch("../../public/" + params.id + ".json");
    const data = await req.json();

    return {
        props: { event : data }
    }
}

export async function getStaticPaths() {
    const req = await fetch("../../public/Events.json");
    const data = await req.json();
    const paths = data.map(event => {
        return { params: { id : event }}
    })
    return {
         paths,
         fallback: false
    };
}