import axios from 'axios';
import { constantValues } from 'config/constantValues';
import { ILoginData, IRegisterData, IRegisterError, IRegisterFullfiled } from 'types/user';

const baseUrl = `${constantValues.GENERAL.baseAPIUrl}/auth-api`;



export class UserService {
    
    static async login (userData: ILoginData) {
        const response  = await axios.post(`${baseUrl}/login`, userData);
        return response;
    }

    static async logout (token = '') {
        await axios.get(`${baseUrl}/logout`, { headers: { Authorization: `Bearer ${token}`} });
    }

    static async register (userData: IRegisterData): Promise<IRegisterFullfiled | IRegisterError> {
        try {
            const regResult = await axios.post(`${baseUrl}/register`, userData);
    
            if (regResult.status === 201) {
                return regResult.data;
            }
           
            else {
                throw new Error('Something wrong, please try again.');
            }
            
        }
        catch (error) {

            const serverErrorMessage = (error as any).response.data.message || null;

            if (serverErrorMessage) {
                return {
                    frontEndError: {
                        message: serverErrorMessage,
                    }
                };
            } else {
                return {
                    frontEndError: {
                        message: `${(error as any).message}`
                    }
                }; 
            }

        }
    }
}