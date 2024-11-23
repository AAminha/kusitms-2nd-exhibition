export interface ProductDetailResponse {
  name: string
  category: string
  introduction: string
  description: string
  thumbnailUrl: string
  instagramUrl: string | null
  serviceUrl: string | null
  target: string
  problem: string
  solution: string
}

export const getProductDetail = async (productId: string): Promise<ProductDetailResponse> => {
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/details/${productId}`, {
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
