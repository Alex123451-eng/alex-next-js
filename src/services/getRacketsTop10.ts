import { IRacket } from "@/types/racket"
import { Response } from "@/types/response"
import { BASE_API_URL } from "@/utils/service"

export const getRacketsTop10 = async (): Response<IRacket[]> => {
    const result = await fetch(`${BASE_API_URL}/top-10`, {
        next: {
            tags: ['getRacketsTop10']
        }
    })

    if (result.status === 404) return { isError: false, data: undefined }

    if (!result.ok) return { isError: true, data: undefined }

    const products = await result.json()

    return { isError: false, data: products }
}
