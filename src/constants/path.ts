const path = {
  home: '/',
  profile: '/profile',
  user: '/user',
  changePassword: '/user/password',
  hitoryPurchase: '/user/purchase',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart'
} as const
export default path
