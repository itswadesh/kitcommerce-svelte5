import { websiteName } from '$lib/config/website'

export const fetchInit = async () => {
  return {
    storeOne: {
      id: 'Medusa',
      _id: 'Medusa',
      websiteName
    }
  }
}
