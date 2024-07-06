import { error } from '@sveltejs/kit'

export const savePopularSearch = async ({ id, text, sid = null }: any) => {
  try {
    let res: any = {}

    res = []

    return res
  } catch (e) {
    error(e.status, e.message)
  }
}
