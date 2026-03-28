'use client'

import { UserContext } from "@/providers/UserProvider"
import Link from "next/link"
import { use } from "react"

export const SignupSection = () => {
    const user = use(UserContext)

    if (user) return null

    return <div style={{ marginLeft: '10px' }}><Link href="/signup">signup</Link></div>
}