import fs from 'fs'
import path from 'path'

export interface ProductDetailResponse {
  name: string
  category: string
  introduction: string
  description: string
  thumbnailUrl: string
  instagramUrl?: string
  serviceUrl?: string
  target: string
  problem: string
  solution: string
}

{
  /*export const getProductDetail = async (productId: string): Promise<ProductDetailResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FETCH_URL}/data/products/${productId}.json`,
      {
        cache: 'force-cache',
      }
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch product detail:', error)
    throw error
  }
}*/
}

export const getProductDetail = async (productId: string): Promise<ProductDetailResponse> => {
  const filePath = path.join(process.cwd(), `public/data/products/${productId}.json`)
  const fileData = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileData) as ProductDetailResponse
}
