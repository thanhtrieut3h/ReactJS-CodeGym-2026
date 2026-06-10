import { useState, useEffect } from "react";
import { apiFootball } from './api/football';

const WorldCup = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[football, setFootball] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await apiFootball.getDataFootball();
                console.log(data);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <h1> Test data Football</h1>
    )
}
export default WorldCup;