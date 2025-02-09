import { supabase } from '@src/configs/supabase'

interface CommentsResponse {
  totalCommentCount: number
  totalPageCount: number
  comments: Comment[]
}

export const getComments = async (productId: string, page: number): Promise<CommentsResponse> => {
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
