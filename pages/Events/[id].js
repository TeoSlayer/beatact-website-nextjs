import React from 'react'
import { useRouter } from 'next/router'

export default function Home({event}) {
        const router = useRouter()
        const { id } = router.query
        return (
            <h1>{id}</h1>
        )
}


