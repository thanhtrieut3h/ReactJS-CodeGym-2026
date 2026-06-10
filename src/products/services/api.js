import axios from "axios";

const getDataProducts = async () => {
    const urlApi = `https://fakestoreapi.com/products`;
    const response = await axios.get(urlApi);
    return response.status === 200 ? await response.data : [];
}

export const apiProduct = {
    getDataProducts
}