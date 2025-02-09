import { supabase } from '@src/configs/supabase'

export const getComments = async (productId: string, page: number): Promise<PagedComment> => {
  try {
    const { data, error } = await supabase.rpc('get_product_comments', {
      p_product_id: productId,
      p_size: 10,
      p_page: page,
    })

    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to fetch product comments', error)
    throw error
  }
}
