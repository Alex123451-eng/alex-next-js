'use client'

import { useActionState, useEffect } from "react"
import { loginAction } from "./loginAction"

const Login = () => {
    const [{ error, redirectTo }, formAction, isPending] = useActionState(loginAction, {
        error: "",
        redirectTo: undefined,
    })

    useEffect(() => {
        if (redirectTo) {
            location.assign(redirectTo)
        }
    }, [redirectTo])

    return <form action={formAction}>
        <div>
            <label htmlFor="login">Login:</label><input type="text" required name="login" />
        </div>
        <div>
            <label htmlFor="password">Password:</label><input type="password" required name="password" />
        </div>

        {error && <div>{error}</div>}

        <button disabled={isPending}>login</button>
    </form>
}

export default Login