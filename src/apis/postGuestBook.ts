import { supabase } from '@src/configs/supabase'

export const postGuestBook = async (content: string) => {
  try {
    const { data, error } = await supabase.rpc('add_guestbook', {
      p_content: content,
    })

    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to post guestbook', error)
    throw error
  }
}
