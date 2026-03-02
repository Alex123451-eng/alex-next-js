import { IRacket } from "@/types/racket"
import { Response } from "@/types/request"
import { BASE_API_URL } from "@/utils/service"

export const getRacketById = async (racketId: string): Response<IRacket> => {
    // TODO вынести общие куски кода в utils из сервисов
    const result = await fetch(`${BASE_API_URL}/product/${racketId}`)

    if (result.status === 404) return { isError: false, data: undefined }

    if (!result.ok) return { isError: true, data: undefined }

    const { product } = await result.json()

    return { isError: false, data: product }
}