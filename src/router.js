import Login from './components/login'
import empty from './components/default'
import success from './components/success'
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: empty
  },
  {
    path: '/success',
    component: success
  }
]
