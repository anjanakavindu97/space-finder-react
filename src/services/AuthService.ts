import { User } from  '../models/Model'

export class AuthService {

    public async login(userName: string, password: string): Promise<User | undefined>  {
        if (userName === 'user' && password === '1234') {
            return {
                userName: userName,
                email: 'someone@getMaxListeners.com'
            }
        } else {
            return undefined
        }
    }
}