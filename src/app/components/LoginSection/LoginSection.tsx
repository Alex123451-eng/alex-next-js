'use client'

import { UserContext } from "@/providers/UserProvider"
import Link from "next/link"
import { use } from "react"
import { LogoutButton } from "../LogoutButton/LogoutButton"

export const LoginSection = () => {
    const user = use(UserContext)

    return user ? <div>hello, {user.login} <LogoutButton /></div> : <Link href="/login">login</Link>
}
