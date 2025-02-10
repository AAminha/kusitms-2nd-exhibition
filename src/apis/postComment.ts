import { supabase } from '@src/configs/supabase'

export const postComment = async (productId: string, content: string) => {
  try {
    const { data, error } = await supabase.rpc('add_comment', {
      p_product_id: productId,
      p_content: content,
    })

    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to post product comments', error)
    throw error
  }
}
