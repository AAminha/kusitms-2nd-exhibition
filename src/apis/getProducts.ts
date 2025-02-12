export const getProducts = async (): Promise<Product[]> => {
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
