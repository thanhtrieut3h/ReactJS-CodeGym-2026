import { useState, useEffect } from "react";
import { apiFootball } from './api/football';
import { Col, Row, Skeleton } from "antd";
import ItemFootball from "./components/ItemFootball";

const WorldCup = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[football, setFootball] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await apiFootball.getDataFootball();
                setFootball(data);
                //console.log(data);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    if(loading){
        return(
            <Row>
                <Col span={24}>
                    <Skeleton active />
                </Col>
            </Row>
        )
    }
    if(error !== null){
        return (
            <Row>
                <Col span={12} offset={6}>
                    <p style={{color: 'red', textAlign: 'center'}}>{error}</p>
                </Col>
            </Row>
        )
    }

    return (
        <ItemFootball football={football}/>
    )
}
export default WorldCup;