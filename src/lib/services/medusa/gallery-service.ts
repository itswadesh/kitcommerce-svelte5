import { getMedusajsApi } from '$lib/utils/server'
import { error } from '@sveltejs/kit'

export const fetchGallery = async ({ sid = null }: any) => {
  try {
    let res: any = {}

    res = await getMedusajsApi(`gallery`)

    return res.data || []
  } catch (e) {
    error(e.status, e.message)
  }
}
