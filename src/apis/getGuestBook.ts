import { supabase } from '@src/configs/supabase'

export const getGuestBook = async (page: number): Promise<PagedComment> => {
  try {
    const { data, error } = await supabase.rpc('get_guestbook', {
      p_size: 10,
      p_page: page,
    })

    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to fetch guestbook', error)
    throw error
  }
}
