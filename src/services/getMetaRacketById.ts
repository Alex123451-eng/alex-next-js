import { Response } from "@/types/response"
import { BASE_API_URL } from "@/utils/service"

export const getMetaRacketById = async (racketId: string): Response<{ name: string; description: string }> => {
    // TODO вынести общие куски кода в utils из сервисов
    const result = await fetch(`${BASE_API_URL}/meta/product/${racketId}`)

    if (result.status === 404) return { isError: false, data: undefined }

    if (!result.ok) return { isError: true, data: undefined }

    const { product } = await result.json()

    return { isError: false, data: product }
}