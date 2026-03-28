'use client'

import { useActionState, useEffect } from "react"
import { signupAction } from "./signupAction"

const Signup = () => {
    const [{ error, redirectTo }, formAction, isPending] = useActionState(signupAction, {
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

        <button disabled={isPending}>signup</button>
    </form>
}

export default Signup