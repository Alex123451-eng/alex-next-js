'use server'

import { BASE_API_URL } from "@/utils/service";
import { cookies } from "next/headers";
import { parseSetCookie } from "../helpers/parse-set-cookes";

export const signupAction = async (_, formData: FormData) => {
    const login = formData.get("login")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? ""

    const result = await fetch(`${BASE_API_URL}/auth/signup`, {
        method: "POST",
        body: JSON.stringify({ login, password }),
        headers: { "Content-type": "application/json" }
    })

    if (result.status !== 200) {
        return { error: "User already exists", redirectTo: undefined }
    }

    const setCookieHeaders = result.headers.getSetCookie()
    
    if (setCookieHeaders) {
        const cookiesStore = await cookies()
        const parsed = parseSetCookie(setCookieHeaders)

        for (const cookie of parsed) {
            const { name, value, options } = cookie
            cookiesStore.set(name, value, options)
        }
    }

    return { error: "", redirectTo: '/'}
}