import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default function authHeader() {

  const jwtToken = cookies.get('jwtToken')

  if (jwtToken) {
    return {
      'Autherization': 'Bearer ',
      'x-access-token': jwtToken
    };
  } else {
    return {};
  }
}