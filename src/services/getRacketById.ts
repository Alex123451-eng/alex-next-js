import { IRacket } from "@/types/racket"
import { Response } from "@/types/response"
import { BASE_API_URL } from "@/utils/service"
import { cookies } from "next/headers"

export const getRacketById = async (racketId: string): Response<IRacket> => {
    const cookieStore = await cookies()

    // TODO вынести общие куски кода в utils из сервисов
    const result = await fetch(`${BASE_API_URL}/product/${racketId}`, {
        next: {
            revalidate: 20
        },
        credentials: "include",
        headers: {
            Cookie: cookieStore.toString(),
        }
    })

    if (result.status === 404) return { isError: false, data: undefined }

    if (!result.ok) return { isError: true, data: undefined }

    const { product } = await result.json()

    return { isError: false, data: product }
}