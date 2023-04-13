import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

export default function ProtectedRoute(props) {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
