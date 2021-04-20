import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';

export default function Home({event}) {
        const router = useRouter()
        const { id } = router.query
        return (
            <>
            <NextSeo
                title="Event Title"
                description="Event Description..."
            />
            <h1>{id}</h1>
            </>
        )
}


