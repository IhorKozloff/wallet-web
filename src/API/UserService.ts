import axios from 'axios';
import { constantValues } from 'config/constantValues';
import { ILoginData, IRegisterData } from 'types/user';

const baseUrl = `${constantValues.GENERAL.baseAPIUrl}/auth-api`;

export class UserService {
    
    static async login (userData: ILoginData) {
        const response  = await axios.post(`${baseUrl}/login`, userData);
        return response;
    }

    static async logout (token = '') {
        await axios.get(`${baseUrl}/logout`, { headers: { Authorization: `Bearer ${token}`} });
    }

    static async register (userData: IRegisterData) {
        try {
            const regResult = await axios.post(`${baseUrl}/register`, userData);
    
            if (regResult.status === 201 && regResult.statusText === 'Created') {
                return regResult.data;
            }

            else {
                throw new Error(`${regResult}`);
            }
            
        }
        catch (error) {
            return {
                frontEndError: {
                    message: `${error}`
                }
            };
        }
    }
}