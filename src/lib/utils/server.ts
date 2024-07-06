import { MEDUSAJS_BASE_URL } from './../config'

export const getMedusajsApi = async (
  endpoint: string,
  query?: any,
  sid?: any
) => {
  try {
    const response = await fetch(MEDUSAJS_BASE_URL + '/' + endpoint, {
      method: 'GET',
      credentials: 'include',
      headers: { Cookie: `connect.sid=${sid}` }
    })
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json')
    const res = isJson ? await response.json() : await response.text()

    if (res?.status > 399) {
      throw { status: res.status, message: res }
    } else if (response?.status > 399) {
      throw { status: response.status, message: res }
    } else {
      return res
    }
  } catch (e) {
    // console.log(`/lib/utils/server.ts getMedusajsApi(${HTTP_ENDPOINT + '/api/' + endpoint})`, e)
    throw e
  }
}

export const postMedusajsApi = async (
  endpoint: string,
  data: any,
  sid?: any
) => {
  try {
    const ep = MEDUSAJS_BASE_URL + '/' + endpoint

    const response = await fetch(ep, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data || {}),
      headers: {
        'Content-Type': 'application/json',
        Cookie: `connect.sid=${sid}`
      }
    })
    // const allHeaders = Object.fromEntries(response.headers.entries())
    // console.log(allHeaders)
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json')
    const res = isJson ? await response.json() : await response.text()
    if (response.status > 399) {
      let message = res.message
      if (message == 'null') {
        message = 'Invalid data'
      }
      throw { status: 400, message }
    }
    if (res?.status > 399) {
      throw { status: res.status, message: res.message }
    } else if (response?.status > 399) {
      throw { status: response.status, message: res }
    } else {
      const setCookieForLogin = response.headers.get('set-cookie')
      if (setCookieForLogin) {
        const sidCookie = cookie.parse(setCookieForLogin)
        res.sid = sidCookie['connect.sid']
      }
      return res
    }
  } catch (e) {
    // console.log(`/lib/utils/server.ts postMedusajsApi(${HTTP_ENDPOINT + ' / api /' + endpoint})`, e)
    throw e
  }
}

export const deleteMedusajsApi = async (endpoint: string, sid?: any) => {
  try {
    const ep = MEDUSAJS_BASE_URL + '/' + endpoint
    const response = await fetch(ep, {
      method: 'DELETE',
      credentials: 'include',
      headers: { cookie: `connect.sid=${sid}` }
    })
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json')
    const res = isJson ? await response.json() : await response.text()
    if (response?.status > 399) {
      throw { status: response.status, message: response.statusText }
    } else {
      return res
    }
  } catch (e) {
    // console.log(`/lib/utils/server.ts delBySid(${HTTP_ENDPOINT + ' / api /' + endpoint})`, e)
    throw e
  }
}
