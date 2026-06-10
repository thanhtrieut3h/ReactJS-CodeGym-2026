import axios from "axios";

const getDataFootball = async () => {
    const url = `/football/fixture?league_id=1`;
    const response = await axios.get(url);
    const data = response.status === 200 ? await response.data : [];
    return await data["data"]["1"]["data"];
}
export const apiFootball = {
    getDataFootball
}