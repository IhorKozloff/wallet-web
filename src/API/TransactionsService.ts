import axios from 'axios';
import { App } from 'components/App';
import { constantValues } from 'config/constantValues';
import { AppError } from 'types/error';
import { ICAtegoriesResponse, IFilterParams, ITransaction, TransactionFormData } from 'types/transaction';

const baseUrl = `${constantValues.GENERAL.baseAPIUrl}/wallet-api/transactions`;

export class TransactionsService {

    static async getAll (token = ''): Promise<ITransaction[]> {

        try {
            const { data } = await axios.get(baseUrl, { headers: { Authorization: `Bearer ${token}` } });
            return data;
        } catch (err) {
            const error = err as {message: string, response: {status: number}};
            throw new AppError(error.response.status, error.message);
        }
    
    }

    static async filterCategories (queryParams: IFilterParams & { token: string}): Promise<ICAtegoriesResponse> {

        const {token, month='all', year='all'} = queryParams;  
    
        try {
            const { data } = await axios.get(`${baseUrl}/categories?month=${month}&year=${year}`, { headers: { Authorization: `Bearer ${token}` } });
            return data;
        } catch (err) {
            const error = err as {message: string, response: {status: number}};
            throw new AppError(error.response.status, error.message);
        }
    
    }

    static async add (data: TransactionFormData, token = '') {
        try {
            const res = await axios.post(baseUrl, {...data}, { headers: { Authorization: `Bearer ${token}` } });
            console.log(res);
            return res.data;
        } catch (err) {
            console.log(err);
        }
        
    }

    static async remove (id: string, token = '') {
        try {
            const res = await axios.delete(`${baseUrl}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            return res;
        } catch (error: any) {
            const { response } = error as {response: {status: number, data: {message: string}}}
            return new AppError(
                response.status,
                response.data.message
            );
        }
    }
}