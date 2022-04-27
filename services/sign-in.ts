import { Auth } from '../types/auth.type'

export const signInService = async (email: string, password: string): Promise<Auth> => {
  return new Promise<Auth>((resolve, reject) => {
    setTimeout(() => {
      if (password && email) {
        resolve({
          token: '12321324332',
          email: 'testing@email.com',
          name: 'John Doe'
        })
      } else {
        reject(new Error('Campos vazios'))
      }
    }, 500)
  })
}
