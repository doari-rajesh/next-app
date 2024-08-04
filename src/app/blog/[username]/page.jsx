'use client'

import { useParams, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"


const UsernamePage = () => {
    const params = useParams()
    const router = useRouter()
    const search = useSearchParams()
    const value = search.get('userid')
    return (
        <>
            
            <div>Hi {params.username} Page</div>
            <p>you searched for {value}</p>
            <Link href={`/dashboard`}>
                <button
                // onClick={() => router.push(`/dashboard`)}
                >Dashboard</button>
            </Link>

        </>
    )
}

export default UsernamePage