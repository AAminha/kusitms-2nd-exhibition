import { supabase } from '@src/configs/supabase'
export const getMembers = async (): Promise<Member[]> => {
  try {
    const { data, error } = await supabase.rpc('get_members')

    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to fetch members', error)
    throw error
  }
}
