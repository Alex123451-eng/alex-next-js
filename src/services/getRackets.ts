import { IRacket } from "@/types/racket"
import { Response } from "@/types/request"
import { BASE_API_URL } from "@/utils/service"

import { getRacketsParams } from "@/types/racket"

export const getRackets = async ({ page = 1, limit = 10 }: getRacketsParams): Response<IRacket[]> => {
    const result = await fetch(`${BASE_API_URL}/products?page=${page}&limit=${limit}`)

    if (result.status === 404) return { isError: false, data: undefined }

    if (!result.ok) return { isError: true, data: undefined }

    const products = await result.json()

    return { isError: false, data: products }
}
