export const getProductDetail = async (productId: string): Promise<ProductDetail> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FETCH_URL}/data/products/${productId}.json`,
      {
        cache: 'force-cache',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch product detail:', error)
    throw error
  }
}
