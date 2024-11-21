import { ARCHIVE_NAVIGATION } from '@src/constants/archive'

export interface ProductResponse {
  productId: number
  name: string
  introduction: string
  thumbnailUrl: string
}

export const getProducts = async (
  type: keyof typeof ARCHIVE_NAVIGATION
): Promise<ProductResponse[]> => {
  const convertType = String(type).toLowerCase()
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${convertType}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json()

  if (!response.isSuccess) {
    throw new Error(response.message)
  }

  return response.payload
}
