import { supabase } from '@src/configs/supabase'

export const getProductMembers = async (productId: string): Promise<Member[]> => {
  try {
    const { data, error } = await supabase.rpc('get_product_members', {
      p_product_id: productId,
    })

    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to fetch product members', error)
    throw error
  }
}
