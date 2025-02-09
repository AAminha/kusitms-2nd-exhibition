import fs from 'fs'
import path from 'path'

export interface ProductItemResponse {
  productId: number
  type: string[]
  name: string
  introduction: string
  thumbnailUrl: string
  siteUrl: string | null
}

{
  /*export const getProducts = async (): Promise<ProductItemResponse[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/data/products.json`)
    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('Invalid data format: Expected an array')
    }

    return data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}*/
}

export const getProducts = () => {
  const filePath = path.join(process.cwd(), 'public/data/products.json')
  const fileData = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileData) as ProductItemResponse[]
}
