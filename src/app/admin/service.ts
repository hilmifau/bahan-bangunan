import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../api/service';

interface YourResponseType {

}

export const fetchDataBahan = async () => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}/api/bahan`);
        // const responseData: YourResponseType = response.data;

        return response;
    } catch (error) {
        return error;
    }
};