export interface ProductItemResponse {
  productId: number
  name: string
  introduction: string
  thumbnailUrl: string
  siteUrl: string | null
}

export const getProducts = async (type: string): Promise<ProductItemResponse[]> => {
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
