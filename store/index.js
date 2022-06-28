/* eslint-disable camelcase */
/* eslint-disable no-useless-return */
import JWTDecode from 'jwt-decode'
import CookieParser from 'cookieparser'

export const state = () => ({})

export const getter = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit, dispatch}, { req }) {
    console.log('nuxtServerInit....')

    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    const parsed = CookieParser.parse(req.headers.cookie)
    const access_token = parsed.access_token

    if (!access_token) return;

    const decoded = JWTDecode(access_token)

    if (!decoded) return;
 
    const user = {
      uid: decoded.user_id,
      email: decoded.email,
    }
    

    await commit('users/setUser', user)
    await dispatch('todos/fetchTodos');
  
    console.log('user logged in')
  },
}
