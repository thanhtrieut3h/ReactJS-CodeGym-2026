import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 10000
});

export const getProductAll = async () => {
    try {
        const response = await apiClient.get('/products');
        return response.status === 200 ? response.data : [];
    } catch(error){
        console.log(error);
    }
}