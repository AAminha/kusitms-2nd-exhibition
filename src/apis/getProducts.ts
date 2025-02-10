export interface ProductItemResponse {
  productId: number
  type: string[]
  name: string
  introduction: string
  thumbnailUrl: string
  siteUrl: string | null
}

export const getProducts = async (): Promise<ProductItemResponse[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/data/products.json`, {
      cache: 'force-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('Invalid data format: Expected an array')
    }

    return data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}
